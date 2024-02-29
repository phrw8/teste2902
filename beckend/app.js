const express = require('express')
const body_parser = require('body-parser')
const app = express()
const Router = require('./routes/router.js')
const PORTA = 5050
app.use(Router)

app.listen(PORTA, (error)=>{
    if(error) throw error

    return console.log('rodando')
})