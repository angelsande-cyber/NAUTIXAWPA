import { z } from 'zod';

export const DrillOutputSchema = z.object({
  scenario: z.string().describe("Descripción narrativa del escenario de socorro."),
  question: z.string().describe("La pregunta para el usuario."),
  options: z.array(z.string()).length(3).describe("Un array de 3 posibles respuestas en formato string."),
  correctAnswerIndex: z.number().int().min(0).max(2).describe("El índice (0, 1, o 2) de la respuesta correcta en el array 'options'."),
  feedback: z.string().describe("La explicación de por qué la respuesta es correcta."),
});

export type DrillOutput = z.infer<typeof DrillOutputSchema>;
