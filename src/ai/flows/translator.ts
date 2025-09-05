'use server';
/**
 * @fileOverview Flow to translate nautical terms.
 *
 * - translateText - A function that takes text and translates it between English and Spanish.
 */
import { ai } from '@/ai/genkit';
import { TranslateInput, TranslateInputSchema, TranslateOutput, TranslateOutputSchema } from '@/ai/schemas/translator-schema';

const translatePrompt = ai.definePrompt({
    name: 'translatePrompt',
    input: { schema: TranslateInputSchema },
    output: { schema: TranslateOutputSchema },
    prompt: `Eres un experto traductor náutico y marítimo. Tu única tarea es traducir el siguiente texto entre español e inglés. Detecta el idioma de origen y traduce al otro. Proporciona únicamente la traducción directa sin explicaciones adicionales. Si el texto no es náutico, tradúcelo literalmente. Texto a traducir: "{{textToTranslate}}"`,
  });

const translateFlow = ai.defineFlow(
    {
        name: 'translateFlow',
        inputSchema: TranslateInputSchema,
        outputSchema: TranslateOutputSchema,
    },
    async (input) => {
        const { output } = await translatePrompt(input);
        if (!output) {
            throw new Error("AI failed to generate a valid response.");
        }
        return output;
    }
);

export async function translateText(input: TranslateInput): Promise<TranslateOutput> {
  return translateFlow(input);
}
