const Author = require('../models/author')

module.exports = {
    getAuthors : async (req,res) => {
        try{
            const authors = await Author.find()
            res.json(authors)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    },
    getAuthor : async (req,res) => {
        try{
            const author = await Author.findById(req.params.id)

            if(!author){
                return res.status(404).json({message : "Author not found"})
            }
            res.json(author)
        }catch(error) {
            res.status(500).json({error : error.message})
        }
    },
    createAuthor : async (req,res) => {
        try {
            const author = await Author.create(req.body);
            res.status(201).json(author)
        }catch(error){
            res.status(400).json({error : error.message})
        }
    },
    updateAuthor : async (req,res) => {
        try{
            const author = await Author.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new : true}
            )
            if(!author){
                return res.status(404).json({message : "Author not found"})
            }
            res.json(author)
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    deleteAuthor : async (req,res) => {
         try {
    const author = await Author.findByIdAndDelete(req.params.id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    }



}