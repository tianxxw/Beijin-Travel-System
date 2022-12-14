const express = require('express')
const router = express.Router()
const restaurant = require('../router_headler/restaurant')
router.post('/all',restaurant.all)
router.get('/ma_all',restaurant.ma_all)
router.post('/delete',restaurant.delete)
router.post('/add',restaurant.add)
router.post('/update',restaurant.update)
router.post('/search',restaurant.search)
router.post('/details',restaurant.details)
module.exports = router