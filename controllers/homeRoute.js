const router = require('express').Router();
const path = require('path');
const {route } = require('./api');
const isAuth = require('../utils/auth')
const {User, Education, Profile, Service, Task} = require('../models'); 
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

router.get('/task', isAuth, async (req, res) => {
    if (req.session.logged_in) {
        res.render('task', {
            logged_in: true,
        });
    } else {
        res.redirect('/task');
    };
})

router.get('/dashboard',isAuth,async (req,res) => {
    // res.render('receiver')
    // res.render('provider')
    const userData = await User.findByPk(req.session.userId, {
        attributes: { exclude: ['password'] },
        include: [
            { 
                model:Profile,
                include:[{model:Education},{model:Service}]

            }, 
            {
               model:Task 
            },
        ]
        // {model:Education}, {model:Service},{model:Task}],
    }); 

    const user = userData.get({ plain: true });
    const role = user.isProvider
    
    console.log("HELLOOOOOOOOOO",role)

    if(role === true){
        res.render('provider', {
            ...user,
            logged_in: true
          });
    }else{
        res.render('receiver', {
            ...user,
            logged_in: true
          });
    }

});

module.exports = router;