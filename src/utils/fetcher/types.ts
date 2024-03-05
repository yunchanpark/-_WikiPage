type FetcherRequestInit = Omit<RequestInit, 'method' | 'body'> & {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: { [key: string]: unknown } | FormData;
};

export type { FetcherRequestInit };
