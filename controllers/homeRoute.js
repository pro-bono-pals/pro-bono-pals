const router = require('express').Router();
// const { route } = require('.');
// const {User, Education, Profile, Service, Task} = require('../../models');
// isAuth, api route

router.get('/', async (req,res)=>{
    try{
        res.render('homepage');
    }catch(err){
        res.status(400).json(err);
    }
    
})

