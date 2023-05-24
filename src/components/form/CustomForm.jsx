import { ErrorMessage } from "formik";
import React from "react";
import CustomInput from "../input/CustomInput";

const CustomForm = ({ inputs }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <div key={index}>
          <CustomInput {...input} />
          <ErrorMessage name={input.name} />
        </div>
      ))}
    </>
  );
};

export default CustomForm;
