import React from 'react'
import {Box, Typography } from '@mui/material'
import DatePickerField from './forms/DatePickerField.jsx'
import TextFields from './forms/TextFields.jsx'
import SelectField from './forms/SelectField.jsx'
import MultilineField from './forms/MultilineField.jsx'

import { useForm } from 'react-hook-form'

const Create = () => {

    const {handleSubmit, reset, setValue, control} = useForm()
    return (
        <div>
        <Box sx={{display: 'flex', width: '100%', background:'#00003f', marginBottom:'10px'}}>
            <Typography sx={{marginLeft:'20px', color:'#fff'}}>
                Add Books
            </Typography>

        </Box>

        <Box sx={{display:'flex', width: '100%', boxShadow:3, padding:4, flexDirection:'column', alignItems: 'center'}}>
            <Box>
                <TextFields 
                    label="Title"
                    name="title"
                    control = {control}
                    placeholder="Book Title"
                    />
            </Box>
            <Box>Three Forms</Box>
        </Box>
        </div>
    )
}

export default Create
