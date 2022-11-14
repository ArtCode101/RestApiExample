import axios from "../../axios.config"
import {
  API_SERVER_INSERTBASKET
} from "../../next.apiServer.config"

export default async function handler(req, res) {
    console.log("init"+ req.url);
    if(req.method == 'POST'){
      let fruitName = req.body.fruit
      let data = await axios.post(API_SERVER_INSERTBASKET,{"fruit" : fruitName})
      res.status(200).json(data.data)
    }else{
      res.json({})
    }
  }
  