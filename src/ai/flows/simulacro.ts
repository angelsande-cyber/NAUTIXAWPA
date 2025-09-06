'use server';
/**
 * @fileOverview Flow to generate a PER (Patrón de Embarcaciones de Recreo) quiz.
 *
 * - generatePerQuiz - A function that returns a 10-question quiz.
 */

import { ai } from '@/ai/genkit';
import { QuizOutput, QuizOutputSchema } from '@/ai/schemas/simulacro-schema';

const quizPrompt = ai.definePrompt({
    name: 'perQuizPrompt',
    output: { schema: QuizOutputSchema },
    prompt: `
            Eres un experto instructor náutico y examinador para la titulación de Patrón de Embarcaciones de Recreo (PER) en España.
            Tu tarea es generar un examen tipo test de 10 preguntas que cubra de forma variada el temario oficial del PER.

            **REGLAS INQUEBRANTABLES:**
            1.  **Genera exactamente 10 preguntas.**
            2.  **Varía los temas:** Asegúrate de que las preguntas cubran un amplio espectro del temario del PER, incluyendo, pero no limitándose a:
                *   Reglamento Internacional para Prevenir Abordajes (COLREG): reglas de rumbo y gobierno, luces y marcas.
                *   Balizamiento (Sistema IALA A): marcas laterales, cardinales, peligro aislado, etc.
                *   Seguridad en la mar: equipo de seguridad, emergencias, lucha contra incendios.
                *   Navegación: cartas náuticas, coordenadas, rumbos, mareas.
                *   Meteorología: interpretación de partes, fenómenos básicos.
                *   Maniobras y gobierno del buque.
            3.  **Para cada pregunta, debes proporcionar:**
                *   **Pregunta (question):** Un enunciado claro y conciso.
                *   **Opciones (options):** Un array con exactamente 4 posibles respuestas. Una debe ser la correcta y las otras tres deben ser incorrectas pero verosímiles (distractores comunes).
                *   **Índice de la respuesta correcta (correctAnswerIndex):** El índice (0, 1, 2 o 3) de la respuesta correcta en el array de opciones.
                *   **Explicación (explanation):** Una explicación breve pero clara de por qué la respuesta correcta es la correcta, y si es relevante, por qué las otras no lo son.
            4.  **Formato de Salida:** Devuelve el resultado exclusivamente como un objeto JSON que se ajuste al esquema proporcionado. No incluyas ningún texto o comentario fuera del JSON.
            `,
  });

const quizFlow = ai.defineFlow(
    {
        name: 'perQuizFlow',
        outputSchema: QuizOutputSchema,
    },
    async () => {
        const { output } = await quizPrompt({});
        if (!output) {
            throw new Error("AI failed to generate a valid response.");
        }
        
        // Ensure the correct index is plausible and exists
        output.forEach(q => {
            if (q.correctAnswerIndex < 0 || q.correctAnswerIndex >= q.options.length) {
                // A simple fallback, though the prompt is strict.
                console.warn("AI generated an invalid correctAnswerIndex, falling back to 0");
                q.correctAnswerIndex = 0;
            }
        });
        
        return output;
    }
);

export async function generatePerQuiz(): Promise<QuizOutput> {
  return quizFlow();
}
