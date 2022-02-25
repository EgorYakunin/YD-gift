const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 6969

// Define path for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setting up static directory
app.use(express.static(publicDir))

app.get('', (req, res) => { 
    const name = req.query.name;

    res.render('index', {
        username: name
    })
})

app.listen(port, () => { 
    console.log('server is up and running..');
})