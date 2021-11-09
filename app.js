import express from 'express'
import router from './routes.js'
import dotenv from 'dotenv'

// Set the path to the .env file depending on wich environment we are running
// from, dev or prod.
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` })

const createApp = async (db) => {
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.get('/students', async (req, res) => {
    try {
      const students = await db.getAll()
      res.send(students)
    } catch (err) {
      console.error('Error GET /students', err)
      res.status(501).send(SERVER_ERROR)
    }
  })

  app.get('/students/:id', async (req, res) => {
    const id = req.params.id
    try {
      const student = await db.getOne(id)
      res.send(student)
    } catch (err) {
      console.error('Error GET /students/id', err)
      res.status(501).send(SERVER_ERROR)
    }
  })

  app.post('/students', async (req, res) => {
    const { name, age } = req.body
    try {
      await db.createOne({ name, age })
      res.status(201).send({ created: true })
    } catch (err) {
      console.error('Error POST /students', err)
      res.status(501).send(SERVER_ERROR)
    }
  })

  app.delete('/students/:id', async (req, res) => {
    const id = req.params.id
    try {
      await db.deleteOne(id)
      res.status(200).send({ deleted: true })
    } catch (err) {
      console.error('Error POST /students', err)
      res.status(501).send(SERVER_ERROR)
    }
  })

  return app
}

export default createApp
