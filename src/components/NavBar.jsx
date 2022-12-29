import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import {
  signOut,
  onAuthStateChanged} from "firebase/auth"
import { auth } from '../firebase'



export default function NavBar(props) {
  const [user, setUser] = useState({});
    const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
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

  const handleLogout = async()=>{
    try {
      await logOut()
    } catch (error) {
      console.log(error)
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
            <Link to="/" className='home_link'>
                Shoppe
              </Link>
            </Typography>
            {user ? 
            <button onClick={handleLogout} className='google-btn'>
               LogOut
              </button>
            :
            <GoogleAuth/>
          }
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