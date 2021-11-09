import createDb from './storage/db.js'
import createApp from './app.js'

const port = process.env.PORT || 3000
const dbType = process.env.DB || 'mock' // mock or mongo

const main = async (port, dbConf) => {
  try {
    const db = await createDb(dbConf, dbType)
    const app = await createApp(db)
    app.listen(port, () => {
      console.log(
        `Students app (${dbType}) listening at http://localhost:${port}`
      )
    })
  } catch (err) {
    console.error('Error running app', err)
  }
}

main(port, dbConf)
