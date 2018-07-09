const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

port = process.env.PORT || 5000

app.listen(port, ()=>console.log(`running at port ${port}`))