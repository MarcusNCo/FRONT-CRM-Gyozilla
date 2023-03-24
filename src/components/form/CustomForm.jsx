import React from 'react';
import CustomInput from '../input/CustomInput';


const CustomForm = ({ inputs }) => {

    return (
        <>
            {inputs.map((input, index) => (
                <div key={index}>
                    <CustomInput {...input} />
                </div>
            ))}
        </>
    );
}

export default CustomForm

