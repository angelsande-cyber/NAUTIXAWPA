
import { generatePerQuizFlow } from '@/ai/flows/examen';
import { appRoute } from '@genkit-ai/next';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const handler = appRoute(generatePerQuizFlow);

export async function POST(req: Request) {
  let input: unknown = undefined;
  try {
    const contentType = req.headers.get('content-type') || '';
    if (req.body && contentType.includes('application/json')) {
      input = await req.json();
    }
  } catch (e) {
    // Ignore parsing errors, fallback will be used
  }

  const payload = input ?? { language: 'es' };

  const wrappedReq = new Request(req.url, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
  });
  
  const res = await handler(wrappedReq);
  
  // Apply CORS headers to the actual response
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

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
