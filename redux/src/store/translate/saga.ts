import { call, put, takeEvery } from 'redux-saga/effects';
import { format } from 'url';

import { translateSuccess, translateFailure } from 'src/store/translate/actions';
import { Translate, TranslateActions } from 'src/store/translate/types';

function* translateSaga(action: Translate) {
    const { value } = action.payload;

    const url = format({
        protocol: 'https',
        hostname: 'translate.yandex.net',
        pathname: '/api/v1.5/tr.json/translate',
        query: {
            key: process.env.REACT_APP_TRANSLATE_API_TOKEN,
            text: value,
            lang: 'ru-en',
            format: 'plain',
        },
    });

    try {
        const response = yield call(fetch, url);

        const { text } = yield response.json();

        yield put(translateSuccess(value, text[0]))
    } catch (error) {
        yield put(translateFailure(value, error));
    }
}

export default function*() {
    yield takeEvery(TranslateActions.FETCH, translateSaga);
}
