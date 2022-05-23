import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    // width: '100%',
    // height: '100%',

    // display: 'grid',
    // gridTemplateColumns: '1fr',
    // gridTemplateRows: '1fr 2fr 2fr 1fr',

    // background: 'rgba(77, 77, 77, .9)',
    // color: '#FEF5DF',
    // opacity: 0,
    // transition: 'all 0.5s',

    // fontFamily: 'Playfair Display, serif'

    opacity: 0,
    transform: 'translateY(-140px)',
    transition: 'all 0.7s',

    '&:hover': {
      opacity: 1,
      background: 'rgba(0,0,0,0.7)',
      color: '#fff'
    }
  }
});

const data = [
  {
    name: 'Canada',
    img: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg'
  },
  {
    name: 'Australia',
    img: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg'
  },
  {
    name: 'Romania',
    img: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg'
  },
  {
    name: 'Nederland',
    img: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg'
  },
  {
    name: 'Germany',
    img: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg'
  },
  {
    name: 'Italy',
    img: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg'
  }
];

const Countries = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid
          sx={{ m: 5 }}
          container
          // spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map(country => (
            <Card sx={{ maxWidth: 345, margin: '30px 15px' }}>
              {/* <Typography
                  sx={{ fontSize: 18, fontWeight: 500, m: 1 }}
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  Hello My Friend
                </Typography> */}
              <CardMedia
                component="img"
                height="170px"
                // width="50%"
                image={country.img}
                alt="green iguana"
              />
              <Box className={classes.root}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                rerum unde exercitationem magnam dolorem? Veritatis esse rem
                dolores vel laudantium.
              </Box>
              <Typography
                sx={{ fontSize: 18, fontWeight: 500, m: 1 }}
                gutterBottom
                variant="h4"
                component="div"
              >
                {country.name}
              </Typography>

              {/* <CardContent> */}
              {/* <Typography
                  sx={{ fontSize: 18, fontWeight: 500 }}
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  Lizard
                </Typography>            */}
              {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              {/* </CardContent> */}
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Countries;
