import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


export default function NavBar(props) {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const {carts} = useSelector((state)=>state.items)
  let amount = 0;
  if(carts.length > 0){
    for(let obj of carts){
      amount += parseInt(obj.amount) 
    } 
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping
          </Typography>
            <IconButton aria-label="cart"  onClick={props.handleOpen}>
              <StyledBadge badgeContent={amount} color="primary">
                  <ShoppingCartIcon style={{ color: "white" }} />  
              </StyledBadge>
            </IconButton>
        
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}