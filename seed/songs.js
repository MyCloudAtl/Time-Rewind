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
    const genx = await Year.find({ year:'Generation X'})
    const mill = await Year.find({ year:'Millennial'})
    const genz = await Year.find({ year:'Generation Z'})

  const songs = [
    {
      year_id: genx[0]._id,
      cover: "https://lh6.googleusercontent.com/proxy/ni8hDTiCbBUs_nCokiuIhlCQpCrEbTT9kugirULgqgnOFPScAH8T7owH9pWukG29FZzSoTnjuLgjCw0EWu8h7-xUwadwYb16QtZjO4MA3a_btD6sR4fWhAu_dd3Eh1DUbuEx9jh9Z1gRAfavXkAq8_IZxfQSQCiLn-j_",
      title: "Hey Jude (1968)",
      artist: "The Beatles",
      genre: "Rock",
      youtube: "https://youtu.be/A_MjCqQoLLA",
    },
    {
      year_id: genx[0]._id,
      cover: "https://m.media-amazon.com/images/I/51cCvYmITVL._AC_UF894,1000_QL80_.jpg",
      title: "Bohemian Rhapsody (1975)",
      artist: "Queen",
      genre: "Rock",
      youtube: "https://youtu.be/fJ9rUzIMcZQ",
    },
    {
      year_id: genx[0]._id,
      cover: "https://i1.sndcdn.com/artworks-000127380203-93pa4d-t1080x1080.jpg",
      title: "Stairway to Heaven (1971)",
      artist: "Led Zeppelin",
      genre: "Rock",
      youtube: "https://youtu.be/ovFSEHH_yJw"
    },
    {
      year_id: genx[0]._id,
      cover: "https://archive.org/download/JohnLennonImagine1971/John%20Lennon%20-%20Imagine%20-%201971.jpg",
      title: "Imagine (1971)",
      artist: "John Lennon",
      genre: "Rock",
      youtube: "https://youtu.be/ugrAo8wEPiI"
    },
    {
      year_id: genx[0]._id,
      
      cover: "https://i.discogs.com/l-RgrkR3_PqJmaRZvwJlvhnu8cV_3ekapSTupXBHUuM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0NDY0/MzYtMTQ2MTc4MTAz/NC0yMDE2LmpwZWc.jpeg",
      title: "Hotel California (1976)",
      artist: "Eagles",
      genre: "Rock",
      youtube: "https://youtu.be/09839DpTctU"
    },
    {
      year_id: genx[0]._id,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kFEkznAJHT8310XmS_-YFd8vVVnq6-wlPQ&s",
      title: "Boogie Wonderland (1979)",
      artist: "Earth, Wind & Fire",
      genre: "Disco",
      youtube: "https://youtu.be/god7hAPv8f0"
    },
    {
      year_id: genx[0]._id,
      cover: "https://i.scdn.co/image/ab67616d0000b273f3e3f7c903e662a337a23ec6",
      title: "Sweet Home Alabama (1974)",
      artist: "Lynyrd Skynyrd",
      genre: "Southern Rock",
      youtube: "https://youtu.be/DA0z9EcefOU"
    },
    {
      year_id: genx[0]._id,
      cover: "https://i.discogs.com/K-IUKmmQ6nC1SyXzdkuu5BUG19kBKP5RyUZLifWjZBg/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MzQ4/MzYtMTMwMzE4NTAz/Ni5qcGVn.jpeg",
      title: "We Will Rock You (1977)",
      artist: "Queen",
      genre: "Rock",
      youtube: "https://youtu.be/-tJYN-eG1zk"
    },
    {
      year_id: genx[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/0/0e/Letsstaytogether_cover.jpg",
      title: "Let's Stay Together (1971)",
      artist: "Al Green",
      genre: "Soul",
      youtube: "https://youtu.be/uSu6tcbMOu0"
    },
    {
      year_id: genx[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b9/American_Pie_by_Don_McLean.png",
      title: "American Pie (1971)",
      artist: "Don McLean",
      genre: "Folk Rock",
      youtube: "https://youtu.be/Z4q_MZ7CRvI"
    },
    {
      year_id: genx[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BZjRiMjdlNjItYmQxOC00ZDI4LWExMjctOWRjMTA1NWU2MjMwXkEyXkFqcGdeQXVyNzA5MzkyOTM@._V1_.jpg",
      title: "Stayin' Alive (1977)",
      artist: "Bee Gees",
      genre: "Disco",
      youtube: "https://youtu.be/I_izvAbhExY"
    },
    {
      year_id: genx[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/5/58/Billy_Joel_-_Piano_Man.jpg",
      title: "Piano Man (1973)",
      artist: "Billy Joel",
      genre: "Soft Rock",
      youtube: "https://youtu.be/gxEPV4kolz0"
    },
    {
      year_id: genx[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/AerosmithAlternative.jpg/220px-AerosmithAlternative.jpg",
      title: "Dream On (1973)",
      artist: "Aerosmith",
      genre: "Hard Rock",
      youtube: "https://youtu.be/iJDtukGW79Y"
    },
    {
      year_id: genx[0]._id,
      cover: "https://i.discogs.com/KLjOrC5mjn5yUQ5FLmAhTIeUC67wS7wnlFwJja4xdWM/rs:fit/g:sm/q:90/h:527/w:535/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1MDUx/My0xNDMxNDU0MTk5/LTE0MTAuanBlZw.jpeg",
      title: "Killer Queen (1974)",
      artist: "Queen",
      genre: "Rock",
      youtube: "https://youtu.be/2ZBtPf7FOoM"
    },
    {
      year_id: genx[0]._id,
      cover: "https://www.sessiondays.com/wp-content/uploads/1972_Stevie_Wonder_Superstition.jpg",
      title: "Superstition (1972)",
      artist: "Stevie Wonder",
      genre: "Funk",
      youtube: "https://youtu.be/GySzVohtHLw"
    },
    {
      year_id: genx[0]._id,
      cover: "https://static1.squarespace.com/static/536ea5cbe4b074eafa4feea0/58a651f2d482e9a6556cd666/5c926b336e9a7f21d3d6e29b/1693323532352/Another+Brick+In+The+Wall+MR.jpg?format=1500w",
      title: "Another Brick in the Wall (1979)",
      artist: "Pink Floyd",
      genre: "Progressive Rock",
      youtube: "https://youtu.be/i9-CrzyEiiY"
    },
    {
      year_id: genx[0]._id,
      cover: "https://americansongwriter.com/wp-content/uploads/2020/03/a-bridge.jpg?fit=1500%2C1500",
      title: "Bridge Over Troubled Water (1970)",
      artist: "Simon & Garfunkel",
      genre: "Folk Rock",
      youtube: "https://youtu.be/4G-YQA_bsOU"
    },
    {
      year_id: genx[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BOTc0ZjFhMzEtMTgwNy00MWI1LWFmNDAtNDViZGY1MWQxYmRlXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
      title: "Let It Be (1970)",
      artist: "The Beatles",
      genre: "Rock",
      youtube: "https://youtu.be/CGj85pVzRJs"
    },
    {
      year_id: genx[0]._id,
      cover: "https://m.media-amazon.com/images/I/8127ICDt45L._UF1000,1000_QL80_.jpg",
      title: "Born to Run (1975)",
      artist: "Bruce Springsteen",
      genre: "Rock",
      youtube: "https://youtu.be/Wu4_zVxmufY"
    },
    {
      year_id: genx[0]._id,
      cover: "https://www.rhino.com/sites/g/files/g2000012691/files/styles/article_image/public/2021-03/GO%20YOUR%20OWN%20WAY.jpg?itok=aui_D9XM",
      title: "Go Your Own Way (1977)",
      artist: "Fleetwood Mac",
      genre: "Rock",
      youtube: "https://youtu.be/oiosqtFLBBA"
    },
    {
      year_id: genx[0]._id,
      cover: "https://pics.filmaffinity.com/queen_we_are_the_champions-636365749-mmed.jpg",
      title: "We Are the Champions (1977)",
      artist: "Queen",
      genre: "Rock",
      youtube: "https://youtu.be/epXWfVU34dI"
    },
    {
      year_id: genx[0]._id,
      cover: "https://i.discogs.com/m039fLAxaKeq1HGw8JXMwVhX0v76o2J-edzxDvUaYBk/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzNzQx/MDAtMTQyMjMwNDQ3/NC0zMzAyLmpwZWc.jpeg",
      title: "Comfortably Numb (1979)",
      artist: "Pink Floyd",
      genre: "Progressive Rock",
      youtube: "https://youtu.be/zOyk5qnamjc"
    },
    {
      year_id: genx[0]._id,
      cover: "https://i.discogs.com/uuiM8-lVZMm_L0kL6ZQmn1ifsJb3y-OTW7poWGo4Lq4/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0OTE5/MTQtMTQ3MjkxNzY1/NC00MDA5LmpwZWc.jpeg",
      title: "Heart of Glass (1978)",
      artist: "Blondie",
      genre: "New Wave",
      youtube: "https://youtu.be/WGU_4-5RaxU"
    },
    {
      year_id: genx[0]._id,
      cover: "https://www.udiscovermusic.com/wp-content/uploads/2016/10/The-Beach-Boys-Good-Vibrations-820x820.jpg",
      title: "Good Vibrations (1966)",
      artist: "The Beach Boys",
      genre: "Pop",
      youtube: "https://youtu.be/apBWI6xrbLY"
    },
    {
      year_id: genx[0]._id,
      cover: "https://m.media-amazon.com/images/I/71J5QBEjvgL._UF1000,1000_QL80_.jpg",
      title: "Smoke on the Water (1972)",
      artist: "Deep Purple",
      genre: "Hard Rock",
      youtube: "https://youtu.be/Q2FzZSBD5LE"
    },
    {
      year_id: mill[0]._id,
      cover: "https://images.rapgenius.com/9dee23c4d3d54e0abd4d4521cb001f9b.993x1000x1.jpg",
      title: "Billie Jean (1981)",
      artist: "Michael Jackson",
      genre: "Pop",
      youtube: "https://youtu.be/Zi_XLOBDo_Y"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/6/66/Don%27t_Stop_Believin%27.jpg",
      title: "Don't Stop Believin' (1981)",
      artist: "Journey",
      genre: "Rock",
      youtube: "https://youtu.be/x3idGV-7kSQ"
    },
    {
      year_id: mill[0]._id,
      cover: "https://pics.filmaffinity.com/The_Police_Every_Breath_You_Take_Music_Video-333673318-large.jpg",
      title: "Every Breath You Take (1983)",
      artist: "The Police",
      genre: "Rock",
      youtube: "https://youtu.be/OMOGaugKpzs"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/1/17/LikeAVirgin1984.png",
      title: "Like a Virgin (1984)",
      artist: "Madonna",
      genre: "Pop",
      youtube: "https://youtu.be/s__rX_WL100"
    },
    {
      year_id: mill[0]._id,
      cover: "https://i.discogs.com/CQmGsjhUhYf4q6K2fIxVHrvc2IgLzxrqZkoCidXs95E/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NDE1/My0xNTMyNzAyNDM0/LTg0NDIuanBlZw.jpeg",
      title: "Take on Me (1985)",
      artist: "a-ha",
      genre: "Synthpop",
      youtube: "https://youtu.be/djV11Xbc914"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BMjE0ZTVlZTktZjY3My00NDhiLThjZjMtMDlmOGVlNjY0ZjAzXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_FMjpg_UX1000_.jpg",
      title: "Livin' on a Prayer (1986)",
      artist: "Bon Jovi",
      genre: "Rock",
      youtube: "https://youtu.be/lDK9QqIzhwk"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/c/c1/With_or_Without_You_vinyl_single.jpg",
      title: "With or Without You (1987)",
      artist: "U2",
      genre: "Rock",
      youtube: "https://youtu.be/ujNeHIo7oTE"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BMTU0OGY4NTgtZDU5Yy00NTAxLWI5MGYtZDUyNGI2YTMzNDVkXkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_FMjpg_UX1000_.jpg",
      title: "Sweet Child o' Mine (1988)",
      artist: "Guns N' Roses",
      genre: "Rock",
      youtube: "https://youtu.be/1w7OgIMMRc4"
    },
    {
      year_id: mill[0]._id,
      cover: "https://i.discogs.com/h1cIfQZG__zjNAluNs4lx67KwNkQ6jPSgMJWIRNqhTU/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2MTU0/NC0xNTgzODQzODI1/LTE2NTQuanBlZw.jpeg",
      title: "Like a Prayer (1989)",
      artist: "Madonna",
      genre: "Pop",
      youtube: "https://youtu.be/79fzeNUqQbQ"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BZjEyNzk2ZDgtOWJkNC00OGMyLTgzMDQtNmMwY2E1MzE5Mjk4XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_.jpg",
      title: "Ice Ice Baby (1990)",
      artist: "Vanilla Ice",
      genre: "Hip hop",
      youtube: "https://youtu.be/rog8ou-ZepE"
    },
    {
      year_id: mill[0]._id,
      cover: "https://i.discogs.com/Ai-DX_XNXA1iwGHQZ4jAnz_Y0N7cbMT8DFoB42CXphc/rs:fit/g:sm/q:90/h:600/w:590/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4ODI4/MC0xNjc4Nzc1MjI2/LTEwNTYuanBlZw.jpeg",
      title: "Smells Like Teen Spirit (1991)",
      artist: "Nirvana",
      genre: "Grunge",
      youtube: "https://youtu.be/hTWKbfoikeg"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BMjQ4NTQxZTItZjMwNi00NmQyLWE3NjEtNTE4ZWUzZmE4Y2I5XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_.jpg",
      title: "November Rain (1992)",
      artist: "Guns N' Roses",
      genre: "Rock",
      youtube: "https://youtu.be/8SbUC-UaAxE"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BYzM4NDQ2N2QtODVhOS00MmRjLWE2YTUtMzBlZTNmNGQ1NmZkXkEyXkFqcGdeQXVyNTk1NTMyNzM@._V1_.jpg",
      title: "Creep (1993)",
      artist: "Radiohead",
      genre: "Alternative Rock",
      youtube: "https://youtu.be/XFkzRNyygfk"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BZWQ1ODZjM2YtYmU2Yy00NTNjLTg3MzYtZmU1MzgyOWYyYzg5XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_FMjpg_UX1000_.jpg",
      title: "Zombie (1994)",
      artist: "The Cranberries",
      genre: "Alternative Rock",
      youtube: "https://youtu.be/6Ejga4kJUts"
    },
    {
      year_id: mill[0]._id,
      cover: "https://i.discogs.com/Ylo4NxSf5Rv6H1spy3X8OkIF9_tgAC0kCh7W3jwg54M/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3Njk1/NzUtMTUyNjYzNzMz/NS03ODk0LmpwZWc.jpeg",
      title: "Gangsta's Paradise (1995)",
      artist: "Coolio ft. L.V.",
      genre: "Hip hop",
      youtube: "https://youtu.be/fPO76Jlnz6c"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Wonderwall_cover.jpg/220px-Wonderwall_cover.jpg",
      title: "Wonderwall (1996)",
      artist: "Oasis",
      genre: "Britpop",
      youtube: "https://youtu.be/bx1Bh8ZvH84"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/I/91DIvHJgsUL._UF1000,1000_QL80_.jpg",
      title: "Wannabe (1996)",
      artist: "Spice Girls",
      genre: "Pop",
      youtube: "https://youtu.be/gJLIiF15wjQ"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/2/22/Survivortiger.jpg",
      title: "Eye of the Tiger (1982)",
      artist: "Survivor",
      genre: "Rock",
      youtube: "https://youtu.be/btPJPFnesV4"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BOGMzZWNhNjktZmU5MC00ZDdlLTg2ZDItMTQ4NmExNjJiNDM2XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
      title: "Under Pressure (1981)",
      artist: "Queen & David Bowie",
      genre: "Rock",
      youtube: "https://youtu.be/a01QQZyl-_I"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Wearetheworldsingle.jpg",
      title: "We Are the World (1985)",
      artist: "USA for Africa",
      genre: "Pop",
      youtube: "https://youtu.be/9AjkUyX0rVw"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/0/00/The_Bangles_Walk_Like_An_Egyptian.jpg",
      title: "Walk Like an Egyptian (1986)",
      artist: "The Bangles",
      genre: "Pop Rock",
      youtube: "https://youtu.be/Cv6tuzHUuuk"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/I_Will_Always_Love_You_by_Whitney_Houston_US_CD_single.jpg/220px-I_Will_Always_Love_You_by_Whitney_Houston_US_CD_single.jpg",
      title: "I Will Always Love You (1993)",
      artist: "Whitney Houston",
      genre: "R&B",
      youtube: "https://youtu.be/3JWTaaS7LdU"
    },
    {
      year_id: mill[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BZWQzZmYzMTgtMzQ4Yi00NjcxLWE4MWEtYzgwN2RkYWM4NjMyXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_.jpg",
      title: "Killing Me Softly (1996)",
      artist: "Fugees",
      genre: "R&B/Hip Hop",
      youtube: "https://youtu.be/oKOtzIo-uYw"
    },
    {
      year_id: mill[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/8/84/Merry_Christmas_Mariah_Carey.png",
      title: "All I Want for Christmas Is You (1994)",
      artist: "Mariah Carey",
      genre: "Holiday/Pop",
      youtube: "https://youtu.be/yXQViqx6GMY"
    },
    {
      year_id: mill[0]._id,
      cover: "https://i.discogs.com/IVcG9AUeaJ3O5IAzMidZbpJxBTsQlsiUbdO5QnKIi7U/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0Mjkx/NS0xMjM4OTgzMTY4/LmpwZWc.jpeg",
      title: "Wake Me Up Before You Go-Go (1984)",
      artist: "Wham!",
      genre: "Pop",
      youtube: "https://youtu.be/pIgZ7gMze7A"    
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/0/04/The_Verve_-_Bitter_Sweet_Symphony_CD1.jpg",
      title: "Bitter Sweet Symphony (1997)",
      artist: "The Verve",
      genre: "Alternative Rock",
      youtube: "https://youtu.be/1lyu1KKwC74"
    },
    {
      year_id: genz[0]._id,
      cover: "https://www.sessiondays.com/wp-content/uploads/1998_Celine_Dion_My_Heart_Will_Go_On.jpg",
      title: "My Heart Will Go On (1998)",
      artist: "Celine Dion",
      genre: "Pop",
      youtube: "https://youtu.be/A3QAqZQYLIQ"
    },
    {
      year_id: genz[0]._id,
      cover: "https://i.ebayimg.com/images/g/K4YAAOSwhcJWIBcL/s-l600.jpg",
      title: "Smooth (1999)",
      artist: "Santana ft. Rob Thomas",
      genre: "Rock",
      youtube: "https://youtu.be/6Whgn_iE5uc"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/2/24/Britney_Spears_-_Oops%21..._I_Did_It_Again.png",
      title: "Oops!... I Did It Again (2000)",
      artist: "Britney Spears",
      genre: "Pop",
      youtube: "https://youtu.be/CduA0TULnow"
    },
    {
      year_id: genz[0]._id,
      cover: "https://i.discogs.com/UQn0f1F-ruzNzu0dhiAsgI7NPq4OOk0YtVH3UZHStpI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNjM0/OC0xMTg0NTIzMzc5/LmpwZWc.jpeg",
      title: "Ms. Jackson (2001)",
      artist: "Outkast",
      genre: "Hip Hop",
      youtube: "https://youtu.be/MYxAiK6VnXw"
    },
    {
      year_id: genz[0]._id,
      cover: "https://m.media-amazon.com/images/I/51dXJfse9zL._UF1000,1000_QL80_.jpg",
      title: "A Thousand Miles (2002)",
      artist: "Vanessa Carlton",
      genre: "Pop",
      youtube: "https://youtu.be/Cwkej79U3ek"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Beyonce_-_Crazy_in_Love_%28single%29.png",
      title: "Crazy in Love (2003)",
      artist: "Beyoncé ft. Jay-Z",
      genre: "R&B",
      youtube: "https://youtu.be/ViwtNLUqkMY"
    },
    {
      year_id: genz[0]._id,
      cover: "https://m.media-amazon.com/images/I/41pAnr0HWOL._UF1000,1000_QL80_.jpg",
      title: "Yeah! (2004)",
      artist: "Usher ft. Lil Jon, Ludacris",
      genre: "R&B",
      youtube: "https://youtu.be/GxBSyx85Kp8"
    },
    {
      year_id: genz[0]._id,
      cover: "https://i.discogs.com/_2XTFe_ELlS0SV5MGoKobe2QxNLaEIINdqYVlB0nR5c/rs:fit/g:sm/q:90/h:541/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MjA2/OTEtMTY0MDcyODE4/Mi03MzkwLmpwZWc.jpeg",
      title: "Gold Digger (2005)",
      artist: "Kanye West ft. Jamie Foxx",
      genre: "Hip Hop",
      youtube: "https://youtu.be/6vwNcNOTVzY"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/GnarlsBarkleyCrazyCover.JPG/220px-GnarlsBarkleyCrazyCover.JPG",
      title: "Crazy (2006)",
      artist: "Gnarls Barkley",
      genre: "Alternative/Pop",
      youtube: "https://youtu.be/-N4jf6rtyuw"
    },
    {
      year_id: genz[0]._id,
      cover: "https://i.discogs.com/Mew6K9cKMCDR99toatGz7nRBcaKLl0vZK5_1MTBfD74/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk5NDE4/NC0xMjAxNzE5OTUx/LmpwZWc.jpeg",
      title: "Umbrella (2007)",
      artist: "Rihanna ft. Jay-Z",
      genre: "R&B/Pop",
      youtube: "https://youtu.be/CvBfHwUxHIk"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Single_Ladies_%28Put_a_Ring_on_It%29_cover.png/220px-Single_Ladies_%28Put_a_Ring_on_It%29_cover.png",
      title: "Single Ladies (Put a Ring on It) (2008)",
      artist: "Beyoncé",
      genre: "R&B/Pop",
      youtube: "https://youtu.be/4m1EFMoRFvY"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/3/3a/Poker_Face_by_Lady_Gaga_alternative_cover.png",
      title: "Poker Face (2009)",
      artist: "Lady Gaga",
      genre: "Pop",
      youtube: "https://youtu.be/bESGLojNYSo"
    },
    {
      year_id: genz[0]._id,
      cover: "https://m.media-amazon.com/images/M/MV5BOTRlYTBjMDMtY2VkMi00ZTZmLTk1MzQtZjg1M2I0NjQ0ZTFkXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_FMjpg_UX1000_.jpg",
      title: "Rolling in the Deep (2010)",
      artist: "Adele",
      genre: "Soul/Pop",
      youtube: "https://youtu.be/rYEDA3JcQqw"
    },
    {
      year_id: genz[0]._id,
      cover: "https://pics.filmaffinity.com/Gotye_Kimbra_Somebody_That_I_Used_to_Know_Music_Video-679418934-large.jpg",
      title: "Somebody That I Used to Know (2011)",
      artist: "Gotye ft. Kimbra",
      genre: "Indie Pop",
      youtube: "https://youtu.be/8UVNT4wvIGY"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/a/ad/Carly_Rae_Jepsen_-_Call_Me_Maybe.png",
      title: "Call Me Maybe (2012)",
      artist: "Carly Rae Jepsen",
      genre: "Pop",
      youtube: "https://youtu.be/fWNaR-rxAic"
    },
    {
      year_id: genz[0]._id,
      cover: "https://m.media-amazon.com/images/I/41YZCTkUfFL._UF1000,1000_QL80_.jpg",
      title: "Tubthumping (1997)",
      artist: "Chumbawamba",
      genre: "Alternative Rock",
      youtube: "https://youtu.be/2H5uWRjFsGc"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/e/ed/Livin%27_la_vida_loca_cover.png",
      title: "Livin' la Vida Loca (1999)",
      artist: "Ricky Martin",
      genre: "Latin Pop",
      youtube: "https://youtu.be/p47fEXGabaY"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/2/27/Music_Madonna.png",
      title: "Music (2000)",
      artist: "Madonna",
      genre: "Pop",
      youtube: "https://youtu.be/Sdz2oW0NMFk"
    },
    {
      year_id: genz[0]._id,
      cover: "https://i.discogs.com/bzCSltzocLmQTZBj1JMxH9mkTKtx4sM3q5_WbOrGW_s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NjYz/MS0xNTU0NDE3NjY3/LTQzOTEuanBlZw.jpeg",
      title: "Stan (2001)",
      artist: "Eminem ft. Dido",
      genre: "Hip Hop",
      youtube: "https://youtu.be/gOMhN-hfMtY"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/7/76/Complicated_cover.png",
      title: "Complicated (2002)",
      artist: "Avril Lavigne",
      genre: "Pop Rock",
      youtube: "https://youtu.be/5NPBIwQyPWE"
    },
    {
      year_id: genz[0]._id,
      cover: "https://i.discogs.com/z3kqMMx-WHu2HmDEp6uncsVuymk4M9Qd9n0EqD2WpCg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxNTg3/Ni0xMjM0Mzg4NTQ2/LmpwZWc.jpeg",
      title: "Clocks (2003)",
      artist: "Coldplay",
      genre: "Alternative Rock",
      youtube: "https://youtu.be/d020hcWA_Wg"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/I_Believe_in_a_Thing_Called_Love_single_cover.jpg/220px-I_Believe_in_a_Thing_Called_Love_single_cover.jpg",
      title: "I Believe in a Thing Called Love (2004)",
      artist: "The Darkness",
      genre: "Rock",
      youtube: "https://youtu.be/tKjZuykKY1I"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Hollaback_Girl_Artwork.png/220px-Hollaback_Girl_Artwork.png",
      title: "Hollaback Girl (2005)",
      artist: "Gwen Stefani",
      genre: "Pop",
      youtube: "https://youtu.be/Kgjkth6BRRY"
    },
    {
      year_id: genz[0]._id,
      cover: "https://upload.wikimedia.org/wikipedia/en/4/42/Irreplaceable.png",
      title: "Irreplaceable (2006)",
      artist: "Beyoncé",
      genre: "R&B",
      youtube: "https://youtu.be/2EwViQxSJJQ"
    }
]

await Music.insertMany(songs)
console.log('Created songs with years!')
}
const run = async () => {
await main()
db.close()
}

run()