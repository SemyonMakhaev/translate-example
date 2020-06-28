import { TranslateStore } from 'src/store/translate/types';

import { TranslateAction } from 'src/store/translate/types';

export interface ApplicationState {
    translate: TranslateStore;
}

export type Action = |
    TranslateAction;
