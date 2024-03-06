import HTTPError from '@/utils/error/HttpError';
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';
import WIKI_QUERY_KEY from '../query-key';
import { fetchWikiDetailList } from '../repository';

export default function useFetchDetailWiki<TData = FetchWikiDetailResponse>(
    { id }: FetchWikiDetailRequest,
    options?: Omit<
        UndefinedInitialDataOptions<FetchWikiDetailResponse, HTTPError, TData, readonly string[]>,
        'queryKey' | 'queryFn'
    >,
) {
    return useQuery<FetchWikiDetailResponse, HTTPError, TData, readonly string[]>({
        queryKey: WIKI_QUERY_KEY.wikiDetail(id),
        queryFn: () => fetchWikiDetailList({ id }),
        staleTime: 5 * 60 * 1000,
        ...options,
    });
}
