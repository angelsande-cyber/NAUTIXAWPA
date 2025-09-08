
import { appRoute } from '@genkit-ai/next';
import { generatePerQuizFlow } from '@/ai/flows/examen';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const handler = appRoute(generatePerQuizFlow);

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
    const ct = (req.headers.get('content-type') || '').toLowerCase();
    if (req.body && ct.includes('application/json')) {
      const raw = await req.text(); // no revienta si está vacío
      if (raw.trim()) {
        try {
          input = JSON.parse(raw);
        } catch (e) {
          // JSON inválido → responde 400 con detalle claro
          return new Response(
            JSON.stringify({ error: 'Invalid JSON body', detail: String(e) }),
            { status: 400, headers: { 'content-type': 'application/json' } }
          );
        }
      }
    }
  } catch {
    // ignoramos errores de lectura del stream
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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
