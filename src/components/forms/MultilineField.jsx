import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function MultilineField(props) {
    const {label, placeholder, width, name, control} = props
    
        return (
        <Controller
            name = {name}
            control = {control}
    
            render = {({
                field: {onChange, value},
                fieldState:{error},
                formState,
            }) => (
                
            <TextField
                id="standard-multiline-static"
                sx={{width:{width}}}
                onChange={onChange}
                value={value}
                label={label}
                multiline
                rows={1}
                // defaultValue="Default Value"
                variant="standard"
                placeholder={placeholder}
            />
                
                )
            }
        />
    )
}
