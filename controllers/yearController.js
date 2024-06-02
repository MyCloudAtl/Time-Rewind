const {Year} = require('../models')

const getYears = async (req, res) => {
    try {
        const years = await Year.find()
        res.json(years)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getYear = async(req, res) => {
    try {
        const {id} = req.params
        const years = await Year.findById(id)
        res.json(years)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getYears,
    getYear
}