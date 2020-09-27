const controller = require('../controllers/users.controller');
const express = require('express');

const router = express.Router();

router.use(express.json());

router
    .route('/')
    .post(controller.createUser);

router.
    route('/all')
    .get(controller.getAllUsers);

router
    .route('/login')
    .post(controller.loginUser);

router
    .route('/:email')
    .get(controller.getUserExist);

router
    .route('/:userId')
    .put(controller.updateUser);

module.exports = router;
