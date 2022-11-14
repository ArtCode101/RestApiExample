import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Fab, Typography } from '@mui/material';

const CardFruits = ({src,name,price,description,handleBuy}) => {
    return <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            image={src}
            alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Container sx={{color:"gray"}}>{price} baht</Container> 
                <Button variant="contained" onClick={()=>{handleBuy(name)}}>Add</Button>
            </CardActions>
        </Card>

    </>
}


export default CardFruits