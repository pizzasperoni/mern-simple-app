const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()


// Boddyparser middleware 
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI


//  connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected ... '))
  .catch(err => console.log(err))

  
// Use routes
app.use('/api/items', items)

port = process.env.PORT || 5000

app.listen(port, ()=>console.log(`running at port ${port}`))