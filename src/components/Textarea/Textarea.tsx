import React, { FC, ChangeEvent } from 'react';

import 'src/components/Textarea/Textarea.css';

interface Props {
    value?: string;
    onChange?(event: ChangeEvent<HTMLTextAreaElement>): void;
}

export const Textarea: FC<Props> = ({ value, onChange }) => (
    <textarea className="Textarea" rows={10} value={value} onChange={onChange} />
);
