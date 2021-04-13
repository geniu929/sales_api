const express =require('express')
const config = require("config")
const mongoose = require( 'mongoose')
const app = express()

app.use('/api/auth', require('../routes/auth.routes'))
app.use('/api/sales', require('../routes/sales.routes'))

const PORT = config.get('port') || 8080

async  function start() {
    try{
       await mongoose.connect(config.get('mongoUri'), {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true
       })
    }catch (e){
        console.log('server Error', e.message)
        process.exit(1)
    }

}

app.listen(PORT, ()=>console.log(`app has been started on PORT ${PORT}`))