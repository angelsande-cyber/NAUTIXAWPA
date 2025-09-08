
import { appRoute } from '@genkit-ai/next';
import { generatePerQuizFlow } from '@/ai/flows/examen';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const handler = appRoute(generatePerQuizFlow);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function POST(req: Request) {
  // Ya que el flow no tiene input, pasamos la request directamente.
  // El handler de appRoute gestionará la llamada al flow.
  const res = await handler(req);
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(corsHeaders)) headers.set(k, v);
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
