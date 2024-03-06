import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    if (!body?.title || !body?.contents) {
        return NextResponse.json({ msg: 'title or contents is Empty' }, { status: 404 });
    }

    try {
        await prisma.wiki.create({
            data: {
                title: body.title,
                contents: body.contents,
            },
        });
    } catch (error) {
        return NextResponse.json({ msg: 'Failed Create Wiki' }, { status: 500 });
    }

    return NextResponse.json({ msg: 'Created Wiki' }, { status: 201 });
}
