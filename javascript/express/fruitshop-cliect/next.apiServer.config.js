/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  HOST_NAME : "http://localhost:3200",
  API_SERVER_GETBASKET : "/getBasket",
  API_SERVER_INSERTBASKET : "/insertBasket"
}

module.exports = nextConfig
 