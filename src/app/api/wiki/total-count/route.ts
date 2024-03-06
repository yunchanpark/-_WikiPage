import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const wikiTotalCount = await prisma.wiki.count();
        return NextResponse.json({ wikiTotalCount }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: 'Failed Fetch Wiki Total Count' }, { status: 500 });
    }
}
