'use server';

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
  const res = await handler(req);
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(corsHeaders)) headers.set(k, v);
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
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

  const res = await handler(wrapped);
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(corsHeaders)) {
    headers.set(k, v);
  }
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

// (opcional) habilita CORS si lo llamas desde otro dominio
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}