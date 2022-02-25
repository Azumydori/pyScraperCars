import { Container, Grid, Typography } from '@mui/material';
import CardCars from './components/Card.js'

const Home = () => {
    return (
    <Container>
        <Grid container sx={{display:'flex', justifyContent:'center'}}>
        <Grid item sx={{fontWeight:'bold', my:'4rem'}}>
          <Typography variant='h2'>Welcome to CarScrapper</Typography>
          <Typography variant='h4'sx={{my:'2rem'}}>Find the latest information for cars on sale -- using Python!</Typography>
        </Grid>
      </Grid>
     <Grid container>
        <Grid item>
           <Typography variant='h5'>
            Check out the Info I just scrapped!
            </Typography>
          </Grid>
      </Grid>
      <Grid container>
        <Grid item sx={4}>
          <CardCars/>
        </Grid>
      </Grid>
    </Container>
    )
}
export default Home;