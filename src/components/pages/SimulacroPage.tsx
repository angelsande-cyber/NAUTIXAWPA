"use client";
import { useState, useEffect, useMemo } from 'react';
import { generatePerQuiz } from '@/ai/flows/simulacro';
import type { QuizOutput, PerQuestion } from '@/ai/schemas/simulacro-schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Check, Info, RefreshCw, X, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '../ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LoadingScreen = () => (
    <div className="p-4 md:p-6">
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-1" />
            </CardHeader>
            <CardContent className='space-y-6'>
                <Skeleton className="h-4 w-full" />
                <div className='space-y-4'>
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
                <div className="flex justify-between">
                    <Skeleton className="h-10 w-28" />
                    <Skeleton className="h-10 w-28" />
                </div>
            </CardContent>
        </Card>
    </div>
);

const QuizResults = ({ quiz, answers, score, onRestart }: { quiz: QuizOutput, answers: Record<number, number>, score: number, onRestart: () => void }) => (
    <div className="p-4 md:p-6">
        <Card className="w-full max-w-3xl mx-auto">
           <CardHeader>
               <div className="flex items-center gap-4">
                   <Award className="h-12 w-12 text-primary"/>
                   <div>
                       <CardTitle>¡Examen Finalizado!</CardTitle>
                       <CardDescription className="pt-1">Tu nota ha sido de <span className="font-bold text-lg text-primary">{score}/{quiz.length}</span></CardDescription>
                   </div>
               </div>
           </CardHeader>
           <CardContent>
               <Alert variant={score >= 7 ? "default" : "destructive"} className="mb-6">
                   <Info className="h-4 w-4"/>
                   <AlertTitle>{score >= 7 ? "¡Enhorabuena, has aprobado!" : "Necesitas seguir practicando"}</AlertTitle>
                   <AlertDescription>Has acertado {score} de {quiz.length} preguntas.</AlertDescription>
               </Alert>
               
               <div className="space-y-4 mb-6">
                   {quiz.map((q, i) => {
                       const isCorrect = answers[i] === q.correctAnswerIndex;
                       return (
                       <Card key={i} className="p-4">
                           <p className="font-semibold">{i + 1}. {q.question}</p>
                           <p className={cn("text-sm mt-1", isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
                               {isCorrect ? <Check className="inline h-4 w-4 mr-1"/> : <X className="inline h-4 w-4 mr-1"/>}
                               Tu respuesta: "{answers[i] !== undefined ? q.options[answers[i]] : 'No contestada'}"
                           </p>
                           {!isCorrect && <p className="text-sm mt-1 text-green-600 dark:text-green-400">Respuesta correcta: "{q.options[q.correctAnswerIndex]}"</p>}
                           <Accordion type="single" collapsible className="w-full mt-2 text-sm">
                               <AccordionItem value={`item-${i}`}>
                                   <AccordionTrigger>Ver explicación</AccordionTrigger>
                                   <AccordionContent>{q.explanation}</AccordionContent>
                               </AccordionItem>
                           </Accordion>
                       </Card>
                   )})}
               </div>

               <Button onClick={onRestart} className="w-full">
                   <RefreshCw className="mr-2 h-4 w-4" />
                   Hacer otro examen
               </Button>
           </CardContent>
       </Card>
   </div>
);


const QuizInterface = ({ quiz, answers, setAnswers, onFinish, onRestart, loading }: { quiz: QuizOutput, answers: Record<number, number>, setAnswers: React.Dispatch<React.SetStateAction<Record<number, number>>>, onFinish: () => void, onRestart: () => void, loading: boolean }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
        setAnswers(prev => ({...prev, [questionIndex]: answerIndex}));
    };

    const currentQuestion = quiz?.[currentQuestionIndex];
    const progress = quiz ? ((currentQuestionIndex + 1) / quiz.length) * 100 : 0;
    const isQuizComplete = quiz && Object.keys(answers).length === quiz.length;

     if (!currentQuestion) return null;

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <div className='flex justify-between items-start'>
                        <div>
                            <CardTitle>Examen de Práctica PER</CardTitle>
                            <CardDescription className="pt-1">
                                Pon a prueba tus conocimientos de náutica.
                            </CardDescription>
                        </div>
                        <Button onClick={onRestart} disabled={loading} size="icon" variant="ghost">
                            <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div>
                        <div className="mb-4">
                            <Label htmlFor="progress" className="text-sm text-muted-foreground">Pregunta {currentQuestionIndex + 1} de {quiz.length}</Label>
                            <Progress id="progress" value={progress} className="mt-1" />
                        </div>

                        <h3 className="font-semibold text-lg mt-6 mb-4">{currentQuestionIndex + 1}. {currentQuestion.question}</h3>
                        <RadioGroup 
                            value={answers[currentQuestionIndex]?.toString()}
                            onValueChange={(value) => handleAnswerChange(currentQuestionIndex, Number(value))}
                            className="gap-3"
                        >
                            {currentQuestion.options.map((option, index) => (
                                <Label key={index} htmlFor={`option-${index}`} className={"flex items-start space-x-3 p-4 border rounded-lg transition-colors cursor-pointer hover:bg-accent/50"}>
                                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1"/>
                                    <span className="flex-1">{option}</span>
                                </Label>
                            ))}
                        </RadioGroup>

                       <div className="flex justify-between items-center mt-6">
                            <Button variant="outline" onClick={() => setCurrentQuestionIndex(p => p - 1)} disabled={currentQuestionIndex === 0}>
                                <ChevronLeft className="mr-2 h-4 w-4"/>
                                Anterior
                            </Button>

                            {currentQuestionIndex < quiz.length - 1 ? (
                                 <Button variant="default" onClick={() => setCurrentQuestionIndex(p => p + 1)}>
                                    Siguiente
                                    <ChevronRight className="ml-2 h-4 w-4"/>
                                </Button>
                            ) : (
                                <Button onClick={onFinish} disabled={!isQuizComplete}>
                                    Finalizar y Corregir
                                </Button>
                            )}
                       </div>
                       {!isQuizComplete && currentQuestionIndex === quiz.length -1 && (
                            <p className="text-center text-xs text-muted-foreground mt-2">Debes responder todas las preguntas para poder corregir.</p>
                       )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};


export default function SimulacroPage() {
    const [quiz, setQuiz] = useState<QuizOutput | null>(null);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [isFinished, setIsFinished] = useState(false);
    const { toast } = useToast();

    const handleGenerateQuiz = async () => {
        setLoading(true);
        setQuiz(null);
        setAnswers({});
        setIsFinished(false);
        try {
            const quizData = await generatePerQuiz();
            setQuiz(quizData);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error al generar el examen",
                description: "No se pudo contactar con el servicio de IA. Por favor, inténtalo de nuevo más tarde.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        handleGenerateQuiz();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const score = useMemo(() => {
        if (!quiz) return 0;
        return quiz.reduce((total, question, index) => {
            return total + (answers[index] === question.correctAnswerIndex ? 1 : 0);
        }, 0);
    }, [quiz, answers]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (!quiz) {
         return (
            <div className="p-4 md:p-6 text-center">
                 <Card className="w-full max-w-3xl mx-auto p-8">
                     <CardTitle>Error</CardTitle>
                     <CardDescription className="mt-2">No se pudo cargar el examen. Por favor, inténtalo de nuevo.</CardDescription>
                     <Button onClick={handleGenerateQuiz} className="mt-4">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reintentar
                    </Button>
                 </Card>
            </div>
        );
    }

    if (isFinished) {
        return <QuizResults quiz={quiz} answers={answers} score={score} onRestart={handleGenerateQuiz} />;
    }

    return (
        <QuizInterface 
            quiz={quiz} 
            answers={answers}
            setAnswers={setAnswers}
            onFinish={() => setIsFinished(true)}
            onRestart={handleGenerateQuiz}
            loading={loading}
        />
    );
}
