
import {z} from 'genkit';

export const QuizQuestionSchema = z.object({
  question: z.string().describe('El enunciado de la pregunta.'),
  options: z
    .array(z.string())
    .length(4)
    .describe('Un array de 4 posibles respuestas.'),
  correctAnswerIndex: z
    .number()
    .min(0)
    .max(3)
    .describe('El índice (0-3) de la respuesta correcta en el array de opciones.'),
  explanation: z
    .string()
    .describe(
      'Una explicación clara y concisa de por qué la respuesta es correcta.'
    ),
});

export const QuizOutputSchema = z.object({
  questions: z
    .array(QuizQuestionSchema)
    .describe(
      'Un array de 10 preguntas de examen, cada una con sus opciones, respuesta correcta y explicación.'
    ),
});

export type QuizQuestion = z.infer<typeof QuizQuestionSchema>;
export type QuizOutput = z.infer<typeof QuizOutputSchema>;
