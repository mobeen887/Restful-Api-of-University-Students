const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/una'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected....')
})

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/una/students', studentRouter)

app.listen(3000, () => {
    console.log('server started')
})