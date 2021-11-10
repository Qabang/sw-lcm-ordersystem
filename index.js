import createApp from './app.js'

const port = 3000 // 3000 or 80
const dbType = 'mongo' // mock or mongo

const main = async (port) => {
  try {
    const app = await createApp()
    app.listen(port, () => {
      console.log(
        `Students app (${dbType}) listening at http://localhost:${port}`
      )
    })
  } catch (err) {
    console.error('Error running app', err)
  }
}

main(port)
