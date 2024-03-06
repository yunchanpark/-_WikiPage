const WIKI_QUERY_KEY = {
    wikiListTotalCount: ['wiki_total-count'],
    wikiDetail: (id: string) => ['wiki_detail', id],
    wikiList: (params: FetchWikiListRequest) => ['wiki_list', params],
} as const;

export default WIKI_QUERY_KEY;
