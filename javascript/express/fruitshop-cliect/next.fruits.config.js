/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  listOfProduct : [
    {
      "name" : "Apple",
      "img" :"/static/image/apple.jpg",
      "description" : "this an apple import from Mars star,Sweet and sour taste not much of one.",
      "price" : 1990
    },
    {
      "name" : "Papaya",
      "img" :"/static/image/papaya.jpg",
      "description" : "this a papaya import from Mars star,Sweet and sour taste not much of one.",
      "price" : 5390
    },
    {
      "name" : "Banana",
      "img" :"/static/image/banana.jpg",
      "description" : "this a banana import from Mars star,Sweet and sour taste not much of one.",
      "price" : 1590
    },
    {
      "name" : "Orange",
      "img" :"/static/image/orange.jpg",
      "description" : "this an orange import from Mars star,Sweet and sour taste not much of one.",
      "price" : 3990
    }
  ],
  minilistOfProduct : {
    "Apple" : {
      "price" : 1990     
    },
    "Papaya" : {
      "price" : 5390     
    },
    "Banana":{
      "price" : 1590     
    },
    "Orange" : {
      "price" : 3990     
    }
  }
}

module.exports = nextConfig
 