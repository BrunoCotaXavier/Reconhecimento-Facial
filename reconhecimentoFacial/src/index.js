const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/screns/home.html')
})

app.listen(8080, ()=>{
    console.log('Servidor rodando na porta 8080')
})

module.exports = express