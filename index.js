
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send('Nothing to see here...')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/add', (req, res) => {
    let sum = req.body.a + req.body.b
    const sumJSON = {
        a: req.body.a,
        b: req.body.b,
        result: sum
    }
    
    console.log('success')
    res.status(200).json(sumJSON)
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})