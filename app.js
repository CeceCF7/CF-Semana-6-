const express = require('express')
const mongoose = require('mongoose')

const app=express()

const DB_USER = 'USUARIOTEST'
const DB_PASSWORD = 'test123'

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'hello express'})
})

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@appicluster.jra8p0o.mongodb.net/?retryWrites=true&w=majority`
    ).then(()=>{
      console.log('Conectado al MONGODB')
      app.listen(5000)
    })
    .catch((err)=>{
        console.log(err)
    })