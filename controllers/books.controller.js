const  Books  =  require("../models/books.model");
var  ObjectId  =  require('mongoose').Types.ObjectId;

const controller = {
    getAllBooks : (req, res, next) => {
        Books.find({})
            .then(
                books => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(books);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

    getOneBook: (req, res, next) => {
        Books.findById(req.params.bookId)
            .then(
                book => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(book);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

    addOneBook: (req, res, next) => {
        Books.create(req.body)
            .then(
                book => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(book);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

    deleteOneBook: (req, res, next) => {
        Books.findByIdAndRemove(req.params.bookId)
            .then(
                book => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(book);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

    updateOneBook: (req, res, next) => {
        Books.findByIdAndUpdate(req.params.bookId, {$set: req.body}, {new: true})
            .then(
                book => {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "application/json");
                    res.json(book);
                },
                err => next(err)
            )
            .catch(err => next(err));
    },

};

module.exports  =  controller;
