import { Dictionary, noop } from 'lodash';
import React, { FC, createContext, useState, Dispatch, SetStateAction } from 'react';

export interface ApplicationState {
    results: Dictionary<string>;
}

export interface ApplicationContext {
    state: ApplicationState;
    setState: Dispatch<SetStateAction<ApplicationState>>;
}

const initialState: ApplicationState = {
    results: {},
}

const initialContext: ApplicationContext = {
    state: initialState,
    setState: noop,
};

export const TranslateContext = createContext<ApplicationContext>(initialContext);

export const TranslateProvider: FC = ({ children }) => {
    const [state, setState] = useState<ApplicationState>(initialState);

    return (
        <TranslateContext.Provider value={{ state, setState }}>
            {children}
        </TranslateContext.Provider>
    );
};
