const {Music} = require('../models')

const getSongs = async (req, res) => {
    try {
        const songs = await Music.find()
        res.json(songs)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getSong = async(req, res) => {
    try {
        const {id} = req.params
        const songs = await Music.findById(id)
        res.json(songs)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getSongs,
    getSong
}