const axios = require('axios')

const host = "http://localhost:3200"

const path1 = "/getBasket"
const path2 = "/insertBasket"

async function getBasket() {
    let response = await axios.get(host+path1)
    console.log(response.data);
}

async function insertBasket(fruit) {
    let response = await axios.post(host+path2,{
        fruit:fruit
    })
    console.log(response.data);
}

getBasket()

// insertBasket("Apple")