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
  app.use(router)

  return app
}

export default createApp
