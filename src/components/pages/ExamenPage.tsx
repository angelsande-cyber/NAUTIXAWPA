"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { QuizQuestion } from "@/types/examen-types";
import { FileText, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { EXAMEN_QUESTIONS_BANK } from "@/lib/data/examen-questions";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";


const QUIZ_RESULTS_KEY = 'perQuizResults';

type ViewState = 'dashboard' | 'quiz' | 'results';

interface QuizSession {
  questions: QuizQuestion[];
  userAnswers: Record<number, number | undefined>;
  currentQuestionIndex: number;
}

interface QuizResult {
    score: number;
    totalQuestions: number;
    date: string;
    isPass: boolean;
    session: QuizSession;
}

const QuizResults = ({ result, onRestart }: { result: QuizResult, onRestart: () => void }) => {
    const { score, totalQuestions, isPass, session } = result;
    const passThreshold = Math.ceil(totalQuestions * 0.7);

    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Resultados del Examen</CardTitle>
                    <CardDescription>Has completado el examen. Aquí tienes tu resultado.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Alert variant={isPass ? "default" : "destructive"} className={cn(isPass && "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300 [&>svg]:text-green-500")}>
                        {isPass ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <AlertTitle className="text-xl">{isPass ? "¡Aprobado!" : "Suspenso"}</AlertTitle>
                        <AlertDescription>
                            Has acertado <strong>{score} de {totalQuestions}</strong> preguntas. (Mínimo para aprobar: {passThreshold})
                        </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Revisión de preguntas</h3>
                        {session.questions.map((question, index) => {
                            const userAnswerIndex = session.userAnswers[index];
                            const isCorrect = userAnswerIndex === question.correctAnswerIndex;
                            const userAnswer = userAnswerIndex !== undefined ? question.options[userAnswerIndex] : "No respondida";

                            return (
                                <Card key={index} className={cn("p-4", !isCorrect && "bg-destructive/10 border-destructive/20")}>
                                    <p className="font-semibold">{index + 1}. {question.question}</p>
                                    <div className="mt-2 text-sm space-y-1">
                                        <p>Tu respuesta: <span className={cn("font-medium", isCorrect ? "text-primary" : "text-destructive")}>{userAnswer}</span></p>
                                        {!isCorrect && <p>Respuesta correcta: <span className="font-medium text-green-600 dark:text-green-400">{question.options[question.correctAnswerIndex]}</span></p>}
                                    </div>
                                    <div className="mt-2 pt-2 border-t text-sm">
                                        <p className="font-semibold">Justificación:</p>
                                        <p className="text-muted-foreground">{question.explanation}</p>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>

                     <div className="text-center mt-6">
                        <Button onClick={onRestart}>
                            <RefreshCw className="mr-2 h-4 w-4"/>
                            Volver al Panel
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default function ExamenPage() {
  const [view, setView] = useState<ViewState>('dashboard');
  const [quizSession, setQuizSession] = useState<QuizSession | null>(null);
  const [lastResults, setLastResults] = useState<QuizResult[]>([]);
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    try {
      const savedResults = localStorage.getItem(QUIZ_RESULTS_KEY);
      if (savedResults) {
        setLastResults(JSON.parse(savedResults));
      }
    } catch (e) {
      console.error("Failed to load results from localStorage", e);
    }
  }, []);

  const saveResults = (newResult: QuizResult) => {
    try {
      const resultsToSave = [newResult, ...lastResults].slice(0, 10);
      setLastResults(resultsToSave);
      localStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(resultsToSave));
    } catch (e) {
        console.error("Failed to save results to localStorage", e);
    }
  };

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const startNewQuiz = useCallback(() => {
    const allQuestions = EXAMEN_QUESTIONS_BANK.questions;
    const shuffledQuestions = shuffleArray([...allQuestions]);
    const selectedQuestions = shuffledQuestions.slice(0, 10);

    setQuizSession({
      questions: selectedQuestions,
      userAnswers: {},
      currentQuestionIndex: 0,
    });
    setView('quiz');
  }, []);

  const handleAnswerChange = (questionIndex: number, answerIndexStr: string) => {
    if (!quizSession) return;
    const answerIndex = parseInt(answerIndexStr, 10);
    const newUserAnswers = { ...quizSession.userAnswers, [questionIndex]: answerIndex };
    setQuizSession(prev => prev ? { ...prev, userAnswers: newUserAnswers } : null);
  };
  
  const handleFinishQuiz = () => {
    if(!quizSession) return;
    
    const score = quizSession.questions.reduce((score, question, index) => {
      return quizSession.userAnswers[index] === question.correctAnswerIndex ? score + 1 : score;
    }, 0);
    
    const totalQuestions = quizSession.questions.length;
    const passThreshold = Math.ceil(totalQuestions * 0.7);
    const isPass = score >= passThreshold;

    const result: QuizResult = {
        score,
        totalQuestions,
        isPass,
        date: new Date().toISOString(),
        session: quizSession
    };

    saveResults(result);
    setCurrentResult(result);
    setQuizSession(null);
    setView('results');
  }

  const handleRestart = () => {
    setCurrentResult(null);
    setView('dashboard');
  }

  if (view === 'results' && currentResult) {
      return <QuizResults result={currentResult} onRestart={handleRestart} />
  }

  if (view === 'quiz' && quizSession) {
    const { questions, currentQuestionIndex, userAnswers } = quizSession;
    const totalQuestions = questions.length;
    const currentQuestion = questions[currentQuestionIndex];

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
                            onClick={() => setQuizSession(s => s ? {...s, currentQuestionIndex: s.currentQuestionIndex - 1} : null)}
                            disabled={currentQuestionIndex === 0}
                        >
                            Anterior
                        </Button>
                        {currentQuestionIndex < totalQuestions - 1 ? (
                            <Button onClick={() => setQuizSession(s => s ? {...s, currentQuestionIndex: s.currentQuestionIndex + 1} : null)}>
                                Siguiente
                            </Button>
                        ) : (
                            <Button onClick={handleFinishQuiz}>
                                Finalizar
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
  }
  
  return (
    <div className="p-4 md:p-6 space-y-6">
        <Card className="w-full max-w-3xl mx-auto">
             <CardHeader>
                <CardTitle>Examen de Práctica PER</CardTitle>
                <CardDescription>Pon a prueba tus conocimientos con un test de 10 preguntas aleatorias.</CardDescription>
             </CardHeader>
             <CardContent className="text-center">
                 <Button size="lg" onClick={startNewQuiz}>
                    <FileText className="mr-2 h-5 w-5"/>
                    Comenzar Nuevo Examen
                 </Button>
             </CardContent>
        </Card>
        
        {lastResults.length > 0 && (
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Resultados Recientes</CardTitle>
                    <CardDescription>Tu historial de los últimos exámenes realizados.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                         <div className="relative w-full overflow-auto">
                             <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                                        <TableHead>Fecha</TableHead>
                                        <TableHead>Puntuación</TableHead>
                                        <TableHead className="text-right">Resultado</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                     {lastResults.map((result, index) => (
                                         <TableRow key={index}>
                                            <TableCell>{format(new Date(result.date), "dd/MM/yyyy 'a las' HH:mm", { locale: es })}</TableCell>
                                            <TableCell className="font-semibold">{result.score} / {result.totalQuestions}</TableCell>
                                            <TableCell className="text-right">
                                                <span className={cn("font-bold px-3 py-1 text-xs rounded-full", result.isPass ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200")}>
                                                    {result.isPass ? "APROBADO" : "SUSPENSO"}
                                                </span>
                                            </TableCell>
                                         </TableRow>
                                     ))}
                                </TableBody>
                            </Table>
                         </div>
                    </div>
                </CardContent>
            </Card>
        )}
    </div>
  );
}
