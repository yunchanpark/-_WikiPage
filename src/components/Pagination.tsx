'use client';

import { useMemo, useState } from 'react';

import { range } from '@/utils/array';

export type RenderPaginationItem = (params: { page: number; active: boolean }) => JSX.Element;

export type PaginationProps = {
    totalItems: number;
    currentPage: number;
    itemCountPerPage?: number;
    visiblePageRange?: number;
    prevButton?: JSX.Element;
    nextButton?: JSX.Element;
    renderItem: RenderPaginationItem;
};

export default function Pagination({
    totalItems,
    currentPage = 1,
    itemCountPerPage = 5,
    visiblePageRange = 5,
    prevButton,
    nextButton,
    renderItem,
}: PaginationProps) {
    const totalPages = useMemo(() => Math.ceil(totalItems / itemCountPerPage), [itemCountPerPage, totalItems]);
    const [visibleStart, setVisibleStart] = useState<number>(1);

    const handleClickPrevPage = () => {
        setVisibleStart((prevVisibleStart) => Math.max(1, prevVisibleStart - visiblePageRange));
    };

    const handleClickNextPage = () => {
        setVisibleStart((prevVisibleStart) => Math.min(totalPages - visiblePageRange + 1, prevVisibleStart + visiblePageRange));
    };

    return (
        <ul className="flex justify-center space-x-2">
            {prevButton ?? (
                <button onClick={handleClickPrevPage} disabled={visibleStart === 1}>
                    이전
                </button>
            )}
            {range(visiblePageRange).map((_, i) => {
                const page = visibleStart + i;
                const active = Number(currentPage) === page;
                const isVisiblePageRange = page > 0 && page <= totalPages;

                return isVisiblePageRange && <li key={page}>{renderItem({ page, active })}</li>;
            })}
            {nextButton ?? (
                <button onClick={handleClickNextPage} disabled={visibleStart === 1}>
                    다음
                </button>
            )}
        </ul>
    );
}
