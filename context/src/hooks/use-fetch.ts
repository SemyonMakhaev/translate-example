import { useCallback, useState } from 'react';

import { FetchStatus } from 'src/types';

export type FetchCallback<T> = (response: T) => void;

export type FetchCall<T> = (url: string, cb?: FetchCallback<T>) => void;

export interface FetchOptions<T> {
    response: T | null;
    status: FetchStatus | null;
    error: Error | null;
    call: FetchCall<T>;
}

export const useFetch = <T>(): FetchOptions<T> => {
    const [response, setResponse] = useState<T | null>(null);
    const [status, setStatus] = useState<FetchStatus | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const onSuccess = useCallback((response: T) => {
        setResponse(response);
        setStatus(FetchStatus.SUCCESS);
    }, []);

    const onFailure = useCallback((error: Error) => {
        setError(error);
        setStatus(FetchStatus.LOADING);
    }, []);

    const call = useCallback((url: string, cb?: FetchCallback<T>) => {
        fetch(url)
            .then(response => response.json())
            .then(({ text }) => {
                onSuccess(text);
                
                if (cb) {
                    cb(text);
                }
            })
            .catch(onFailure);
    }, [onSuccess, onFailure]);

    return { response, status, error, call };
};
