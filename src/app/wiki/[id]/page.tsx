'use client';

import useFetchDetailWiki from '@/service/wiki/queries/useFetchDetailWiki';
import Link from 'next/link';

type WikiDetailPageProps = {
    params: {
        id: string;
    };
};

export default function WikiDetailPage({ params: { id } }: WikiDetailPageProps) {
    const { data } = useFetchDetailWiki({ id });

    return (
        <main className="p-4 max-w-4xl mx-auto">
            <div className="flex justify-end mb-4">
                <Link
                    href={`/wiki/update/${id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                >
                    수정
                </Link>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 break-words">{data?.wiki.title}</h3>
                </div>
                <div className="border-t border-gray-200">
                    <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-4">{data?.wiki.contents}</p>
                </div>
            </div>
        </main>
    );
}
