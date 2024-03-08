import { range } from '@/utils/array';

export type RenderPaginationItem = (params: { page: number; active: boolean }) => JSX.Element;
export type PrevOrNextButton = (params: { page: number; disable: boolean }) => JSX.Element;

export type PaginationProps = {
    totalItems: number;
    currentPage: number;
    itemCountPerPage?: number;
    visiblePageRange?: number;
    renderPrev: PrevOrNextButton;
    renderNext: PrevOrNextButton;
    renderItem: RenderPaginationItem;
};

export default function Pagination({
    totalItems,
    currentPage = 1,
    itemCountPerPage = 5,
    visiblePageRange = 5,
    renderPrev,
    renderNext,
    renderItem,
}: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    const startPage = Math.max(1, currentPage - (currentPage % visiblePageRange));
    const endPage = Math.min(startPage + visiblePageRange - 1, totalPages);

    return (
        <ul className="flex justify-center gap-2">
            {renderPrev({ page: currentPage - 1, disable: currentPage === 1 })}
            {range(startPage, endPage).map((page) => {
                const active = currentPage === page;
                return (
                    <li key={page} className="flex">
                        {renderItem({ page, active })}
                    </li>
                );
            })}
            {renderNext({
                page: currentPage + 1,
                disable: currentPage >= totalPages,
            })}
        </ul>
    );
}
