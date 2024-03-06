import Pagination, { PaginationProps } from '@/components/Pagination';
import Link from 'next/link';

export default function WikiListPagination({
    currentPage,
    totalItems,
    itemCountPerPage,
    visiblePageRange,
}: Omit<PaginationProps, 'renderItem' | 'renderPrev' | 'renderNext'>) {
    return (
        <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemCountPerPage={itemCountPerPage}
            visiblePageRange={visiblePageRange}
            renderItem={({ page, active }) => (
                <Link
                    href={`/wiki/list?page=${page}`}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition-colors duration-150 ease-in-out`}
                >
                    {page}
                </Link>
            )}
            renderPrev={({ page, disable }) =>
                disable ? (
                    <span
                        className={`mr-2 px-2 py-1 rounded-full text-sm font-medium ${disable ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white transition-colors duration-150 ease-in-out'}`}
                    >
                        이전
                    </span>
                ) : (
                    <Link
                        href={`/wiki/list?page=${page}`}
                        className={`mr-2 px-2 py-1 rounded-full text-sm font-medium ${disable ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white transition-colors duration-150 ease-in-out'}`}
                    >
                        이전
                    </Link>
                )
            }
            renderNext={({ page, disable }) =>
                disable ? (
                    <span
                        className={`mr-2 px-2 py-1 rounded-full text-sm font-medium ${disable ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white transition-colors duration-150 ease-in-out'}`}
                    >
                        다음
                    </span>
                ) : (
                    <Link
                        href={`/wiki/list?page=${page}`}
                        passHref
                        className={`ml-2 px-2 py-1 rounded-full text-sm font-medium ${disable ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white transition-colors duration-150 ease-in-out'}`}
                    >
                        다음
                    </Link>
                )
            }
        />
    );
}
