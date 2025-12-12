const express = require('express');
const controller = require('../controller/deafult_controller');
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

router.get('/', authenticate, controller.index);

router.get('/signup', controller.signup_get);

router.post('/signup', controller.signup_post);

router.get('/login', controller.login_get);

router.post('/login', controller.login_post);

router.get('/logout', controller.logout);

module.exports = router;
