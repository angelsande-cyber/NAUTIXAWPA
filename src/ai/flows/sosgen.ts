'use server';
/**
 * @fileOverview Flow to generate a GMDSS distress message from natural language input.
 *
 * - generateSos - A function that takes a natural language description and returns a structured distress message.
 * - SosInput - The input type for the generateSos function.
 * - SosOutput - The return type for the generateSos function.
 */

import { ai } from '@/ai/genkit';
import { SosInput, SosInputSchema, SosOutput, SosOutputSchema } from '@/ai/schemas/sos-schema';


const sosPrompt = ai.definePrompt({
    name: 'sosPrompt',
    input: { schema: SosInputSchema },
    output: { schema: SosOutputSchema },
    prompt: `Eres un asistente de radio GMDSS para un buque en peligro. Tu única tarea es analizar la descripción de una emergencia y extraer los datos clave para generar un mensaje de socorro MAYDAY.

**Reglas Estrictas:**
1.  **Analiza la entrada del usuario:** Extrae la siguiente información:
    *   Nombre del buque.
    *   MMSI.
    *   Indicativo de llamada (si lo hay).
    *   Posición (puede ser coordenadas o una descripción como "cerca de la isla de Sálvora").
    *   Naturaleza del peligro (incendio, vía de agua, hundimiento, emergencia médica, etc.). Tradúcelo a un término estándar en inglés (FIRE, FLOODING, SINKING, MEDICAL EMERGENCY).
    *   Número de personas a bordo (POB).
    *   Tipo de ayuda que necesita (por defecto, asistencia inmediata).
2.  **Maneja la información faltante:** Si algún dato no está presente en la descripción, usa "UNKNOWN" para ese campo, excepto para 'assistanceRequired' que siempre será "REQUIRE IMMEDIATE ASSISTANCE".
3.  **NO INVENTES INFORMACIÓN:** Basa tu respuesta únicamente en los datos proporcionados.

**Texto del usuario:** "{{naturalInput}}"

Devuelve tu respuesta exclusivamente en formato JSON, siguiendo el esquema proporcionado.
`,
  });

const sosFlow = ai.defineFlow(
    {
        name: 'sosFlow',
        inputSchema: SosInputSchema,
        outputSchema: SosOutputSchema,
    },
    async (input) => {
        const { output } = await sosPrompt(input);
        if (!output) {
            throw new Error("AI failed to generate a valid response.");
        }
        return output;
    }
);

export async function generateSos(input: SosInput): Promise<SosOutput> {
  return sosFlow(input);
}
