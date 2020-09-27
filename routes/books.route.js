const controller = require('../controllers/books.controller');
const express = require('express');

const router = express.Router();

router.use(express.json());
router
    .route('/')
    .get(controller.getAllBooks)
    .post(controller.addOneBook);

router
    .route('/:bookId')
    .get(controller.getOneBook)
    .put(controller.updateOneBook)
    .delete(controller.deleteOneBook);

module.exports = router;

