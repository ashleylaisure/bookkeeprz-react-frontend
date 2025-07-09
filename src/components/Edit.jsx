import {React, useEffect} from 'react'
import {Box, Button, Typography } from '@mui/material'
import TextFields from './forms/TextFields.jsx'
import { useForm } from 'react-hook-form'
import Axios from '../Axios.jsx'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const navigate = useNavigate()
    const MyParam = useParams()
    const MyId = MyParam.id

    const defaultValues = {
        title : '', 
        author: '', 
    }
    
    const {handleSubmit, setValue, control} = useForm({defaultValues:defaultValues})

    const GetData = () => {
        Axios.get(`book/${MyId}`).then((res) => {
            console.log(res.data)
            setValue('title',res.data.title)
            setValue('author',res.data.author)
        })
    }

    useEffect(() => {
        GetData();
    }, [])


    const submission = (data) => {
        Axios.put(`book/${MyId}/`, {
            title: data.title,
            author: data.author,
        })
        .then((res) => {
            console.log("Success:", res.data);
            navigate('/books')
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
                    Save
                </Button>
            </Box>

        </Box>
        </form>
    </div>
    )
}

export default Edit
