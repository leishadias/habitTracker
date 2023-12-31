const express=require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users_controller');

router.get('/sign-up', userController.signup);
router.get('/sign-in', userController.signin);
router.get('/sign-out', userController.destroySession);

router.post('/create', userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
    ), userController.createSession);

module.exports = router;