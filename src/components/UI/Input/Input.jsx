import React from 'react';
const Input = (props) => {
    const {value, hintText, onChange, type} = props;
    return (
        <input
            className={'px-[20px] py-[16px] w-full bg-transparent rounded-[10px] outline-none'}
            value={value}
            onChange={onChange}
            type={type || "text"}
            placeholder={hintText} />
    );
};

export default Input;
