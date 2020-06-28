import React, { FC, ChangeEvent } from 'react';

import 'src/components/Textarea/Textarea.css';

interface Props {
    disabled?: boolean;
    value?: string;
    onChange?(event: ChangeEvent<HTMLTextAreaElement>): void;
}

export const Textarea: FC<Props> = ({ disabled, value, onChange }) => (
    <textarea className="Textarea" disabled={disabled} rows={10} value={value} onChange={onChange} />
);
