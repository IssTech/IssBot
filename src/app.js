const path = require('path');
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express Config
const static_files = path.join(__dirname, '../public')
const template_files = path.join(__dirname, '../templates/views')
const partials_files = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', template_files)
hbs.registerPartials(partials_files)

// Setup static directory to serve
app.use(express.static(static_files))

// Route configuration
app.get('', (req, res) => {
  res.render('index', {
    title: 'IssBot',
    name: 'IssTech AB'
  })
})
//
// app.get('/about', (req, res) => {
//   res.render('about', {
//     title: 'About IssTech',
//     name: 'IssTech AB'
//   })
// })

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'IssTech AB',
  })
} )

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
