/** @format */

import HTTPError from '@/utils/error/HttpError';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { updateWiki } from '../repository';

export default function useUpdateWiki<TContext = unknown>(
    options?: Omit<UseMutationOptions<UpdateWikiResponse, HTTPError, UpdateWikiRequest, TContext>, 'mutationFn'>,
) {
    return useMutation<UpdateWikiResponse, HTTPError, UpdateWikiRequest, TContext>({
        mutationFn: ({ contents, id }) => updateWiki({ contents, id }),
        ...options,
    });
}
