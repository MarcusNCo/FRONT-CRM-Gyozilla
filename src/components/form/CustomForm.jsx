import React from 'react';
import CustomInput from '../input/CustomInput';


const CustomForm = ({ fields }) => {

    return (
        <>
            {fields.map((field, index) => (
                <CustomInput
                    {...field}
                    key = {index}
                />
            ))}
        </>
    );
}

export default CustomForm