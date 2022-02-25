import React from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';


const NavbarCars = () => {
    return(
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{boxShadow:'none', backgroundColor:'#93B7BE'}}>
        <Toolbar>
          <TimeToLeaveIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color:'black' }}
          >
            <MenuIcon />
          </TimeToLeaveIcon>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color:'black', display: { xs: 'none', sm: 'block' } }}
          >
            CarScrapper
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}
export default NavbarCars;