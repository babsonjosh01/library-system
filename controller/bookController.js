const Book = require("../models/book")

module.exports = {


createBook : async (req, res) => {
  try {
    const { title, isbn, authors } = req.body;

    const book = await Book.create({
      title,
      isbn,
      authors
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
},




getBooks : async (req, res) => {
  try {
    const books = await Book.find()
      .populate("authors")
      .populate("borrowedBy")
      .populate("issuedBy");

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},




getBook : async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate("authors")
      .populate("borrowedBy")
      .populate("issuedBy");

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},



updateBook : async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
},




deleteBook : async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},


borrowBook : async (req,res) => {
    try{
        const {studentId, libraryAttendantId, returnDate} = req.body;
        const bookId = req.params.Id
        const book = await Book.findById(bookId)


        if(!book){
            return res.status(400).json({message: "book not found"})
        }
        if(book.status === "OUT"){
            return res.status(400).json({message: "book is already out"})
        }
        book.status = "OUT"
        book.borrowedBy = studentId;
        book.IssuedBy = libraryAttendantId;
        book.returnDate = returnDate;

        await book.save();

        return res.status(200).json({message: "book borrowed successfully"})

    }catch(error){
                 return res.status(500).json({message: "error occured"})
    }
},

returnBook : async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    
    if (book.status === "IN") {
      return res.status(400).json({ message: "Book is already available" });
    }

    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = null;

    await book.save();

    res.json({
      message: "Book returned successfully",
      book
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

}
