import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container, Grid } from '@mui/material';
import { DataCars } from '../dataCars.js';

const CardCars = () => {
  const [cars, setCars] = useState([])
    return ( 
<Container>   
  <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Grid item>
    <Card sx={{ maxWidth: 800, my:'2rem'}}>
        <CardContent className='carPosts'>
          {DataCars.map(data => {
            return(
            <>
          <div key={data.id}>
          <Typography gutterBottom variant="h5" component="div" sx={{my:'2rem'}}>
            {data.CarName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.CarPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
             {data.CarCharacteristics}
          </Typography>
          <Typography variant="body2" color="text.secondary"sx={{my:'2rem'}}>
            {data.CarDealer}
          </Typography>
          </div>
          </>
          )
          })}
        </CardContent>
    </Card>
    </Grid>
    
  </Grid>
</Container>  
    )
}

export default CardCars;