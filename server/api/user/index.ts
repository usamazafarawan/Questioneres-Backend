import express from 'express';
const router = express.Router();
const controller = require('./user.controller');

router.post('/', controller.addUser);


export = router;
