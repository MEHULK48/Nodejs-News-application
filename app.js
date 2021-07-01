const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
// Templating Engine
app.set('views', './src/views')
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended : true}))

//routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)





app.listen(port, () => console.log(`listening on port ${port}`))