import prisma from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
    const id = req.nextUrl.pathname.replace('/api/wiki/', '');

    try {
        const body = await req.json();

        if (!body.contents) {
            return NextResponse.json({ msg: 'title or contents is Empty' }, { status: 404 });
        }

        await prisma.wiki.update({ data: { contents: body.contents }, where: { id } });

        return NextResponse.json({ msa: 'Updated Wiki' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: 'Failed Update Wiki' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const id = req.nextUrl.pathname.replace('/api/wiki/', '');

    try {
        const wiki = await prisma.wiki.findFirst({ where: { id } });

        if (!wiki) {
            return NextResponse.json({ msg: 'Not Found Wiki' }, { status: 500 });
        }

        return NextResponse.json({ wiki }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: 'Failed Fetch Wiki' }, { status: 500 });
    }
}
