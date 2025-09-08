import { appRoute } from '@genkit-ai/next';
import { generatePerQuizFlow } from '@/ai/flows/examen';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const result = await generatePerQuizFlow();
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
