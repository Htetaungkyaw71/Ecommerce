import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Grid } from '@mui/material';
import { addCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';




function CardItem({item}) {
  let dispatch = useDispatch()
  const addToCart = (id)=>{
      dispatch(addCart(id))
  }

  return (
    <Grid item xs={12} md={4} sm={6} mt={5} mb={5}>
      <Card sx={{ maxWidth: 345 }} >
      <Link to={`/${item.id}`} className="link">
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt="green iguana"
          />
          <CardContent align="left">
       
            <Typography gutterBottom component="div">
              {item.name}   <Chip label={item.brand} color="primary" size="small" />
            </Typography>    
          
            <Typography variant="h6" color="text.secondary"  sx={{mt:3}}>
              ${item.price}       
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      
    
        <CardActions>
          <Button variant="contained" size="medium" onClick={()=>addToCart(item.id)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
   
  )
}

export default CardItem