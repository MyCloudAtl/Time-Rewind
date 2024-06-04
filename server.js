const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const movieController = require('./controllers/movieController')
const musicController = require('./controllers/musicController')
const yearController = require('./controllers/yearController')

const PORT = process.env.PORT || 3003

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/songs', musicController.getSongs)
app.get('/songs/:id', musicController.getSong)
app.get('/movies', movieController.getMovies)
// app.get('/moviesByGen/:generation', movieController.getMoviesForGeneration)
app.get('/movies/:id', movieController.getMovie)
app.get('/years', yearController.getYears)
app.get('/years/:id', yearController.getYear)
app.put('/songs/:id', musicController.updateMusic)
app.delete('/songs/:id', musicController.deleteMusic)
app.post('/songs', musicController.createMusic)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})