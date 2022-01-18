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

    res.render('login');
  });

module.exports = router;