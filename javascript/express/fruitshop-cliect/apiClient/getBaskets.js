import axios from "axios";
import {
    API_SERVER_GETBASKET
} from "../next.apiClient.config"

const getBaskets = async () => {
    let data =await axios.get(API_SERVER_GETBASKET)
    return data.data
}


export default getBaskets