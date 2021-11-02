const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    res.render('index', {
      message: 'Hello World!',
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
