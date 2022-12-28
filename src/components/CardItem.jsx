import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Grid } from '@mui/material';
import { addCart } from '../redux/actions';
import { useDispatch } from 'react-redux';


function CardItem({item}) {
  let dispatch = useDispatch()
  const addToCart = (id)=>{
      dispatch(addCart(id))
  }

  return (
    <Grid item xs={12} md={4} sm={6} mt={5} mb={5}>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div" align="left">
              {item.name} <Chip label={item.brand} color="primary" size="small"/>
            </Typography>     
            <Typography variant="h6" color="text.secondary" align="left" sx={{mt:3}}>
              ${item.price}       
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>addToCart(item.id)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
   
  )
}

export default CardItem