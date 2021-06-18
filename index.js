var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var db = require('./config/connection')

var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');

const app = express()
app.use(cors())

app.use('/', userRouter);
app.use('/admin', adminRouter);

const PORT = process.env.PORT || 5000
db.connect((err) => {
    if(err) console.log("Error")
    else {
        console.log("Database connected")
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
    }
});
