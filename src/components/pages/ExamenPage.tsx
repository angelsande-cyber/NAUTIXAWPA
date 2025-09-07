"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { generatePerQuiz } from "@/ai/flows/examen";
import type { QuizOutput, QuizQuestion } from "@/ai/schemas/examen-schema";
import { CheckCircle, HelpCircle, RefreshCw, XCircle } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const LoadingSkeleton = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Card className="w-full max-w-md p-8">
                <div className="animate-spin mb-4">
                    <RefreshCw className="mx-auto h-12 w-12 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Generando tu examen...</h2>
                <p className="mt-2 text-muted-foreground">El asistente de IA está preparando 10 preguntas para ti. ¡Un momento!</p>
                 <div className="w-full max-w-sm space-y-4 mt-8">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                  <Skeleton className="h-10 w-full mt-4" />
                </div>
            </Card>
        </div>
    );
};

export default function ExamenPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<QuizOutput | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | undefined>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const loadQuiz = useCallback(async () => {
    setLoading(true);
    setError(null);
    setQuiz(null);
    setShowResults(false);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    try {
      // Hardcode language to 'es'
      const generatedQuiz = await generatePerQuiz({ language: 'es' });
      setQuiz(generatedQuiz);
    } catch (e) {
      console.error(e);
      setError("No se pudo generar el examen. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuiz();
  }, [loadQuiz]);

  const handleAnswerChange = (questionIndex: number, answerIndexStr: string) => {
    const answerIndex = parseInt(answerIndexStr, 10);
    setUserAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    return quiz.questions.reduce((score, question, index) => {
      return userAnswers[index] === question.correctAnswerIndex ? score + 1 : score;
    }, 0);
  };

  if (loading) {
    return <LoadingSkeleton />;
  }
  
  if (error) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Card className="w-full max-w-md p-6">
                <XCircle className="mx-auto h-12 w-12 text-destructive" />
                <h2 className="mt-4 text-xl font-semibold">Error al generar</h2>
                <p className="mt-2 text-muted-foreground">{error}</p>
                <Button onClick={loadQuiz} className="mt-6">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reintentar
                </Button>
            </Card>
        </div>
    );
  }


  if (!quiz || quiz.questions.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Card className="w-full max-w-md p-6">
                 <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                <h2 className="mt-4 text-xl font-semibold">Sin Preguntas</h2>
                <p className="mt-2 text-muted-foreground">La IA no devolvió ninguna pregunta. Intenta generar un nuevo examen.</p>
                <Button onClick={loadQuiz} className="mt-6">
                    <RefreshCw className="mr-2 h-4 w-4" />
                     Generar Nuevo Examen
                </Button>
            </Card>
        </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const score = calculateScore();
  const totalQuestions = quiz.questions.length;
  
  if (showResults) {
    const passThreshold = Math.ceil(totalQuestions * 0.7);
    const isPass = score >= passThreshold;
    return (
      <div className="p-4 md:p-6">
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Resultados del Examen</CardTitle>
            <CardDescription>{`Has respondido correctamente a ${score} de ${totalQuestions} preguntas.`}</CardDescription>
            <div className={`mt-4 text-2xl font-bold ${isPass ? 'text-green-600' : 'text-destructive'}`}>
                {isPass ? "¡APROBADO!" : "SUSPENSO"}
            </div>
            <p className="text-5xl font-bold mt-2">{score}/{totalQuestions}</p>
          </CardHeader>
          <CardContent>
             <Accordion type="single" collapsible className="w-full">
               {quiz.questions.map((q, index) => {
                 const userAnswer = userAnswers[index];
                 const isCorrect = userAnswer === q.correctAnswerIndex;
                 return (
                   <AccordionItem value={`item-${index}`} key={index}>
                     <AccordionTrigger>
                        <div className="flex items-center gap-3 w-full">
                           {isCorrect ? <CheckCircle className="h-5 w-5 text-green-500 shrink-0"/> : <XCircle className="h-5 w-5 text-destructive shrink-0"/>}
                           <span className="text-left flex-1">{`Pregunta ${index + 1}`}: {q.question}</span>
                        </div>
                     </AccordionTrigger>
                     <AccordionContent className="space-y-4">
                        <div className="pl-8 text-sm">
                           <p>Tu respuesta: <span className={cn("font-semibold", userAnswer === undefined ? "italic" : "", !isCorrect && "text-destructive")}>{userAnswer !== undefined ? q.options[userAnswer] : 'No respondida'}</span></p>
                           {!isCorrect && userAnswer !== undefined && <p>Respuesta correcta: <span className="font-semibold text-green-600">{q.options[q.correctAnswerIndex]}</span></p>}
                           {userAnswer === undefined && <p>Respuesta correcta: <span className="font-semibold text-green-600">{q.options[q.correctAnswerIndex]}</span></p>}
                        </div>
                        <Alert>
                           <HelpCircle className="h-4 w-4" />
                           <AlertTitle>Explicación</AlertTitle>
                           <AlertDescription>{q.explanation}</AlertDescription>
                        </Alert>
                     </AccordionContent>
                   </AccordionItem>
                 );
               })}
             </Accordion>
             <div className="mt-6 text-center">
                <Button onClick={loadQuiz}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Generar Nuevo Examen
                </Button>
             </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Examen de Práctica PER</CardTitle>
          <CardDescription>{`Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`}</CardDescription>
          <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} className="mt-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="font-semibold text-lg">{currentQuestion.question}</p>
            <RadioGroup
              key={currentQuestionIndex}
              value={userAnswers[currentQuestionIndex]?.toString()}
              onValueChange={(value) => handleAnswerChange(currentQuestionIndex, value)}
              className="space-y-2"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-md has-[:checked]:bg-muted has-[:checked]:border-primary transition-all">
                  <RadioGroupItem value={index.toString()} id={`q${currentQuestionIndex}-o${index}`} />
                  <Label htmlFor={`q${currentQuestionIndex}-o${index}`} className="flex-1 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
              disabled={currentQuestionIndex === 0}
            >
              Anterior
            </Button>
            {currentQuestionIndex < totalQuestions - 1 ? (
              <Button onClick={() => setCurrentQuestionIndex(prev => prev + 1)}>
                Siguiente
              </Button>
            ) : (
              <Button onClick={() => setShowResults(true)}>
                Finalizar
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
