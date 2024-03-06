import HTTPError from '@/utils/error/HttpError';
import { QueryKey, UseSuspenseQueryOptions, useSuspenseQueries } from '@tanstack/react-query';
import WIKI_QUERY_KEY from '../query-key';
import { fetchWikiList, fetchWikiTotalCount } from '../repository';

export default function useSuspenseFetchWikiAndTotalCount<
    TData extends Array<unknown> = [FetchWikiListResponse, FetchWikiTotalResponse],
>(props: {
    wiki: {
        request: FetchWikiListRequest;
        options?: Pick<UseSuspenseQueryOptions<FetchWikiListResponse, HTTPError, TData[0], QueryKey>, 'select'>;
    };
    total?: {
        options?: Pick<UseSuspenseQueryOptions<FetchWikiTotalResponse, HTTPError, TData[1], QueryKey>, 'select'>;
    };
}) {
    return useSuspenseQueries({
        queries: [
            {
                queryKey: WIKI_QUERY_KEY.wikiList(props.wiki.request),
                queryFn: () => fetchWikiList(props?.wiki?.request),
                ...props?.wiki?.options,
            },
            {
                queryKey: WIKI_QUERY_KEY.wikiListTotalCount,
                queryFn: fetchWikiTotalCount,
                ...props?.total?.options,
            },
        ],
    });
}
