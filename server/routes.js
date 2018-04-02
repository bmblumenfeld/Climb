const express = require('express')
const controller = require('./controllers/climbs.js')
const bodyParser = require('body-parser')


const router = express.Router()
router.use(bodyParser.json())
router.get('/login',controller.login.get)
router.post('/login',controller.login.post)
router.get('feed',controller.feed.get)


module.exports = router