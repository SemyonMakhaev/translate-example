import React, { FC, useCallback, useState, ChangeEvent } from 'react';

import { FetchStatus } from 'src/types';
import { Textarea } from 'src/components/Textarea';
import arrow from 'src/components/TranslateForm/assets/arrow.svg';
import { useFetch } from 'src/hooks/use-fetch';
import { useResults } from 'src/hooks/use-results';
import { useThrottledTranslate } from 'src/hooks/use-translate';

import 'src/components/TranslateForm/TranslateForm.css';

export const TranslateForm: FC = () => {
    const [value, setValue] = useState<string>('');
    const { status, error, call } = useFetch<string[]>();
    const onTranslate = useThrottledTranslate(call);
    const { results } = useResults();

    const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value: changedValue } = event.target;

        setValue(changedValue);
        onTranslate(changedValue);
    }, [onTranslate]);

    const isFetching = status === FetchStatus.LOADING;

    return (
        <form className="TranslateForm">
            <div className="TranslateForm-Content">
                <div className="TranslateForm-InputWrapper">
                    <h2 className="TranslateForm-Lang">
                        Русский
                    </h2>
                    <Textarea value={value} onChange={onChange} />
                </div>
                <img className="TranslateForm-Arrow" src={arrow} alt="" />
                <div className="TranslateForm-InputWrapper">
                    <h2 className="TranslateForm-Lang TranslateForm-Lang_align_right">
                        Английский
                    </h2>
                    <Textarea disabled={isFetching} readOnly value={results[value]} />
                </div>
            </div>
            {error && <div className="TranslateForm-Error">{error.message}</div>}
        </form>
    );
};
