import throttle from 'lodash/throttle';
import React, { FC, useCallback, useState, ChangeEvent, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FetchStatus } from 'src/types';
import { Textarea } from 'src/components/Textarea';
import arrow from 'src/components/TranslateForm/assets/arrow.svg';

import { translate } from 'src/store/translate/actions';
import { selectTranslations, selectStatus, selectError } from 'src/store/translate/selectors';

import 'src/components/TranslateForm/TranslateForm.css';

export const TranslateForm: FC = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState<string>('');

    const translations = useSelector(selectTranslations);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    const onTranslate = useCallback((changedValue: string) => {
        if (!changedValue) {
            return;
        }

        const action = translate(changedValue);

        dispatch(action);
    }, [dispatch]);

    const throttledTranslate = useMemo(() => throttle(onTranslate, 100), [onTranslate]);

    const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value: changedValue } = event.target;

        setValue(changedValue);
        throttledTranslate(changedValue);
    }, [throttledTranslate]);

    const translation = translations[value];
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
                    <Textarea disabled={isFetching} readOnly value={translation} />
                </div>
            </div>
            {error && <div className="TranslateForm-Error">{error.message}</div>}
        </form>
    );
};
