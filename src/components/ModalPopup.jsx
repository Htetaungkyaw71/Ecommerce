import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import CartList from './CartList';
import { useSelector } from 'react-redux';


function ModalPopus(props) {

  let total = 0;

  const {carts} = useSelector((state)=>state.items)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };



  if(carts.length > 0){
    for(let obj of carts){
      total += parseFloat(obj.price) 
    } 
  }

 

  return (
    <Fragment>
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Your shopping cart
        </Typography>
        <CartList/>
        <Typography id="modal-modal-description"sx={{ mt: 2 }}>
        Total: ${total.toFixed(2)}
        </Typography>
      </Box>
    </Modal>
    </Fragment>
    
  )
}

export default ModalPopus