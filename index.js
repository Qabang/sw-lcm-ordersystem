import createApp from './app.js'

const port = process.env.PORT || 3000
const dbType = process.env.DB || 'mock' // mock or mongo

const main = async (port) => {
  try {
    const app = await createApp()
    app.listen(port, () => {
      console.log(
        `App (${dbType}) listening at http://localhost:${port}`
      )
    })
  } catch (err) {
    console.error('Error running app', err)
  }
}

main(port)
