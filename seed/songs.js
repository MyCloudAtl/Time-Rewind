const db = require('../db')
const { Year, Music } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const genxB = await Year.find({ name:'Generation X (Begin 1965-1970)'})
    const genxM = await Year.find({ name:'Generation X (Mid 1970-1975)'})
    const genxE = await Year.find({ name:'Generation X (End 1975-1980)'})
    const millB = await Year.find({ name:'Millennial (Begin 1981-1986)'})
    const millM = await Year.find({ name:'Millennial (Mid 1986-1991)'})
    const millE = await Year.find({ name:'Millennial (End 1991-1996)'})
    const genzB = await Year.find({ name:'Generation Z (Begin 1997-2002)'})
    const genzM = await Year.find({ name:'Generation Z (Mid 2002-2007)'})
    const genzE = await Year.find({ name:'Generation Z (End 2007-2012)'})

  const songs = [
    {
        year_id: genxB[0]._id,
        cover: { type: String, required: true },
        title: { type: String, required: true },
        artist: { type: String, required: true },
        genre: { type: String, required: true },
        musicClip: { type: String, required: true },
        youtube: {type: String, required: true}
    },
]

await Music.insertMany(songs)
console.log('Created songs with years!')
}
const run = async () => {
await main()
db.close()
}

run()