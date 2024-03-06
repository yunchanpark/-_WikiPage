'use client';

import useCreateWiki from '@/service/wiki/mutations/useCreateWiki';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function WikiCreatePage() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const router = useRouter();
    const { mutate } = useCreateWiki({
        onSuccess: () => {
            router.replace('/wiki/list');
        },
    });

    const createWiki = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({ title, contents });
    };

    return (
        <main>
            <p>위키 생성 페이지</p>
            <form onSubmit={createWiki}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                    required
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
