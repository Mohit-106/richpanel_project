const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true,
}), (req, res) => {
});

router.get('/disconnect', (req, res) => {
    res.redirect('/dashboard');
});

router.post('/webhook', (req, res) => {
});

module.exports = router;
