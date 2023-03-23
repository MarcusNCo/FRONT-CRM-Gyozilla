import React from 'react';
import CustomInput from '../input/CustomInput';


const CustomForm = ({ fields }) => {

    return (
        <>
            {fields.map((field, index, onChange) => (
                <CustomInput
                    {...field}
                    key={index}
                    handleChange={onChange}
                />
            ))}
        </>
    );
}

export default CustomForm

