import prisma from '@/db';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
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

        revalidatePath('/wiki/list', 'page');
        return NextResponse.json({ msg: 'Created Wiki' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: 'Failed Create Wiki' }, { status: 500 });
    }
}
