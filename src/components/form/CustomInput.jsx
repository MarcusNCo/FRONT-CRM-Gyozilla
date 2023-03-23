import React from 'react';

const CustomInput = (props) => {
  const { input } = props;
  const inputAttribute = {
    type: input.type,
    name: input.name,
    id: input.id,
    className: input.className,
    style: input.style,
    value: input.value || '',
    placeholder: input.placeholder,
    disabled: input.disabled,
    autoFocus: input.autoFocus,
    onFocus: input.onFocus,
    onBlur: input.onBlur,
    autoComplete: input.autoComplete,
    pattern: input.pattern,
    required: input.required,
    min: input.min,
    max: input.max,
    step: input.step,
    readOnly: input.readOnly,
    onChange: input.onChange
  };

  return (
    <input {...inputAttribute} />
  );
};

export default CustomInput;