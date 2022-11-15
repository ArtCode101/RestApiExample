import { Container } from '@mui/material';
import * as React from 'react';
import getBaskets from '../../apiClient/getBaskets';
import MiniCardFriut from '../common/MiniCardFruit';
import SlipFruit from '../common/SlipFruit';
import styles from './../../styles/Home.module.css'
import {
    minilistOfProduct
} from '../../next.fruits.config'

const Carts = () => {
    const [status ,setStatus] = React.useState(0)
    const [basket,setBasket] = React.useState([])

    React.useEffect(()=>{
        if(status == 0){
            init()
        }
    })

    

    const init = async() => {
        let data = await getBaskets()   
        console.log(listFruitToJson(data));
        setBasket(listFruitToJson(data))
        setStatus(1)
    }
    
    return ( 
        <Container className={styles.container} sx={{color:"red"}}> 
            {basket.length == 0 ?  "Basket Empty":<SlipFruit rows={basket} infomation={minilistOfProduct}/>}
        </Container>  
    )
}


const listFruitToJson = (list) => {
    let slip = {}

    for (let index in list) {
        if(slip[list[index]] !== undefined){
            slip[list[index]] += 1
        }else{
            slip[list[index]] = 1
        }
    }

    return ConvertSlip(slip)
}

const ConvertSlip = (json) => {
    let slip = [] // {"req" : "1" , "name":"Apple" ,"value":12}
    let index = 1
    for (let key in json) {
        slip.push({
            "req" : index,
            "name" : key,
            "value" : json[key]
        })
        index += 1
    }

    return slip
}

export default Carts