import { IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './CustomInput.css'

const CustomInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
    onChange: input.onChange,
    secure: input.secure
    };

    return (
        <>
            <Input
                {...inputAttribute}
                type={inputAttribute.type != 'password' ? inputAttribute.type : showPassword ? 'text' : 'password'}
                        endAdornment={
                            inputAttribute.secure ? (
                                <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ) : ""
                        }
            />
        </>
    );
};

export default CustomInput;