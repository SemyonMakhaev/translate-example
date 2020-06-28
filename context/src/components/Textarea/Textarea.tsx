import React, { FC, ChangeEvent } from 'react';

import 'src/components/Textarea/Textarea.css';

interface Props {
    disabled?: boolean;
    readOnly?: boolean;
    value?: string;
    onChange?(event: ChangeEvent<HTMLTextAreaElement>): void;
}

export const Textarea: FC<Props> = ({ disabled, readOnly, value, onChange }) => (
    <textarea className="Textarea" disabled={disabled} readOnly={readOnly} rows={10} value={value} onChange={onChange} />
);
