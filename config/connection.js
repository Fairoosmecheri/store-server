const mongoClient = require('mongodb').MongoClient
const state = {
    db: null
}

module.exports.connect = function(done) {
    const url = 'mongodb+srv://admin:admin123@cluster0.zb4ah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const dbname = 'store'
    mongoClient.connect(url, (err, data) => {
        if(err) return done(err)
        state.db = data.db(dbname)
    })
    done()
}

module.exports.get = function() {
    return state.db
}