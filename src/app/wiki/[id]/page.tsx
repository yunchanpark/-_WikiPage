import { fetchTitleList, fetchWikiDetailList } from '@/service/wiki/repository';
import AutoLinkContents from './components/AutoLinkContents';
import OpenUpdateModalButton from './components/OpenUpdateModalButton';

type WikiDetailPageProps = {
    params: {
        id: string;
    };
};

export default async function WikiDetailPage({ params: { id } }: WikiDetailPageProps) {
    const [{ wiki }, { titleList }] = await Promise.all([fetchWikiDetailList({ id }), fetchTitleList()]);

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
                    <AutoLinkContents titleList={titleList} contents={wiki.contents} />
                </div>
            </div>
        </main>
    );
}
