import { fetcher } from '@/utils/fetcher';

export async function createWiki({ title, contents }: CreateWikiRequest) {
    const response = await fetcher('/api/wiki', {
        method: 'POST',
        body: {
            title,
            contents,
        },
    });

    return response.json();
}
