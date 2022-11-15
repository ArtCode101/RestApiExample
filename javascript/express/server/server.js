//import package
let express = require('express')

//config
let port = 3000

//code
let server = express()
server.use(express.json())

let list = ["data1","data2"]

server.get('/getData',(request,response)=>{
    response.json(list)
})

server.post('/insertData',(request,response)=>{
    let data = request.body.data
    list.push(data)
    response.json({"massage":"Insert data"})
})


server.listen(port)