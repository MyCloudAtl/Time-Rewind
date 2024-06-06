const { Schema } = require('mongoose')

const Music = new Schema(
    {
        year_id: { type: Schema.Types.ObjectId, ref: 'year_id' },
        cover: { type: String, required: true },
        title: { type: String, required: true },
        artist: { type: String, required: true },
        genre: { type: String, required: true },
        youtube: { type: String, required: true}
      },
  { timestamps: true }
)

module.exports = Music