/**
 * @fileoverview Genkit API route for Next.js.
 *
 * This file creates a Next.js API route that serves all Genkit flows.
 * It uses the `@genkit-ai/next` plugin to start the Genkit server.
 */

import { ai } from '@/ai/genkit';
import { defineServer } from '@genkit-ai/next/server';

export default defineServer({
  ai,
  // You can pass in additional options here, for example:
  //
  //   cors: {
  //     origin: 'http://localhost:3000',
  //   },
  //
});
