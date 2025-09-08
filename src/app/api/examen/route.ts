
import { generatePerQuizFlow } from '@/ai/flows/examen';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function POST(req: Request) {
  try {
    const quiz = await generatePerQuizFlow();
    return NextResponse.json(quiz, { headers: corsHeaders });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      { error: e.message || 'Failed to generate quiz.' },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS(req: Request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
