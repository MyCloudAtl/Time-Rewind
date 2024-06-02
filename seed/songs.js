const db = require('../db')
const { Year, Music } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
  try {
      await Music.deleteMany({});
      console.log('All collection reset');
  } catch (error) {
      console.error('Error resetting collections:', error);
  }
};

const main = async () => {
    resetCollections()
    const genxB = await Year.find({ year:'Generation X (Begin 1965-1970)'})
    const genxM = await Year.find({ year:'Generation X (Mid 1970-1975)'})
    const genxE = await Year.find({ year:'Generation X (End 1975-1980)'})
    const millB = await Year.find({ year:'Millennial (Begin 1981-1986)'})
    const millM = await Year.find({ year:'Millennial (Mid 1986-1991)'})
    const millE = await Year.find({ year:'Millennial (End 1991-1996)'})
    const genzB = await Year.find({ year:'Generation Z (Begin 1997-2002)'})
    const genzM = await Year.find({ year:'Generation Z (Mid 2002-2007)'})
    const genzE = await Year.find({ year:'Generation Z (End 2007-2012)'})

  const songs = [
    {
      year_id: genxB[0]._id,
      cover: "https://lh6.googleusercontent.com/proxy/ni8hDTiCbBUs_nCokiuIhlCQpCrEbTT9kugirULgqgnOFPScAH8T7owH9pWukG29FZzSoTnjuLgjCw0EWu8h7-xUwadwYb16QtZjO4MA3a_btD6sR4fWhAu_dd3Eh1DUbuEx9jh9Z1gRAfavXkAq8_IZxfQSQCiLn-j_",
      title: "Hey Jude",
      artist: "The Beatles",
      genre: "Rock",
      youtube: "https://youtu.be/A_MjCqQoLLA",
    },
    {
      year_id: genxB[0]._id,
      cover: "https://m.media-amazon.com/images/I/51cCvYmITVL._AC_UF894,1000_QL80_.jpg",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock",
      youtube: "https://youtu.be/fJ9rUzIMcZQ",
    },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image3",
    //   "title": "Stairway to Heaven",
    //   "artist": "Led Zeppelin",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=xbhCPt6PZIU"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image4",
    //   "title": "Imagine",
    //   "artist": "John Lennon",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=DVg2EJvvlF8"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image5",
    //   "title": "Hotel California",
    //   "artist": "Eagles",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=mnKPEsbTo9s"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image6",
    //   "title": "Boogie Wonderland",
    //   "artist": "Earth, Wind & Fire",
    //   "genre": "Disco",
    //   "youtube": "https://www.youtube.com/watch?v=god7hAPv8f0"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image7",
    //   "title": "Sweet Home Alabama",
    //   "artist": "Lynyrd Skynyrd",
    //   "genre": "Southern Rock",
    //   "youtube": "https://www.youtube.com/watch?v=5I2y7w7d8nQ"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image8",
    //   "title": "We Will Rock You",
    //   "artist": "Queen",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=-tJYN-eG1zk"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image9",
    //   "title": "Let's Stay Together",
    //   "artist": "Al Green",
    //   "genre": "Soul",
    //   "youtube": "https://www.youtube.com/watch?v=u_3x2ynByZo"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image10",
    //   "title": "American Pie",
    //   "artist": "Don McLean",
    //   "genre": "Folk Rock",
    //   "youtube": "https://www.youtube.com/watch?v=uAsV5-Hv-7U"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image11",
    //   "title": "Stayin' Alive",
    //   "artist": "Bee Gees",
    //   "genre": "Disco",
    //   "youtube": "https://www.youtube.com/watch?v=I_izvAbhExY"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image12",
    //   "title": "Piano Man",
    //   "artist": "Billy Joel",
    //   "genre": "Soft Rock",
    //   "youtube": "https://www.youtube.com/watch?v=gxEPV4kolz0"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image13",
    //   "title": "Dream On",
    //   "artist": "Aerosmith",
    //   "genre": "Hard Rock",
    //   "youtube": "https://www.youtube.com/watch?v=sZfZ8uWaOFI"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image14",
    //   "title": "Killer Queen",
    //   "artist": "Queen",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=2ZBtPf7FOoM"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image15",
    //   "title": "Superstition",
    //   "artist": "Stevie Wonder",
    //   "genre": "Funk",
    //   "youtube": "https://www.youtube.com/watch?v=0CFuCYNx-1g"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image16",
    //   "title": "Another Brick in the Wall",
    //   "artist": "Pink Floyd",
    //   "genre": "Progressive Rock",
    //   "youtube": "https://www.youtube.com/watch?v=YR5ApYxkU-U"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image17",
    //   "title": "Bridge Over Troubled Water",
    //   "artist": "Simon & Garfunkel",
    //   "genre": "Folk Rock",
    //   "youtube": "https://www.youtube.com/watch?v=H_a46WJ1viA"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image18",
    //   "title": "Let It Be",
    //   "artist": "The Beatles",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=2xDzVZcqtYI"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image19",
    //   "title": "Born to Run",
    //   "artist": "Bruce Springsteen",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=IxuThNgl3YA"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image20",
    //   "title": "Go Your Own Way",
    //   "artist": "Fleetwood Mac",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=6ul-cZyuYq4"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image21",
    //   "title": "Hotel California",
    //   "artist": "Eagles",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=mBwD9WbY0Ag"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image22",
    //   "title": "We Are the Champions",
    //   "artist": "Queen",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=04854XqcfCY"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image23",
    //   "title": "Hotel California",
    //   "artist": "Eagles",
    //   "genre": "Rock",
    //   "youtube": "https://www.youtube.com/watch?v=4MJPv9pqCk8"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image24",
    //   "title": "Comfortably Numb",
    //   "artist": "Pink Floyd",
    //   "genre": "Progressive Rock",
    //   "youtube": "https://www.youtube.com/watch?v=_FrOQC-zEog"
    // },
    // {
    //   "year_id": "genxB[0]._id",
    //   "cover": "https://link.to.cover.image25",
    //   "title": "Heart of Glass",
    //   "artist": "Blondie",
    //   "genre": "New Wave",
    //   "youtube": "https://www.youtube.com/watch?v=WGU_4-5RaxU"
    // } 
]

await Music.insertMany(songs)
console.log('Created songs with years!')
}
const run = async () => {
await main()
db.close()
}

run()