import React from 'react'
import {Box, Button, Typography } from '@mui/material'
import TextFields from './forms/TextFields.jsx'
import { useForm } from 'react-hook-form'
import Axios from '../Axios.jsx'

const Create = () => {
    const {handleSubmit, control} = useForm()
    
    const submission = (data) => {
        Axios.post(`book/`, {
            title: data.title,
            author: data.author,
        })
        .then((res) => {
            console.log("Success:", res.data);
        })
        .catch((err) => {
            console.error("Error:", err.response?.data || err.message);
        });
    };

    

    return (
    <div>
        <form onSubmit={handleSubmit(submission)}>

            
        <Box sx={{display: 'flex', width: '100%', background:'#00003f', marginBottom:'10px'}}>
            <Typography sx={{marginLeft:'20px', color:'#fff'}}>
                Add Books
            </Typography>

        </Box>

        <Box sx={{display:'flex', width: '100%', boxShadow:3, padding:4, flexDirection:'column'}}>
            <Box sx={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}>
                <TextFields 
                    label="Title"
                    name="title"
                    control = {control}
                    placeholder="Book Title"
                    width={'40%'}
                />

                <TextFields 
                    label="Author"
                    name="author"
                    control = {control}
                    placeholder="Book Author"
                    width={'40%'}
                />

            </Box>

            <Box sx={{display:'flex', justifyContent:'start', marginTop:'40px'}}> 
                
                <Button variant="contained" type="submit" sx={{width:'30%'}}>
                    Submit
                </Button>
            </Box>

        </Box>
        </form>
    </div>
    )
}

export default Create
