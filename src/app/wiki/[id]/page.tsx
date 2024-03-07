import { fetchWikiDetailList } from '@/service/wiki/repository';
import OpenUpdateModalButton from './components/OpenUpdateModalButton';

type WikiDetailPageProps = {
    params: {
        id: string;
    };
};

export default async function WikiDetailPage({ params: { id } }: WikiDetailPageProps) {
    const { wiki } = await fetchWikiDetailList({ id });

    return (
        <main className="p-4 max-w-4xl mx-auto">
            <div className="flex justify-end mb-4">
                <OpenUpdateModalButton id={id} title={wiki.title} contents={wiki.contents} />
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 break-words">{wiki.title}</h3>
                </div>
                <div className="border-t border-gray-200">
                    <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-4">{wiki.contents}</p>
                </div>
            </div>
        </main>
    );
}
