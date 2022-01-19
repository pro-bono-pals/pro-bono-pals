const router = require('express').Router();
const path = require('path');
const {route } = require('./api');
const isAuth = require('../utils/auth')
// const {User, Education, Profile, Service, Task} = require('../../models');
// isAuth, api route

router.get('/', (req,res)=>{
    try{
        res.render('homepage');
    }catch(err){
        res.status(400).json(err);
    }
    
})

router.get('/login', (req, res) => {
    // res.render('login');
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});
router.get('/signup', (req, res) => {
    // res.render('signup');
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');

});

router.get('/dashboard', (req,res) => {
    res.render('provider');
});

module.exports = router;