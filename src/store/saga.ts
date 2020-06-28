import { all } from 'redux-saga/effects';

import translateSaga from 'src/store/translate/saga';

export default function* rootSaga() {
    yield all([translateSaga()]);
}
