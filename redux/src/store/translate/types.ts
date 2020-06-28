import { FetchStatus } from "src/types";

import { Action } from 'redux';

export enum TranslateActions {
    FETCH = 'TRANSLATE_FETCH',
    SUCCESS = 'TRANSLATE_SUCCESS',
    FAILURE = 'TRANSLATE_FAILURE',
}

export interface TranslationPayload {
    value: string;
}

export interface TranslationResult {
    initialValue: string;
    translation: string;
}

export interface TranslationError {
    initialValue: string;
    error: Error;
}

export interface TranslateStore {
    results: {
        [key: string]: string;
    };
    status: FetchStatus | null;
    error: Error | null;
}

export interface Translate extends Action {
    type: TranslateActions.FETCH;
    payload: TranslationPayload;
}

export interface TranslateSuccess extends Action {
    type: TranslateActions.SUCCESS;
    payload: TranslationResult;
}

export interface TranslateFailure extends Action {
    type: TranslateActions.FAILURE;
    payload: TranslationError;
}

export type TranslateAction = |
    Translate |
    TranslateSuccess |
    TranslateFailure;
