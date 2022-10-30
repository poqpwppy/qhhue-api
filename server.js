const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
}).then(console.log('Da ket noi mongoDB'));

const db = mongoose.connection

db.on('error', (error) => console.error(error))

app.use(express.json())

const TeachersRouter = require('./routes/teachers')
app.use('/teachers', TeachersRouter)

app.listen(3000, () => console.log('Server started'))