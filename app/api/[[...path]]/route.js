import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: true, app: 'ProductLore', note: 'No backend needed — stories are local.' });
}
