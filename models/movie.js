const { Schema } = require('mongoose')

const Movie = new Schema(
  {
    year_id: { type: Schema.Types.ObjectId, ref: 'year_id' },
    image: { type: String, required: true },
    title: { type: String, required: true },
    genre: { type: String, required: true },
    rated: { type: String, required: true },
    summary: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Movie