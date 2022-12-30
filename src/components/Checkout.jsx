import { Button } from '@mui/material';
import React from 'react'
import getStripe from '../getStripe';

function Checkout(props) {
    const handleCheckout = async ()=> {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: 'price_1MKZceHAFdrUYHeg7aU3BAB4',
              quantity: 1,
            },
          ],
          mode: 'subscription',
          successUrl: `http://localhost:3000/`,
          cancelUrl: `http://localhost:3000/`,
          customerEmail: 'customer@email.com',
        });
        console.warn(error.message);
      }
  return (
    <span style={{display:"block"}} >
   {props.user && props.carts.length > 0 ?
    <Button variant="contained" size="medium" onClick={handleCheckout} sx={{mt:2}}>Checkout</Button>
    :  
    <span sx={{mt:5}}>
        You must be logged in to checkout or add products to cart
    </span>
    }
    </span>
 
  )
}

export default Checkout