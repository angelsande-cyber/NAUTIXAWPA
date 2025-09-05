import { z } from 'zod';

export const TranslateInputSchema = z.object({
  textToTranslate: z.string().describe('The text to be translated.'),
});
export type TranslateInput = z.infer<typeof TranslateInputSchema>;

export const TranslateOutputSchema = z.object({
  translation: z.string().describe('The translated text.'),
});
export type TranslateOutput = z.infer<typeof TranslateOutputSchema>;
