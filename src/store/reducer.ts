import { combineReducers } from 'redux';

import { ApplicationState, Action } from 'src/store/types';

import translateReducer from 'src/store/translate/reducer';

export default combineReducers<ApplicationState, Action>({
    translate: translateReducer,
});
