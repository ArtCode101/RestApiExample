//import package
let express = require('express')

//config
let port = 3200

//code
let server = express()
server.use(express.json())

let basket = []  // "Apple" "Papaya" "Banana" "Orange"

server.get('/getBasket',(request,response)=>{
    console.log("init get basket");
    response.json(basket)
})

server.post('/insertBasket',(request,response)=>{
    console.log("init insert basket");
    let fruit = request.body.fruit
    basket.push(fruit)
    response.json({"massage":"Insert "+fruit+" to Basket"})
})


server.listen(port)