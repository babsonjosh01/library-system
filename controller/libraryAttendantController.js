const LibraryAttendant = require('../models/LibraryAttendant')

module.exports = {
    getLibraryAttendants : async (req,res) => {
        try{
            const libraryAttendant = await LibraryAttendant.find();
            res.json(libraryAttendant)
        }catch(error) {
            res.status(500).json({ error: error.message})
        }
    },
    createLibraryAttendant : async (req,res) => {
        try{
            const LibraryAttendant = await LibraryAttendant.create(req.body)
            res.status(201).json(LibraryAttendant)
        }catch(error){
            res.status(400).json({ error : error.message})
        }
    }
}