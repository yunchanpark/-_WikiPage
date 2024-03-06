'use client';

import { FormEvent, useState } from 'react';
import useCreateWiki from './hooks/useCreateWiki';

export default function WikiCreatePage() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const { mutate } = useCreateWiki();

    const createWiki = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({ title, contents });
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow">
                <p className="text-xl font-bold text-center">위키 생성 페이지</p>
                <form onSubmit={createWiki} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            제목
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="제목"
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="contents" className="block text-sm font-medium text-gray-700">
                            본문
                        </label>
                        <textarea
                            name="contents"
                            id="contents"
                            value={contents}
                            onChange={(e) => setContents(e.target.value)}
                            placeholder="본문"
                            required
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <p>생성</p>
                    </button>
                </form>
            </div>
        </main>
    );
}
