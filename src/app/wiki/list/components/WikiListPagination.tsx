'use client';

import Pagination, { PaginationProps, RenderPaginationItem } from '@/components/Pagination';
import Link from 'next/link';

export default function WikiListPagination({
    currentPage,
    totalItems,
    itemCountPerPage,
    visiblePageRange,
}: Omit<PaginationProps, 'renderItem' | 'nextButton' | 'prevButton'>) {
    const renderItem: RenderPaginationItem = ({ page, active }) => {
        return (
            <Link href={`/wiki/list?page=${page}`}>
                <span className={`${active ? 'bg-blue-300' : ''}`}>{page}</span>
            </Link>
        );
    };

    return (
        <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemCountPerPage={itemCountPerPage}
            visiblePageRange={visiblePageRange}
            renderItem={renderItem}
        />
    );
}
