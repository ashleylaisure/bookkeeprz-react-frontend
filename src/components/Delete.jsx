import {React, useEffect, useState} from 'react'
import {Box, Button, Typography } from '@mui/material'
import Axios from '../Axios.jsx'
import { useNavigate, useParams } from 'react-router-dom'


const Delete = () => {
    const navigate = useNavigate()
    const MyParam = useParams()
    const MyId = MyParam.id

    const [data, setData] = useState()
    const [loading,setLoading] = useState(true)

    const GetData = () => {
        Axios.get(`book/${MyId}`).then((res) => {
            setData(res.data)
            console.log(res.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        GetData();
    }, [])


    const submission = (data) => {
        Axios.delete(`book/${MyId}/`)
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
        { loading ? <p>Loading data...</p> :

        <div>

        <Box sx={{display:'flex', justifyContent:'space-between',width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
            <Typography sx={{marginLeft:'20px', color:'#fff'}}>
                Delete Book: {data.title}
            </Typography>

        </Box>

        <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

            <Box sx={{display:'flex', justifyContent:'start', marginBottom:'40px'}}> 
                Are you sure that you want to delete this Book: {data.title}
            </Box>

            <Box sx={{width:'30%'}}>
                    <Button variant="contained" onClick={submission} sx={{width:'100%'}}>
                    Yes - Delete
                    </Button>
            </Box>

        </Box>
        </div> 
        
        }
    </div>
    )
}

export default Delete
