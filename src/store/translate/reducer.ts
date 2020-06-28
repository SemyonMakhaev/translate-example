import { FetchStatus } from 'src/types';

import { TranslateStore, TranslateAction, TranslateActions } from 'src/store/translate/types';

const initialState: TranslateStore = {
    results: {},
    status: null,
    error: null,
};

export default (state: TranslateStore = initialState, action: TranslateAction): TranslateStore => {
    switch (action.type) {
        case TranslateActions.FETCH:
            return {
                ...state,
                status: FetchStatus.LOADING,
                error: null,
            };
        case TranslateActions.SUCCESS:
            return {
                ...state,
                status: FetchStatus.SUCCESS,
                results: {
                    [action.payload.initialValue]: action.payload.translation,
                },
            };
        case TranslateActions.FAILURE:
            return {
                ...state,
                status: FetchStatus.FAILURE,
                error: action.payload.error,
            };
        default:
            return state;
    }
};
