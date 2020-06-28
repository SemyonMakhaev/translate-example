import throttle from 'lodash/throttle';
import { useCallback, useMemo } from 'react';

import { FetchCall } from 'src/hooks/use-fetch';
import { useResults } from 'src/hooks/use-results';
import { buildTranslateUrl } from 'src/utils/url';

export const useTranslate = (call: FetchCall<string[]>) => {
    const { setResult } = useResults();

    return useCallback((changedValue: string) => {
        if (!changedValue) {
            return;
        }
    
        const url = buildTranslateUrl(changedValue);
    
        call(url, response => setResult(changedValue, response[0]));
    }, [call, setResult])
};

export const useThrottledTranslate = (call: FetchCall<string[]>) => {
    const onTranslate = useTranslate(call);

    return useMemo(() => throttle(onTranslate, 100), [onTranslate]);
};
