import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export default function NavBar(props) {
    const {drawerWidth, content} = props
    const location = useLocation()
    const path = location.pathname

    const [open, setOpen] = React.useState(false)

    const changeOpenStatus = () => {
        setOpen(!open)
    }

    const myDrawer = (
        <div>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/" selected={"/" === path}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/books" selected={"/books" === path}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"My Books"} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                    <ListItemIcon>
                        <AutoStoriesIcon />
                    </ListItemIcon>
                    <ListItemText primary={"About"} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                    <ListItemIcon>
                        <BorderColorIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Create"} />
                    </ListItemButton>
                </ListItem>

            </List>
            </Box>
        </div>
    )

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
            <IconButton 
                onClick={changeOpenStatus}
                color="inherit"
                sx={{mr:2,display:{sm:"none"}}}>
                <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" noWrap component="div">
                Bookkeeprz
            </Typography>
            </Toolbar>
        </AppBar>
        
        <Drawer
            variant="permanent"
            sx={{
            display: {xs:"none", sm:"block"},
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            {myDrawer}
        </Drawer>

        <Drawer
            variant="temporary"
            open = {open}
            onClose = {changeOpenStatus}
            sx={{
            display: {xs:"block", sm:"none"},
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            {myDrawer}
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            {content }
            
        </Box>
        </Box>
    );
}