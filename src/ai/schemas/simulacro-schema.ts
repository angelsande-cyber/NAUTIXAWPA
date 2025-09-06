import { z } from 'zod';

export const QuestionSchema = z.object({
  question: z.string().describe("El enunciado de la pregunta tipo test."),
  options: z.array(z.string()).length(4).describe("Un array de 4 posibles respuestas en formato string."),
  correctAnswerIndex: z.number().int().min(0).max(3).describe("El índice (0, 1, 2, o 3) de la respuesta correcta en el array 'options'."),
  explanation: z.string().describe("Una explicación breve y clara de la respuesta correcta."),
});

export const QuizOutputSchema = z.array(QuestionSchema).length(10);

export type PerQuestion = z.infer<typeof QuestionSchema>;
export type QuizOutput = z.infer<typeof QuizOutputSchema>;
