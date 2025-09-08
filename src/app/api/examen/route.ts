import { generatePerQuizFlow } from '@/ai/flows/examen';
import {NextResponse} from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    let input: unknown = undefined;

    const ct = (req.headers.get('content-type') || '').toLowerCase();
    if (ct.includes('application/json')) {
      const raw = await req.text();
      if (raw.trim()) {
        try {
          input = JSON.parse(raw);
        } catch (e) {
          return new Response(
            JSON.stringify({ error: 'Invalid JSON body', detail: String(e) }),
            { status: 400, headers: { 'content-type': 'application/json' } }
          );
        }
      }
    }

    const payload = (input && typeof input === 'object') ? input : { language: 'es' };
    const result = await generatePerQuizFlow.run(payload as any);
    return NextResponse.json(result);
  } catch (e: any) {
    const errorBody = {
        error: 'Error generating quiz',
        details: e.message,
    };
    console.error(errorBody.error, errorBody.details);
    return new NextResponse(JSON.stringify(errorBody), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
    try {
        const result = await generatePerQuizFlow.run({ language: 'es' } as const);
        return NextResponse.json(result);
    } catch (e: any) {
         const errorBody = {
            error: 'Error generating quiz',
            details: e.message,
        };
        console.error(errorBody.error, errorBody.details);
        return new NextResponse(JSON.stringify(errorBody), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
