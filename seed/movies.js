const db = require('../db')
const { Year, Movie } = require('../models')

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

  const movies = [
    {
        year_id: genxB[0]._id,
        image: { type: String, required: true },
        title: "Halloween (1978)",
        genre: { type: String, required: true },
        rated: { type: String, required: true },
        summary: { type: String, required: true },
        link: { type: String, required: true },
    },
    {
        year_id: genxB[0]._id,
        image: { type: String, required: true },
        title: "Night of the Living Dead (1968)",
        genre: { type: String, required: true },
        rated: { type: String, required: true },
        summary: { type: String, required: true },
        link: { type: String, required: true },
    },
    {
        year_id: genxB[0]._id,
        image: { type: String, required: true },
        title: "The Texas Chain Saw Massacre (1974)",
        genre: { type: String, required: true },
        rated: { type: String, required: true },
        summary: { type: String, required: true },
        link: { type: String, required: true },
    },
    {
        year_id: genxB[0]._id,
        image: { type: String, required: true },
        title: "The Birds (1963)",
        genre: { type: String, required: true },
        rated: { type: String, required: true },
        summary: { type: String, required: true },
        link: { type: String, required: true },
    },
    {
        year_id: genxB[0]._id,
        image: { type: String, required: true },
        title: "The Exorcist (1973)",
        genre: { type: String, required: true },
        rated: { type: String, required: true },
        summary: { type: String, required: true },
        link: { type: String, required: true },
    },
    {
        year_id: genxB[0]._id,
        image: { type: String, required: true },
        title: { type: String, required: true },
        genre: { type: String, required: true },
        rated: { type: String, required: true },
        summary: { type: String, required: true },
        link: { type: String, required: true },
    },
]

await Movie.insertMany(movies)
console.log('Created movies with years!')
}
const run = async () => {
await main()
db.close()
}

run()