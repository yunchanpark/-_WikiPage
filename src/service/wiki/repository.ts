import { fetcher } from '@/utils/fetcher';
import { queryStringConverter } from '@/utils/fetcher/query-string-converter';

/**
 * GET
 */
// 위키 게시글 총 개수 조회
export async function fetchWikiTotalCount(): Promise<FetchWikiTotalResponse> {
    const response = await fetcher(`/api/wiki/total-count`, {
        method: 'GET',
    });

    return response.json();
}

// 위키 게시글 리스트 조회 (페이지네이션)
export async function fetchWikiList({ countPerPage, page }: FetchWikiListRequest): Promise<FetchWikiListResponse> {
    const queryString = queryStringConverter({ countPerPage, page });
    const response = await fetcher(`/api/wiki/list${queryString}`, {
        method: 'GET',
    });

    return response.json();
}

// 위키 게시글 상세 조회
export async function fetchWikiDetailList({ id }: FetchWikiDetailRequest): Promise<FetchWikiDetailResponse> {
    const response = await fetcher(`/api/wiki/${id}`, {
        method: 'GET',
    });

    return response.json();
}

// 위키 제목 조회
export async function fetchTitleList(): Promise<FetchTitleListResponse> {
    const response = await fetcher('/api/wiki/title', {
        method: 'GET',
    });

    return response.json();
}

/**
 * POST
 */
// 위키 게시글 생성
export async function createWiki({ title, contents }: CreateWikiRequest): Promise<CreateWikiResponse> {
    const response = await fetcher('/api/wiki', {
        method: 'POST',
        body: {
            title,
            contents,
        },
    });

    return response.json();
}

/**
 * PUT
 */
// 위키 게시글 생성
export async function updateWiki({ contents, id }: UpdateWikiRequest): Promise<UpdateWikiResponse> {
    const response = await fetcher(`/api/wiki/${id}`, {
        method: 'PUT',
        body: { contents },
    });

    return response.json();
}
