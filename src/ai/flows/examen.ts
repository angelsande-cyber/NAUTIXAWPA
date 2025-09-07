'use server';
/**
 * @fileOverview Flujo para generar un examen de práctica para el PER.
 *
 * - generatePerQuiz - Genera un quiz de 10 preguntas.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {QuizOutputSchema} from '../schemas/examen-schema';


const PerQuizInputSchema = z.object({
  language: z.enum(['es', 'en']).describe("The language to generate the quiz in ('es' or 'en')."),
});

const perQuizPrompt = ai.definePrompt({
  name: 'perQuizPrompt',
  input: { schema: PerQuizInputSchema },
  model: 'googleai/gemini-2.5-pro',
  output: {
    schema: QuizOutputSchema,
  },
  prompt: `You are an expert instructor and examiner for the Spanish "Patrón de Embarcaciones de Recreo (PER)" boat master license.

Your task is to generate a 10-question multiple-choice practice exam in the specified language: {{{language}}}.

The questions must cover the official PER syllabus in a varied and balanced way, including but not limited to:
- International Regulations for Preventing Collisions at Sea (COLREGs): steering and sailing rules, lights and shapes.
- Buoyage (IALA System A): lateral, cardinal, isolated danger marks, etc.
- Maneuvering and navigation: turning in a tight space, going astern, man overboard.
- Safety at sea: safety equipment, emergencies, firefighting, abandon ship.
- Meteorology: interpreting forecasts, Beaufort scale.
- Nautical terminology.
- Legislation.

For each question:
1.  Create a clear and concise question statement.
2.  Provide 4 answer options (a, b, c, d).
3.  Only one of the options can be correct.
4.  Indicate the index of the correct answer (0 for a, 1 for b, 2 for c, 3 for d).
5.  Provide a brief but well-founded explanation of why the correct answer is right, referencing the corresponding regulation or concept if possible. The explanation is very important for the user's learning.

The exam should be a realistic challenge for a PER candidate. Avoid questions that are too obvious or obscure.
If the language is 'es', all output must be in Spanish. If the language is 'en', all output must be in English.
`,
});

export const generatePerQuiz = ai.defineFlow(
  {
    name: 'generatePerQuizFlow',
    inputSchema: PerQuizInputSchema,
    outputSchema: QuizOutputSchema,
  },
  async (input) => {
    console.log(`Generating PER quiz in ${input.language}...`);
    try {
      const {output} = await perQuizPrompt(input);
      if (!output || !output.questions || output.questions.length === 0) {
        throw new Error('The AI did not generate a valid response or the questions are empty.');
      }
      // Basic validation for each question
      for (const q of output.questions) {
        if (q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) {
            throw new Error(`Answer index out of range for question: "${q.question}"`);
        }
      }
      console.log(`Quiz generated successfully with ${output.questions.length} questions.`);
      return output;
    } catch (e) {
      console.error("Error generating PER quiz:", e);
      // Re-throw the error to be caught by the client-side caller
      throw e;
    }
  }
);
