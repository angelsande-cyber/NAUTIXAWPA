
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

// GET: útil para probar rápido en el navegador (sin body)
export async function GET() {
  const req = new Request('http://localhost', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ language: 'es' }), // default
  });
  return handler(req);
}


// POST: si no viene JSON, inyecta default
export async function POST(req: Request) {
  let input: unknown;
  try {
    const ct = req.headers.get('content-type') || '';
    if (req.body && ct.includes('application/json')) {
      input = await req.json();
    }
  } catch {
    // ignoramos parse errors
  }
  const payload = input ?? { language: 'es' };

  const wrapped = new Request(req.url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return handler(wrapped);
}

// (opcional) habilita CORS si lo llamas desde otro dominio
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
