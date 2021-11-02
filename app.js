const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(require('./routes'))
app.set('view engine', 'pug')

app.listen(3000, () => {
  console.log('Server is running on 3000')
})
