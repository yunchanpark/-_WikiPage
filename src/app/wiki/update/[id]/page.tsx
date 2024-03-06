'use client';

import useUpdateWiki from '@/service/wiki/mutations/useUpdateWiki';
import useFetchDetailWiki from '@/service/wiki/queries/useFetchDetailWiki';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

type WikiListPageProps = {
    params: {
        id: string;
    };
};

export default function WikiUpdatePage({ params: { id } }: WikiListPageProps) {
    const { data } = useFetchDetailWiki({ id });
    const [title, setTitle] = useState(data?.wiki.title ?? '');
    const [contents, setContents] = useState(data?.wiki.contents ?? '');

    const router = useRouter();
    const { mutate } = useUpdateWiki({
        onSuccess: () => {
            router.replace('/wiki/list');
        },
    });

    const updateWiki = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({ contents, id });
    };

    return (
        <main>
            <p>위키 생성 페이지</p>
            <form onSubmit={updateWiki}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                    disabled
                />
                <input
                    type="text"
                    name="contents"
                    value={contents}
                    onChange={(e) => setContents(e.target.value)}
                    placeholder="본문"
                    required
                />
                <button type="submit">
                    <p>생성</p>
                </button>
            </form>
        </main>
    );
}
