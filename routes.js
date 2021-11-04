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

// List all users.
router.get('/user', async (req, res) => {
  try {
    res.send('User')
  } catch (error) {
    console.error('Error GET /user', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Add new user.
router.post('/user', async (req, res) => {
  try {
    res.send('User')
  } catch (error) {
    console.error('Error POST /user', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get user with corresponding user id.
router.get('/user/:userId', async (req, res) => {
  try {
    res.send('user med user id: ' + req.params.userId)
  } catch (error) {
    console.error('Error GET /user/id', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Delete user with corresponding user id.
router.delete('/user/:userId', async (req, res) => {
  try {
    res.send('Deleted user med user id: ' + req.params.userId)
  } catch (error) {
    console.error('Error DELETE /user/id', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get product with corresponding id.
router.get('/products/:productId', async (req, res) => {
  try {
    res.send('product med product Id: ' + req.params.productId)
  } catch (error) {
    console.error('Error GET /products/id', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Delete the product with corresponding product id.
router.delete('/products/:productId', async (req, res) => {
  try {
    res.send('product med product Id: ' + req.params.productId)
  } catch (error) {
    console.error('Error DELETE /products/id', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Add new product to db.
router.post('/products', async (req, res) => {
  try {
    res.send('product med product Id: ' + req.params.productId)
  } catch (error) {
    console.error('Error POST /products', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get orders for user.
router.get('/orders/:userId', async (req, res) => {
  try {
    res.send('order med user Id: ' + req.params.userId)
  } catch (error) {
    console.error('Error GET /orders/userid', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Add products to user order.
router.post('/orders/:userId', async (req, res) => {
  try {
    res.send('order med user Id: ' + req.params.userId)
  } catch (error) {
    console.error('Error POST /orders/userid', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get product from user order.
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

// Add product to user order.
router.post('/orders/:userId/:productId', async (req, res) => {
  try {
    res.send(
      'order med user id :' +
        req.params.userId +
        'product med product Id: ' +
        req.params.productId
    )
  } catch (error) {
    console.error('Error POST /orders/userid/productid', err)
    res.status(500).send(SERVER_ERROR)
  }
})

// Delete product from user order.
router.delete('/orders/:userId/:productId', async (req, res) => {
  try {
    res.send(
      'order med user id :' +
        req.params.userId +
        'product med product Id: ' +
        req.params.productId
    )
  } catch (error) {
    console.error('Error DELETE /orders/userid/productid', err)
    res.status(500).send(SERVER_ERROR)
  }
})

module.exports = router
