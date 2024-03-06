'use client';

import useFetchDetailWiki from '@/service/wiki/queries/useFetchDetailWiki';
import Link from 'next/link';

type Props = {
    params: {
        id: string;
    };
};

export default function WikiDetailPage({ params: { id } }: Props) {
    const { data } = useFetchDetailWiki({ id });

    return (
        <main>
            <Link href={`/wiki/update/${id}`}>수정</Link>
            <p>위키 상세 페이지</p>
            <div>
                <p>{data?.wiki.title}</p>
                <p>{data?.wiki.contents}</p>
            </div>
        </main>
    );
}
