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
        <main>
            <ServerListComponent
                data={wikiList.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link href={`/wiki/${item.id}`} key={item.id}>
                        <p>{item.title}</p>
                    </Link>
                )}
                ListHeaderComponent={() => (
                    <div>
                        <Link href={'/wiki/create'}>생성</Link>
                        <p>위키 조회 페이지</p>
                    </div>
                )}
                ListEmptyComponent={() => <p>작성된 위키 게시글이 없습니다.</p>}
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
