const express = require('express')
const middleware = require('./handler')
const app = express()
const port = 3000


  
  var cb3 = function (req, res) {
    res.send('Hello from C! with middleware')
  }
  
  app.get('/', [middleware, cb3])

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))