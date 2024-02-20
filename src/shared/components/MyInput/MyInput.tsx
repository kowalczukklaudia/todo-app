import './MyInput.scss';
import React, { ChangeEventHandler } from 'react';

interface InputProps {
    placeholderText: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const MyInput = (props: InputProps) => {
    return (
        <input
            type='text'
            className={`my-input`}
            placeholder={props.placeholderText}
            value={props.value}
            onChange={props.onChange}
            maxLength={17}
        />    
    );
};

export default MyInput;