import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const titleList = await prisma.wiki.findMany({
            select: {
                id: true,
                title: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json({ titleList }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: 'Failed Fetch Wiki List' }, { status: 500 });
    }
}
