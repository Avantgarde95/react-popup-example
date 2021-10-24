import React, { useState } from 'react';

import styles from 'style/Input.scss';

/**
 * Input props.
 */
interface Props {
    about: string;
    type: 'text' | 'number';
    initialValue: string;
    onSubmit: (value: string) => void;
}

/**
 * Simple text/number input for the toolpane.
 */
export const Input = ({ about, type, initialValue, onSubmit }: Props) => {
    const [value, setValue] = useState(initialValue);

    return (
        <div className={styles.container}>
            <span className={styles.name}>{about}</span>
            <input
                className={styles.input}
                type={type}
                defaultValue={initialValue}
                onChange={event => {
                    setValue(event.target.value);
                }}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        onSubmit(value);
                    }
                }}
            />
        </div>
    );
};
