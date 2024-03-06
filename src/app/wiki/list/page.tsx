import ServerListComponent from '@/components/ServerListComponent';
import { fetchWikiList, fetchWikiTotalCount } from '@/service/wiki/repository';
import Link from 'next/link';
import WikiListPagination from './components/WikiListPagination';

type WikiListPageProps = {
    searchParams: {
        page: string;
    };
};

export default async function WikiListPage({ searchParams }: WikiListPageProps) {
    const page = searchParams.page ? Number(searchParams.page) : 1;
    const [wikiList, totalCount] = await Promise.all([fetchWikiList({ page, countPerPage: 5 }), fetchWikiTotalCount()]);

    return (
        <main className="flex flex-col justify-center h-screen max-w-4xl mx-auto py-10 px-5">
            <ServerListComponent
                contentContainerClassName="min-h-[300px] h-[300px]"
                data={wikiList.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link href={`/wiki/${item.id}`} key={item.id} className="block hover:bg-gray-100 p-3 rounded-lg">
                        <p className="text-lg font-semibold line-clamp-1 text-ellipsis break-words">{item.title}</p>
                    </Link>
                )}
                ListHeaderComponent={() => (
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-xl font-bold">위키 조회 페이지</p>
                        <Link
                            href={'/wiki/create'}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-200"
                        >
                            위키 생성
                        </Link>
                    </div>
                )}
                ListEmptyComponent={() => <p className="text-center py-5">작성된 위키 게시글이 없습니다.</p>}
                ListFooterComponent={() => (
                    <WikiListPagination
                        currentPage={page}
                        totalItems={totalCount.wikiTotalCount}
                        itemCountPerPage={5}
                        visiblePageRange={5}
                    />
                )}
            />
        </main>
    );
}
