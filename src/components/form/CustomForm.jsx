import React from 'react';
import CustomInput from '../input/CustomInput';


const CustomForm = ({ inputs }) => {

    return (
        <>
            {inputs.map((input, index) => (
                <CustomInput
                    {...input}
                    key={index}
                />
            ))}
        </>
    );
}

export default CustomForm

