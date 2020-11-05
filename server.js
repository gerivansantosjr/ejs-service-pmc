const express = require('express')
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.post('/teste', (req, res) => {
    console.log('>>>>>>>>> ', res.body)

    return res.status(200).json({ body: res.body })
})