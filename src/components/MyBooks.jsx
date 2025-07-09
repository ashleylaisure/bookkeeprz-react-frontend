import React, { useEffect, useMemo, useState } from 'react'
import Axios from '../Axios'
import { MaterialReactTable } from 'material-react-table'
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MyBooks = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    const GetData = () => {
        Axios.get(`book/`).then((res) => {
            setData(res.data)
            console.log(res.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        GetData();
    }, [])

const columns = useMemo(() => [
        {
            accessorKey: 'title',
            header: 'Title',
            size: 150,
        },
        {
            accessorKey: 'author',
            header: 'Author',
            size: 150,
        },
    ], 
    
    [],
);

    return (
        <div>
        {loading? <p>Loading data...</p> : 
            <MaterialReactTable 
                columns={columns} 
                data={data}
                enableRowActions
                renderRowActions={({row}) => (
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                    
                        <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
                            <EditIcon />
                        </IconButton>

                        <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                )}
            />
        }
        
        </div>
    )
}

export default MyBooks
