const express = require('express')
const router = express.Router()
var adminHelper = require('../helpers/admin-helper')
router.get('/', (req, res) => {
    res.send("Admin")
})
router.post('/add-brand', (req, res) => {
    let brand = req.body
    adminHelper.addBrand(brand).then((response) => {
        res.send()
    })
})
router.get('/view-all-brands', (req, res) => {
    adminHelper.getAllBrands().then((brands) => {
        res.send(brands)
    })
})
module.exports = router;