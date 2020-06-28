import { ApplicationState } from 'src/store/types';

export const selectTranslations = (state: ApplicationState) => state.translate.results;

export const selectStatus = (state: ApplicationState) => state.translate.status;

export const selectError = (state: ApplicationState) => state.translate.error;
