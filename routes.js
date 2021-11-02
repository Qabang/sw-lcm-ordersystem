const router = require('express').Router()

const SERVER_ERROR = 'Server Error'

router.get('/', async (req, res) => {
  try {
    res.send('Start')
  } catch (error) {
    console.error('Error GET /', err)
    res.status(500).send(SERVER_ERROR)
  }
})

router.get('/user', async (req, res) => {
  try {
    res.send('User')
  } catch (error) {
    console.error('Error GET /user', err)
    res.status(500).send(SERVER_ERROR)
  }
})

router.get('/user/:userId', async (req, res) => {
  try {
    res.send('user med user id: ' + req.params.userId)
  } catch (error) {
    console.error('Error GET /user/id', err)
    res.status(500).send(SERVER_ERROR)
  }
})

router.get('/products/:productId', async (req, res) => {
  try {
    res.send('product med product Id: ' + req.params.productId)
  } catch (error) {
    console.error('Error GET /products/id', err)
    res.status(500).send(SERVER_ERROR)
  }
})

router.get('/orders/:userId', async (req, res) => {
  try {
    res.send('order med user Id: ' + req.params.userId)
  } catch (error) {
    console.error('Error GET /orders/userid', err)
    res.status(500).send(SERVER_ERROR)
  }
})

router.get('/orders/:userId/:productId', async (req, res) => {
  try {
    res.send(
      'order med user id :' +
        req.params.userId +
        'product med product Id: ' +
        req.params.productId
    )
  } catch (error) {
    console.error('Error GET /orders/userid/productid', err)
    res.status(500).send(SERVER_ERROR)
  }
})

module.exports = router
