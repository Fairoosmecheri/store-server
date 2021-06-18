var db = require('../config/connection')
var collection = require('../config/collection')
var objectId = require('mongodb').ObjectID
// const bcrypt = require('bcrypt')

module.exports = {
    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            // userData.Password = await bcrypt.hash(userData.Password, 10);
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data) => {
                resolve(data.ops[0])
            })
        })
    },
    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let response = {}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email })
            console.log('USer fround')
            console.log("USER: ", user)
            console.log("USERDATA: ", userData.password)
            console.log("USER PWD: ", user.password)
            if (user) {
                
                    if (userData.password == user.password) {
                        
                        response.user = user
                        response.status = true
                        resolve(response)
                    }
                    else {

                        resolve({ status: false })
                    }
                
            }
            else {

                resolve({ status: false })
            }
        })
    },
}