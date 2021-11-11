import express from 'express'
import createDb from './storage/db.js'

const router = express.Router()
const SERVER_ERROR = 'Server Error'

const dbConf = {
  name: process.env.DB_NAME,
  connectionUrl: process.env.DB_CONNECTION_URL
}

// Landingpage.
router.get('/', async (req, res) => {
  try {
    res.send(
      'Ordersystem - SW-LCM <br/> by: Sandra Lindström, Car-El Williams och Hampus Aronsson'
    )
  } catch (error) {
    console.error('Error GET /', error)
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

// Get all orders.
router.get('/orders', async (req, res) => {
  const { userId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Orders')
    const getOrdersData = await db.getAll()
    res.send(getOrdersData)
  } catch (error) {
    console.error('Error GET /user/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get all orders for user.
router.get('/orders/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Orders')
    const getUserOrdersData = await db.getAllById(userId)
    res.send(getUserOrdersData)
  } catch (error) {
    console.error('Error GET /user/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Get all orders for user with product.
router.get('/orders/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Orders')
    const getUserOrdersData = await db.getOrdersByProductId(userId, productId)
    res.send(getUserOrdersData)
  } catch (error) {
    console.error('Error GET /user/id', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Add products to user order.
router.post('/orders/:userId', async (req, res) => {
  const { userId } = req.params
  // Array of objects containing product id and amount of each product.
  const { products } = req.body

  const date = new Date().toISOString() // Todays date.
  try {
    const db = await createDb(dbConf, 'mongo', 'Orders')
    await db.createOne({ userId, products, date })
    res.status(201).send({ created: true })
  } catch (error) {
    console.error('Error POST /orders/userid', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Modify a order by id.
router.put('/orders/edit/:orderId', async (req, res) => {
  const { orderId } = req.params
  const data = req.body
  try {
    const db = await createDb(dbConf, 'mongo', 'Orders')
    await db.updateOne(orderId, data)
    res.status(201).send({ Updated: true })
  } catch (error) {
    console.error('Error PUT /orders/orderId', error)
    res.status(500).send(SERVER_ERROR)
  }
})

// Delete order.
router.delete('/orders/delete/:orderId', async (req, res) => {
  const { orderId } = req.params
  try {
    const db = await createDb(dbConf, 'mongo', 'Orders')
    await db.deleteOne(orderId)
    res.status(200).send({ deleted: true })
  } catch (error) {
    console.error('Error DELETE /orders/userid/productid', error)
    res.status(500).send(SERVER_ERROR)
  }
})

export default router
