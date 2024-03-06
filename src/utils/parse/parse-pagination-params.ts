export const parsePaginationParams = (page: string | null, countPerPage: string | null) => {
    if (page === null || countPerPage === null) {
        return null;
    }

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(countPerPage, 10);

    if (isNaN(pageNumber) || isNaN(pageSize)) {
        return null;
    }

    return { pageNumber, pageSize };
};
