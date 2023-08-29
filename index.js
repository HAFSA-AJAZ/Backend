const express = require('express')
const app = express()
require('dotenv').config()
const categoryrouter = require('./api/category/router')
const port = process.env.SERVER_PORT

app.use(express.json())
app.use('./api', categoryrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})