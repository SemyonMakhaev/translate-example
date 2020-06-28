import React, { FC, useCallback, useState, ChangeEvent } from 'react';

import { Textarea } from 'src/components/Textarea';
import arrow from 'src/components/TranslateForm/assets/arrow.svg';

import 'src/components/TranslateForm/TranslateForm.css';

export const TranslateForm: FC = () => {
    const [value, setValue] = useState<string>('');

    const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    }, []);

    return (
        <form className="TranslateForm">
            <div className="TranslateForm-InputWrapper">
                <h2 className="TranslateForm-Lang">
                    Русский
                </h2>
                <Textarea value={value} onChange={onChange} />
            </div>
            <img className="TranslateForm-Arrow" src={arrow} />
            <div className="TranslateForm-InputWrapper">
                <h2 className="TranslateForm-Lang TranslateForm-Lang_align_right">
                    Английский
                </h2>
                <Textarea />
            </div>
        </form>
    );
};
