const db = require('../db')
const { Year } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Year.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
};

const main = async () => {
    resetCollections()
  const years = [
    {
        year: 'Generation X (Begin 1965-1970)',
    },
    {
        year: 'Generation X (Mid 1970-1975)',
    },
    {
        year: 'Generation X (End 1975-1980)',
    },
    {
        year: 'Millennial (Begin 1981-1986)',
    },
    {
        year: 'Millennial (Mid 1986-1991)',
    },
    {
        year: 'Millennial (End 1991-1996)',
    },
    {
        year: 'Generation Z (Begin 1997-2002)',
    },
    {
        year: 'Generation Z (Mid 2002-2007)',
    },
    {
        year: 'Generation Z (End 2007-2012)',
    },
]
 
await Year.insertMany(years)
console.log('Created years!')
}

const run = async () => {
await main()
db.close()
}

run()