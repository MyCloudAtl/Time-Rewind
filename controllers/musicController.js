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

const createMusic = async (req, res) => {
    try {
        const music = await new Music(req.body)
        await music.save()
        return res.status(201).json({
            music,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateMusic = async (req, res) => {
    try {
        let { id } = req.params;
        let music = await Music.findByIdAndUpdate(id, req.body, { new: true })
        if (music) {
            return res.status(200).json(music)
        }
        throw new Error("Music not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteMusic = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Music.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Music deleted");
        }
        throw new Error("Music not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createMusic,
    getSongs,
    getSong,
    updateMusic,
    deleteMusic,
}