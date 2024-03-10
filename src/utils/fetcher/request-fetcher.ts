import HTTPError from '../error/HttpError';
import { FetcherRequestInit } from './types';

function fetcher() {
    const _publicApiUrl = process.env.API_SERVER_URL ?? '';

    const _initialInit: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const _generatorFetchInfo = (input: URL | RequestInfo, init?: FetcherRequestInit) => {
        const newInput = _publicApiUrl + input;
        if (!init) {
            return {
                input: newInput,
                init: _initialInit,
            };
        }

        return {
            input: newInput,
            init: {
                ...init,
                method: init.method ?? _initialInit.method ?? 'GET',
                credentials: init.credentials ?? _initialInit.credentials,
                body: init.body ? (init?.body instanceof FormData ? init.body : JSON.stringify(init.body)) : undefined,
                headers: init?.body instanceof FormData ? undefined : { ..._initialInit.headers, ...init.headers },
            },
        };
    };

    return async (input: URL | RequestInfo, init?: FetcherRequestInit) => {
        const result = _generatorFetchInfo(input, init);
        const response = await fetch(result.input, result.init);

        if (!response.ok) {
            const data = await response.json();
            throw new HTTPError(data.msg, response.status);
        }

        return response.json();
    };
}

export default fetcher();
