var db = require('../config/connection')
var collection = require('../config/collection')
var objectId = require('mongodb').ObjectID
module.exports = {
    addProduct: (product) => {
        return new Promise((resolve, reject) => {
            db.get().collection('product').insertOne(product).then((res) => {
                resolve(res.ops[0]._id)
            })
        })
    },
    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id: objectId(id)}).then((response) => {
                resolve(response)
            })
        })
    },
    getProduct: (id) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id: objectId(id)}).then((product) => {
                console.log("DB: ", product)
                resolve(product)
            })
        })
    },
    updateProduct: (id, prod) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION)
            .updateOne({_id: objectId(id)}, {
                $set: {
                    name: prod.name,
                    description: prod.description,
                    price: prod.price,
                    category: prod.category,
                    brand: prod.brand
                }
            }).then((response) => {
                resolve(response)
            })
        })
    },
    addBrand: (brand) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.BRAND_COLLETION).insertOne(brand).then((res) => {
                resolve(res.ops[0]._id)
            })
        })
    },
    getAllBrands: () => {
        return new Promise(async (resolve, reject) => {
            let brands = await db.get().collection(collection.BRAND_COLLETION).find().toArray()
            resolve(brands)
        })
    }
}