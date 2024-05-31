const { Schema } = require('mongoose')

const Year = new Schema(
  {
    year: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Year