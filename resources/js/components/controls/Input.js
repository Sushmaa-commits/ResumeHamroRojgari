import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange ,fullWidth, type} = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            fullWidth={fullWidth}
            type={type}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
