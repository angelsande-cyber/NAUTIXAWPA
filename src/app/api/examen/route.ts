'use server';

import { generatePerQuiz } from '@/ai/flows/examen';
import { appRoute } from '@genkit-ai/next';

// Esta es la forma correcta de exponer el flujo a través de la API.
// Pasamos la función 'generatePerQuiz', que es una acción válida de Genkit.
export const POST = appRoute({
  flow: generatePerQuiz,
  // Opcional: habilitar CORS si se llama desde otro dominio
  // cors: {
  //   origin: '*'
  // }
});
