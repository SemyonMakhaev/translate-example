import { useContext, useCallback } from 'react';

import { TranslateContext } from 'src/contexts/translate';

export const useResults = () => {
    const { state, setState } = useContext(TranslateContext);

    const { results } = state;

    const setResult = useCallback((value: string, translation: string) => {
        setState({
            results: {
                [value]: translation,
            },
        });
    }, [setState]);

    return { results, setResult };
};
