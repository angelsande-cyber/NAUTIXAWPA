/**
 * @fileoverview Genkit API route for Next.js.
 *
 * This file creates a Next.js API route that serves all Genkit flows.
 * It uses the `@genkit-ai/next` plugin to start the Genkit server.
 */

import { ai } from '@/ai/genkit';
import { startGenkitServer } from '@genkit-ai/next/server';

const { GET, POST } = startGenkitServer({ ai });

export { GET, POST };
