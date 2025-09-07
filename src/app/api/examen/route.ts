'use server';

import { generatePerQuiz } from '@/ai/flows/examen';
import { appRoute } from '@genkit-ai/next';

// This is the correct pattern for exposing a Genkit flow as a Next.js API route.
// The `appRoute` function takes a Genkit Action (a flow or prompt) and returns
// a Next.js request handler.
export const POST = appRoute({
  flow: generatePerQuiz,
});
