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
router.post('/add-category', (req, res) => {
    let category = req.body
    adminHelper.addCategory(category).then((response) => {
        res.send()
    })
})
router.get('/view-all-categories', (req, res) => {
    adminHelper.getAllCategories().then((categories) => {
        res.send(categories)
    })
})
router.post('/add-product', (req, res) => {
    adminHelper.addProduct(req.body).then((prodId) => {
        res.send(prodId)
    })
})
router.get('/get-all-products', (req, res) => {
    adminHelper.getAllProducts().then((products) => {
        res.send(products)
    })
})
module.exports = router;