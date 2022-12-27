import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/actions';


export default function CartList() {
    const {carts} = useSelector((state)=>state.items)
    const dispatch = useDispatch();
    

    const add_cart = (id)=>{
        dispatch(addCart(id))
    }

    const remove_cart = (id)=>{
        dispatch(removeCart(id)) 
    }


    let generate = carts.map(item => {
        return (
            <ListItem key={item.id}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                    <ListItemText
                        primary={item.name}
                        secondary={`$${item.price}`}
                        />
                    </Grid>
                    <Grid item xs={6}  alignItems="center">
                        <IconButton edge="end" aria-label="Remove" onClick={()=>remove_cart(item.id)}>    
                            <RemoveCircleOutlineIcon /> 
                        </IconButton>
                        <IconButton edge="end">
                            <Typography>
                                {item.amount && item.amount}
                            </Typography>   
                        </IconButton>
                                         
                        <IconButton edge="end" aria-label="add" onClick={()=>add_cart(item.id)} >    
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Grid>
                </Grid>
        
            </ListItem>
        )  
})

  return (
    <List >
        {generate ? generate : <></>}    
    </List>
    
  );
}