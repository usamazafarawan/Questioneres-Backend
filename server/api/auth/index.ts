import express from 'express';
const router = express.Router();
const controller = require('./auth.controller');

router.post('/', controller.login);

export  =  router;