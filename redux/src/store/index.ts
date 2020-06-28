import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'src/store/reducer';
import rootSaga from 'src/store/saga';

const sagaMiddleware = createSagaMiddleware()

export default () => {
    const store = createStore(rootReducer, {}, compose(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    return store;
};
