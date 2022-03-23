const express = require('express')
const router = express.Router()

const home = require('./moduels/home')
const url = require('./moduels/url')

router.use('/', home)
router.use('/', url)

module.exports = router

