'use client';

import useSuspenseFetchWikiAndTotalCount from '@/service/wiki/queries/useSuspenseFetchWikiAndTotalCount';
import Link from 'next/link';

export default function WikiListPage() {
    const [wikiList, totalCount] = useSuspenseFetchWikiAndTotalCount({
        wiki: {
            request: {
                page: 0,
                countPerPage: 5,
            },
        },
    });

    return (
        <main>
            <Link href={'/wiki/create'}>생성</Link>
            <p>위키 조회 페이지</p>
            <p>종 {totalCount.data.wikiTotalCount}</p>
            {wikiList.data.items.map(({ title, contents, id }) => {
                return (
                    <Link href={`/wiki/${id}`} key={id}>
                        <p>{title}</p>
                        <p>{contents}</p>
                    </Link>
                );
            })}
        </main>
    );
}
