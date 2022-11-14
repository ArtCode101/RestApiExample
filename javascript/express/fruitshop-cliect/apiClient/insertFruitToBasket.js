import axios from "axios";
import {
    API_SERVER_INSERTFRUIT
} from "../next.apiClient.config"

const insertFruitToBasket = async (fruit) => {
    let data =await axios.post(API_SERVER_INSERTFRUIT,{"fruit" : fruit})
    return data.data
}


export default insertFruitToBasket