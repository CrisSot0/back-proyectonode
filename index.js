// Declaracion de constantes
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

// Capturar el body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

// Conexion a la base de datos

//Conexion a la base de datos
//console.log(process.env.USERNAME,process.env.PASSWORD,process.env.DBNAME)
const uri = `mongodb+srv://criztian:hola@cluster0.tq1hgll.mongodb.net/ust?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base')
}).catch(e => {
    console.log('error: ', e)
})

// Importar rutas
const authRoutes = require('./routes/auth')

// Ruta del middleware
app.use('/api/user', authRoutes)


app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'WORKS FINE!!!'
    })
})

//Inicializar servidor
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Servidor Corriendo: ${PORT}`)
})