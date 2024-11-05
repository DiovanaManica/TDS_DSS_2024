const Book = require('../models/bookModel');

// Listar todos os livros
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar livros' });
    }
};

// Adicionar um novo livro
exports.createBook = async (req, res) => {
    const { title, author, year, pages } = req.body;

    if (!title || !author || !year || !pages) {
        return res.status(400).json({ error: 'Título, autor, ano e páginas são obrigatórios' });
    }

    try {
        const book = await Book.create({ title, author, year, pages });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o livro' });
    }
};

// Atualizar um livro
exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, year, pages } = req.body;

    try {
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ error: 'Livro não encontrado' });

        book.title = title || book.title;
        book.author = author || book.author;
        book.year = year || book.year;
        book.pages = pages || book.pages;

        await book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o livro' });
    }
};

// Excluir um livro
exports.deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ error: 'Livro não encontrado' });

        await book.destroy();
        res.json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o livro' });
    }
};
