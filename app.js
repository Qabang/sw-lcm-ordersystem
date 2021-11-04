import express from 'express'
import router from './routes.js'

const createApp = async (db) => {
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(router)

  return app
}

export default createApp
