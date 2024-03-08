'use client';

import useBaseUpdateWiki from '@/service/wiki/mutations/useBaseUpdateWiki';
import WIKI_QUERY_KEY from '@/service/wiki/query-key';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

type Context = {
    prevWikiDetail: FetchWikiDetailResponse | undefined;
};

type UseUpdateWikiProps = {
    id: string;
    onSuccess(): void;
};

export default function useUpdateWiki({ id, onSuccess }: UseUpdateWikiProps) {
    const queryKey = useMemo(() => WIKI_QUERY_KEY.wikiDetail(id), [id]);
    const router = useRouter();
    const queryClient = useQueryClient();

    return useBaseUpdateWiki<Context>({
        onMutate: async (variables) => {
            await queryClient.cancelQueries({ queryKey });
            const prevWikiDetail = queryClient.getQueryData<FetchWikiDetailResponse>(queryKey);
            queryClient.setQueryData<FetchWikiDetailResponse>(queryKey, (prevWiki) => {
                if (prevWiki === undefined) {
                    return prevWiki;
                }

                return {
                    wiki: {
                        ...prevWiki.wiki,
                        contents: variables.contents,
                    },
                };
            });

            return { prevWikiDetail };
        },
        onSuccess: () => {
            router.refresh();
            onSuccess();
        },
        onError: (_error, _variables, context) => {
            if (context?.prevWikiDetail) {
                queryClient.setQueryData<FetchWikiDetailResponse>(queryKey, context.prevWikiDetail);
            }
        },
        onSettled: (data) => {
            if (data) {
                queryClient.invalidateQueries({ queryKey, exact: true });
            }
        },
    });
}
