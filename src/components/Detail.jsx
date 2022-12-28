import React, { Fragment, useEffect, useState } from 'react'
import { getDetailData } from '../redux/actions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, Chip, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Rating } from '@mui/material'
import Loading from './Loading'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReplyIcon from '@mui/icons-material/Reply';
import { addCart } from '../redux/actions'

function Detail() {
    const {details} = useSelector((state)=>state.items)
    const {id} = useParams() 
    const dispatch = useDispatch()
    const addToCart = (id)=>{
        dispatch(addCart(id))
    }
  
    useEffect(()=>{
        if(details.length <= 0){
            dispatch(getDetailData(id)) 
        }else {
            let filterArr = details.filter(item=>item.id === +id)
            if(filterArr.length <= 0){
                dispatch(getDetailData(id)) 
            }
        }        
    },[details, dispatch, id])

    let newArr = details.filter(item=>item.id === +id)

    let product = newArr[0]


 
    
    const [active,setActive] = useState(0)

  
    return (
        <Fragment>
            {product ? (   
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:3}}>
                    <Grid item xs={12} sm={12} md={6} sx={{textAlign:"center"}}>
                        <div>
                            <img src={product.images[active]} alt="detail_image" className="detail_image" />
                        </div>
                        <div>
                        <button onClick={()=>setActive(0)} className="btn_image">
                            <img src={product.images[0]} alt="detail_image" className="detail_image_small" />
                        </button>
                        <button onClick={()=>setActive(1)}  className="btn_image">
                            <img src={product.images[1]} alt="detail_image" className="detail_image_small" />
                        </button>
                        <button onClick={()=>setActive(2)}  className="btn_image">
                            <img src={product.images[2]} alt="detail_image" className="detail_image_small" />
                        </button>
                        <button onClick={()=>setActive(3)}  className="btn_image">
                            <img src={product.images[3]} alt="detail_image" className="detail_image_small" />
                        </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className="sec_grid" sx={{textAlign:"center"}}>
                        <div>
                        <h1>{product.brand}
                        <Chip label={product.gender} color="primary" sx={{ml:2}} />
                        </h1>
                        <p>
                            {product.name}
                        </p>
                        <Rating name="read-only" value={product.rating} readOnly />
                        
                        <hr className='hr' />
                        <h2>Price - ${product.price}</h2>
                        <Button variant="contained" size="medium" onClick={()=>addToCart(product.id)}>
                            Add to Cart
                        </Button>
                        <hr className='hr' />
                        <div className='list'>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                                textAlign:'center'
                            }}
                            >
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar sx={{bgcolor:"white"}}>
                                    <LocalShippingIcon color="primary" />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Free Delivery" secondary="  Enter your postal code for delivery availability" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar sx={{bgcolor:"white"}} >
                                    <ReplyIcon color="primary" />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Return Delivery" secondary="Enter your postal code for delivery availability" />
                            </ListItem>
                        </List>
                        </div>
                      
                        </div>
                   
    
                    </Grid>
                    </Grid>  
            ):<Loading/>
        }
        </Fragment>
    )

  
}

export default Detail