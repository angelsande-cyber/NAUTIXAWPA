'use server';

import { generatePerQuizFlow } from '@/ai/flows/examen';
import { appRoute } from '@genkit-ai/next';

// Esta es la forma correcta de exponer el flujo a través de la API.
// Pasamos el flow 'generatePerQuizFlow', que es una acción válida de Genkit con el método .run().
export const POST = appRoute({
  flow: generatePerQuizFlow,
  // Opcional: habilitar CORS si se llama desde otro dominio
  // cors: {
  //   origin: '*'
  // }
});
