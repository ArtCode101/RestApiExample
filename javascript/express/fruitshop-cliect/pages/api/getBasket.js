import axios from "../../axios.config"
import {
    API_SERVER_GETBASKET
} from "../../next.apiServer.config"

export default async function handler(req, res) {
    console.log("init"+ req.url);
    let data = await axios.get(API_SERVER_GETBASKET)
    res.status(200).json(data.data)
  }
  