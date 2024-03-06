/** 공통 */
type Wiki = {
    id: string;
    title: string;
    contents: string;
};

/**
 * GET
 */
// 위키 게시글 총 개수 조회
type FetchWikiTotalRequest = void;

type FetchWikiTotalResponse = {
    wikiTotalCount: number;
};

// 위키 게시글 리스트 조회
type FetchWikiListRequest = {
    page?: number;
    countPerPage?: number;
};

type FetchWikiListResponse = {
    items: Wiki[];
};

// 위키 게시글 상세 조회
type FetchWikiDetailRequest = {
    id: string;
};

type FetchWikiDetailResponse = {
    wiki: Wiki;
};

/**
 * POST
 */
// 위키 게시글 생성
type CreateWikiRequest = {
    title: string;
    contents: string;
};

type CreateWikiResponse = {
    msg: string;
};

/**
 * POST
 */
// 위키 게시글 생성
type UpdateWikiRequest = {
    id: string;
    contents: string;
};

type UpdateWikiResponse = {
    msg: string;
};
