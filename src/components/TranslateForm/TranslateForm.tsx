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
            <Textarea value={value} onChange={onChange} />
            <img className="TranslateForm-Arrow" src={arrow} />
            <Textarea />
        </form>
    );
};
