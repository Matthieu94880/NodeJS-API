const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const userRoutes = require('./routes/user')
const stuffRoutes = require('./routes/stuff')

mongoose.connect('mongodb+srv://barrierematthieu94:CMDemXxZycUJwmaF@cluster0.q7gk3vc.mongodb.net/test',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json())
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/auth', userRoutes)
app.use('/api/stuff', stuffRoutes)

module.exports = app