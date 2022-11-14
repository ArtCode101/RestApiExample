const fetch = require('node-fetch');

const host = "http://localhost:3200"

const path1 = "/getBasket"
const path2 = "/insertBasket"

async function getBasket() {
    let response = await fetch(host+path1)
    const data = await response.json();
    console.log(data);
}

async function insertBasket(fruit) {
    let response = await fetch(host+path2,{
        method: 'post',
        body: JSON.stringify({fruit:fruit}),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json();
    console.log(data);
}

// insertBasket("Apple")

// getBasket()


//lib npm install node-fetch@2