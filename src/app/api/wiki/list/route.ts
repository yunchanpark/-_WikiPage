import prisma from '@/db';
import { parsePaginationParams } from '@/utils/parse/parse-pagination-params';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const page = req.nextUrl.searchParams.get('page');
    const countPerPage = req.nextUrl.searchParams.get('countPerPage');
    const paginationParams = parsePaginationParams(page, countPerPage);

    if (paginationParams === null) {
        return NextResponse.json({ msg: 'Pagination parameters are invalid or missing.' }, { status: 400 });
    }

    if (paginationParams.pageNumber <= 0) {
        return NextResponse.json({ items: [] }, { status: 200 });
    }

    const pageNumber = paginationParams.pageNumber - 1;
    const pageSize = paginationParams.pageSize;

    try {
        const wikiList = await prisma.wiki.findMany({
            skip: pageNumber * pageSize,
            take: pageSize,
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json({ items: wikiList }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: 'Failed Fetch Wiki List' }, { status: 500 });
    }
}
