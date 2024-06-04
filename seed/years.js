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
        year: 'Generation X',
    },
    {
        year: 'Millennial',
    },
    {
        year: 'Generation Z',
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