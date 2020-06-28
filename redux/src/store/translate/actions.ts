import { Translate, TranslateSuccess, TranslateFailure, TranslateActions } from 'src/store/translate/types';

export const translate = (value: string): Translate => ({
    type: TranslateActions.FETCH,
    payload: { value },
});

export const translateSuccess = (initialValue: string, translation: string): TranslateSuccess => ({
    type: TranslateActions.SUCCESS,
    payload: { initialValue, translation },
});

export const translateFailure = (initialValue: string, error: Error): TranslateFailure => ({
    type: TranslateActions.FAILURE,
    payload: { initialValue, error },
});
