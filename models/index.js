const mongoose = require('mongoose')
const YearSchema = require('./year')
const MusicSchema = require('./music')
const MovieSchema = require('./movie')

const Year = mongoose.model('Year', YearSchema)
const Music = mongoose.model('Music', MusicSchema)
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = {
  Year,
  Music,
  Movie,
}