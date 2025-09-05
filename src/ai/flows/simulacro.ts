'use server';
/**
 * @fileOverview Flow to generate a GMDSS drill scenario.
 *
 * - generateDrill - A function that returns a drill scenario.
 */

import { ai } from '@/ai/genkit';
import { DrillOutput, DrillOutputSchema } from '@/ai/schemas/simulacro-schema';

const drillPrompt = ai.definePrompt({
    name: 'drillPrompt',
    output: { schema: DrillOutputSchema },
    prompt: `
            Eres un instructor GMDSS experto y estricto. Tu tarea es generar un caso práctico para un navegante (estudiante o tripulante de un buque) sobre cómo iniciar una comunicación de socorro.

            **REGLAS INQUEBRANTABLES:**
            1.  **Crea un escenario de peligro:** Describe una situación de peligro grave e inminente a bordo de un buque. Sé creativo y varía los escenarios en cada generación.
                *   **Tipos de Buque:** Pesquero, yate, mercante, velero.
                *   **Naturaleza del Peligro:** Incendio incontrolable, vía de agua grave, fallo estructural, colisión con hundimiento, abandono de buque.
                *   **Ejemplo de escenario:** "Estás a bordo del pesquero 'MARCATO' a 15 millas al oeste de Finisterre. Se declara un incendio en la sala de máquinas que se extiende rápidamente y la tripulación no puede controlarlo. El capitán te ordena que lances la llamada de socorro."
            2.  **Genera una pregunta clave:** La pregunta siempre debe ser: "¿Cuál es la primera y más importante llamada que debes hacer por la radio VHF?"
            3.  **Genera 3 opciones de respuesta:**
                *   Una opción **correcta** que debe ser la llamada de socorro completa: "MAYDAY, MAYDAY, MAYDAY, aquí [Nombre del Buque], [Nombre del Buque], [Nombre del Buque]".
                *   Dos opciones **incorrectas** pero plausibles, como "PAN PAN, PAN PAN, PAN PAN...", "SÉCURITÉ, SÉCURITÉ, SÉCURITÉ...", o una llamada MAYDAY incompleta o mal formulada.
            4.  **Genera un feedback:** Proporciona una explicación clara de por qué la respuesta correcta es la adecuada, enfatizando que 'MAYDAY' se usa para peligro grave e inminente y la importancia de la repetición y la identificación del buque.

            **Formato de Salida:** Devuelve el resultado exclusivamente en formato JSON, siguiendo el esquema proporcionado.
            `,
  });

const drillFlow = ai.defineFlow(
    {
        name: 'drillFlow',
        outputSchema: DrillOutputSchema,
    },
    async () => {
        const { output } = await drillPrompt({});
        if (!output) {
            throw new Error("AI failed to generate a valid response.");
        }
        // The prompt is asked to generate an index, but let's find it just in case.
        const correctOption = output.options.find(o => o.startsWith("MAYDAY, MAYDAY, MAYDAY"));
        if (correctOption) {
            output.correctAnswerIndex = output.options.indexOf(correctOption);
        } else {
            // Fallback if the AI doesn't generate a clear correct answer
            output.correctAnswerIndex = 0;
        }
        return output;
    }
);

export async function generateDrill(): Promise<DrillOutput> {
  return drillFlow();
}
