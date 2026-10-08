const express = require("express");

const app = express();

app.use(express.json());

// Sample book data
let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 399
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        price: 499
    }
];


// ==========================
// GET - READ
// ==========================

app.get("/books", (req, res) => {
    res.json(books);
});


// ==========================
// POST - CREATE
// ==========================

app.post("/books", (req, res) => {

    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});


// ==========================
// PUT - UPDATE
// ==========================

app.put("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).send("Book not found");
    }

    book.title = req.body.title;
    book.author = req.body.author;
    book.price = req.body.price;

    res.json({
        message: "Book updated successfully",
        book: book
    });
});


// ==========================
// DELETE - DELETE
// ==========================

app.delete("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).send("Book not found");
    }

    const deletedBook = books.splice(index, 1);

    res.json({
        message: "Book deleted successfully",
        book: deletedBook[0]
    });
});


// ==========================
// START SERVER
// ==========================

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});