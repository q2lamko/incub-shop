const fetch = require('node-fetch')
const {createProxyMiddleware} = require('http-proxy-middleware')

const express = require('express')
const {STRAPI_URL} = require('./consts.js')
const app = express()
const port = 4000

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(
  '/uploads',
  createProxyMiddleware({target: 'STRAPI_URl', changeOrigin: true})
)

app.get('/', (req, res) => {
  fetch(`${STRAPI_URL}/products`)
    .then((res) => res.json())
    .then((products) => {
      res.render('mainContent', {products});
    })

})




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
