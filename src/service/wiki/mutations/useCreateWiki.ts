/** @format */

import HTTPError from '@/utils/error/HttpError';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { createWiki } from '../repository';

export default function useCreateWiki<TContext = unknown>(
    options?: Omit<UseMutationOptions<CreateWikiResponse, HTTPError, CreateWikiRequest, TContext>, 'mutationFn'>,
) {
    return useMutation<CreateWikiResponse, HTTPError, CreateWikiRequest, TContext>({
        mutationFn: ({ title, contents }) => createWiki({ title, contents }),
        ...options,
    });
}
