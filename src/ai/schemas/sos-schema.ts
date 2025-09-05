'use server';
import { z } from 'zod';

export const SosInputSchema = z.object({
  naturalInput: z.string().describe('The natural language description of the emergency provided by the user.'),
});
export type SosInput = z.infer<typeof SosInputSchema>;

export const SosOutputSchema = z.object({
  vesselName: z.string().describe("El nombre del buque en peligro. Si no se especifica, usa 'UNKNOWN'."),
  mmsi: z.string().describe("El MMSI del buque. Si no se especifica, usa 'UNKNOWN'."),
  callSign: z.string().optional().describe("El indicativo de llamada del buque. Opcional."),
  position: z.string().describe("La posición del buque, lo más específica posible (coordenadas o descripción geográfica). Si no se especifica, usa 'UNKNOWN'."),
  natureOfDistress: z.string().describe("La naturaleza del peligro (ej: 'SINKING', 'FIRE', 'MEDICAL EMERGENCY'). Si no se especifica, usa 'IN DISTRESS'."),
  pob: z.string().describe("El número de personas a bordo (POB). Si no se especifica, usa 'UNKNOWN'."),
  assistanceRequired: z.string().describe("El tipo de asistencia requerida. Por defecto es 'REQUIRE IMMEDIATE ASSISTANCE'."),
});
export type SosOutput = z.infer<typeof SosOutputSchema>;
