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

// Importar rutas

// Ruta del middleware
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