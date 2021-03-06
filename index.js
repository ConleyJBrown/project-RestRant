
//requirements
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const placesRoutes = require('./controllers/places')




//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))

//routes
app.use('/places', placesRoutes)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })
  

app.listen(process.env.PORT)
