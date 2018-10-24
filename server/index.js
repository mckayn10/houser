require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors())

massive(process.env.DATABASE_STRING)
    .then(db => {
        app.set('db', db)
        console.log('database is connected')
    })
    .catch(err => {
        console.log('database connection error', err)
    })

app.get('/houses', (req, res) => controller.getHouses(req, res))
app.post('/houses', (req, res) => controller.addHouse(req, res))
app.delete('/houses/:id', (req, res) => controller.deleteHouse(req, res))



const port = 8000;
app.listen(port, function() {
    console.log(`server is listening on port ${port}`)
})