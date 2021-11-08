import express from 'express'
import createDb from './storage/db.js'

const dbConf = {
  name: 'ordersystem',
  connectionUrl: `mongodb+srv://hampus:eH3ti17f8SA3s6s1@ordersystem.9xjhj.mongodb.net/ordersystem?retryWrites=true&w=majority`
}

const router = express.Router()
const SERVER_ERROR = 'Server Error'

router.get('/', async (req, res) => {
  try {
    //TODO Visa alla collections på samma gång
    const db = await createDb(dbConf, 'mongo', 'Users')
    const getAllData = await db.getAll()
    res.send(getAllData)
  } catch (error) {
    console.error('Error GET /allData', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// List all users.
router.get('/user', async (req, res) => {
  try {
    const db = await createDb(dbConf, 'mongo', 'Users')
    const getAllUserData = await db.getAll()
    res.send(getAllUserData)
  } catch (error) {
    console.error('Error GET /user', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Add new user.
router.post('/user', async (req, res) => {
  const { firstname, lastname, adress } = req.body
  try {
    const db = await createDb(dbConf, 'mongo', 'Users')
    await db.createOne({ firstname, lastname, adress })
    res.status(201).send({ created: true })
  } catch (error) {
    console.error('Error POST /user', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get user with corresponding user id.
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Users')
    const getOneUserData = await db.getOne(userId)
    res.send(getOneUserData)
  } catch (error) {
    console.error('Error GET /user/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Delete user with corresponding user id.
router.delete('/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Users')
    await db.deleteOne(userId)
    res.status(200).send({ deleted: true })
  } catch (error) {
    console.error('Error DELETE /user/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})
// Get all products
router.get('/products', async (req, res) => {
  try {
    const db = await createDb(dbConf, 'mongo', 'Products')
    const getAllProducts = await db.getAll()
    res.send(getAllProducts)
  } catch (error) {
    console.error('Error GET /products/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get product with corresponding id.
router.get('/products/:productId', async (req, res) => {
  const { productId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Products')
    const getOneProductData = await db.getOne(productId)
    res.send(getOneProductData)
  } catch (error) {
    console.error('Error GET /products/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Delete the product with corresponding product id.
router.delete('/products/:productId', async (req, res) => {
  const { productId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Products')
    await db.deleteOne(productId)
    res.status(200).send({ deleted: true })
  } catch (error) {
    console.error('Error DELETE /products/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Add new product to db.
router.post('/products', async (req, res) => {
  const { name, cost, description, amount } = req.body
  try {
    const db = await createDb(dbConf, 'mongo', 'Products')
    await db.createOne({ name, cost, description, amount })
    res.status(201).send({ created: true })
  } catch (error) {
    console.error('Error POST /products', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get orders for user.
router.get('/orders/:userId', async (req, res) => {
  try {
    res.send('order med user Id: ' + req.params.userId)
  } catch (error) {
    console.error('Error GET /orders/userid', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Add products to user order.
router.post('/orders/:userId', async (req, res) => {
  try {
    res.send('order med user Id: ' + req.params.userId)
  } catch (error) {
    console.error('Error POST /orders/userid', error)
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
    console.error('Error GET /orders/userid/productid', error)
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
    console.error('Error POST /orders/userid/productid', error)
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
    console.error('Error DELETE /orders/userid/productid', error)
    res.status(500).send(SERVER_ERROR)
  }
})

export default router
