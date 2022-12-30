import React, { Fragment, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Dialog } from '@mui/material';
import CartList from './CartList';
import { useSelector } from 'react-redux';
import Checkout from './Checkout';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';



function ModalPopus(props) {

  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  let total = 0;

  const {carts} = useSelector((state)=>state.items)

 const style = {
    p: 4,
  };





  if(carts.length > 0){
    for(let obj of carts){
      total += parseFloat(obj.price) 
    } 
  }

 

  return (
    <Fragment>
    <Dialog
      open={props.open}
      onClose={props.handleClose}
    >
     
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Your shopping cart
        </Typography>
        <CartList />
        <Typography id="modal-modal-description"sx={{ mt: 2 ,fontWeight:"bold"}}>
        Total: ${total.toFixed(2)}
        <Checkout user={user} carts={carts}/>
        </Typography>
     
      </Box>
    </Dialog>
    </Fragment>
    
  )
}

export default ModalPopus