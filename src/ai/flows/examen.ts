'use server';
/**
 * @fileOverview Flujo para generar un examen de práctica para el PER.
 *
 * - generatePerQuiz - Genera un quiz de 10 preguntas.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {QuizOutputSchema} from '../schemas/examen-schema';

const perQuizPrompt = ai.definePrompt({
  name: 'perQuizPrompt',
  model: 'googleai/gemini-2.5-pro',
  output: {
    schema: QuizOutputSchema,
  },
  prompt: `Eres un experto instructor y examinador de la titulación de Patrón de Embarcaciones de Recreo (PER) en España.

Tu tarea es generar un examen de práctica tipo test de 10 preguntas.

Las preguntas deben cubrir de forma variada y equilibrada el temario oficial del PER, incluyendo pero no limitándose a:
- Reglamento Internacional para Prevenir Abordajes (COLREG): reglas de rumbo y gobierno, luces y marcas.
- Balizamiento (IALA A): marcas laterales, cardinales, peligros aislados, etc.
- Maniobras y navegación: ciaboga, dar atrás, hombre al agua.
- Seguridad en la mar: equipo de seguridad, emergencias, lucha contra incendios, abandono.
- Meteorología: interpretación de boletines, escala Beaufort.
- Nomenclatura náutica.
- Legislación.

Para cada pregunta:
1.  Crea un enunciado claro y conciso.
2.  Proporciona 4 opciones de respuesta (a, b, c, d).
3.  Solo una de las opciones puede ser la correcta.
4.  Indica el índice de la respuesta correcta (0 para a, 1 para b, 2 para c, 3 para d).
5.  Proporciona una explicación breve pero fundamentada de por qué la respuesta correcta lo es, haciendo referencia a la normativa o concepto correspondiente si es posible. La explicación es muy importante para el aprendizaje del usuario.

El examen debe ser un desafío realista para un aspirante al PER. Evita preguntas demasiado obvias o rebuscadas.`,
});

export const generatePerQuiz = ai.defineFlow(
  {
    name: 'generatePerQuizFlow',
    outputSchema: QuizOutputSchema,
  },
  async () => {
    console.log('Generating PER quiz...');
    try {
      const {output} = await perQuizPrompt({});
      if (!output || !output.questions || output.questions.length === 0) {
        throw new Error('La IA no generó una respuesta válida o las preguntas están vacías.');
      }
      // Basic validation for each question
      for (const q of output.questions) {
        if (q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) {
            throw new Error(`Índice de respuesta fuera de rango para la pregunta: "${q.question}"`);
        }
      }
      console.log(`Quiz generated successfully with ${output.questions.length} questions.`);
      return output;
    } catch (e) {
      console.error("Error al generar el examen PER:", e);
      // Re-throw the error to be caught by the client-side caller
      throw e;
    }
  }
);
