import * as React from 'react';
import CardFruits from '../common/CardFriuts';
import styles from './../../styles/Home.module.css'
import {Button, Container, Grid } from '@mui/material';

import {
    listOfProduct
} from '../../next.fruits.config'
import AlertBuyProduct from '../common/AlertBuyProduct';
import insertFruitToBasket from '../../apiClient/insertFruitToBasket';



const Products = () => {
    
    const [open, setOpen] = React.useState(false);
    const [name,setName] = React.useState(" ")
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const AddCart = (productName) => {
        insertFruitToBasket(productName)
        setName(productName)
        handleOpen()
        
    }

    return     <Container className={styles.container}>
            <Grid container spacing={2}>                
                  {  listOfProduct.map((item)=>(
                        <Grid item sm={12} md={6} lg={4} xl={3}>
                            <CardFruits 
                            src={item.img}
                            name={item.name} 
                            description={item.description}
                            price={item.price}
                            handleBuy={AddCart}
                            />
                        </Grid>
                    ))}
            </Grid>
            <AlertBuyProduct name={name} open={open} handleClose={handleClose}/>
        </Container>
}

export default Products



                
{/* <Grid item sm={12} md={6}  lg={4} xl={3}>
<CardFruits 
    src={pathImagePapaya}
    name={namePapaya} 
    description={descriptionPapaya}
    price={pricePapaya}
    handleBuy={AddCart}
    />
</Grid>
<Grid item sm={12} md={6}  lg={4} xl={3}>
    <CardFruits 
    src={pathImageBanana}
    name={nameBanana} 
    description={descriptionBanana}
    price={priceBanana}
    handleBuy={AddCart}
    />
</Grid>
<Grid item sm={12} md={6}  lg={4} xl={3}>
    <CardFruits 
    src={pathImageOrange}
    name={nameOrange} 
    description={descriptionOrange}
    price={priceOrange}
    handleBuy={AddCart}
    />
</Grid> */}