import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import CardItem from './CardItem'
import { Container } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions';

function Shopping() {
    const {products,carts} = useSelector((state)=>state.items)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getData())
    },[dispatch])

    console.log("product",products)
    console.log("cart",carts)

    const data = products.map(item=><CardItem item={item} key={item.id}/>)
    return (
        <Container fixed align="center">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data}
        </Grid>
        </Container>
    )
}

export default Shopping