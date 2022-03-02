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
        res.redirect('/providersignup');
        return;
    }
    res.render('signup');

});

router.get('/profilesignup',isAuth, async (req,res)=>{
    // if (req.session.logged_in) {
    //     res.redirect('/dashboard');
    //     return;
    // }
    const userData = await User.findByPk(req.session.user_id,{
        attributes: { exclude: ['password'] },
    })
    const user = userData.get({ plain: true });
    res.render('profilesignup',{
        user,
        logged_in: true,
    });
})

router.get('/task', isAuth, async (req, res) => {
    const userData = await User.findByPk(req.session.user_id, {
        attributes:{exclude:['password']}
    })
    const user = userData.get({ plain: true });

    res.render('task',{
        user,
        logged_in: true
    });
})

router.get('/dashboard',isAuth,async (req,res) => {
    // res.render('receiver')
    // res.render('provider')
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },

    }); 

    const user = userData.get({ plain: true });
    const role = user.isProvider

    if(role === true){
        res.redirect('/provider')
    }else{
        res.redirect('/receiver')
    }

});

router.get('/provider', isAuth, async(req,res)=>{
    // in the provider dashboard we want all the task to be posted 
    // on their board so that the provider can select tasks posted by the receiver
    const userData =await User.findByPk(req.session.user_id)
    const users = userData.get({plain:true})
    const provider = req.session.user_id

    const taskData =await Task.findAll({
        where:{isActive:false},
        include:[{model:User}]
    })
    const tasks = taskData.map((task)=>task.get({plain: true}));

    const activetData = await Task.findAll({
        where:{isActive:true, isCompleted:false, provider_id:provider},
        include:[{model:User}]
    })
    const acts= activetData.map((act)=>act.get({plain:true}));

    res.render('provider',{
        users,
        tasks,
        acts,
        logged_in: true,
      });
})

router.get('/receiver', isAuth, async(req,res)=>{
    // on the reciver dashboard we want ONLY the tasks posted by the reciver to be shown on the dashboard
    const userData =await User.findByPk(req.session.user_id)
    const users = userData.get({plain:true})
    const receiver = users.id

    const taskData =await Task.findAll({
        where:{user_id:receiver,isActive:false},
        include:[{model:User}]
    })
    const tasks = taskData.map((task)=>task.get({plain: true}));
    
    const activetData = await Task.findAll({
        where:{isActive:true,isCompleted:false, user_id:receiver},
        include:[{model:User}]
    })
    const acts= activetData.map((act)=>act.get({plain:true}));

    res.render('receiver',{
        users,
        tasks,
        acts,
        logged_in:true,
    });
})
module.exports = router;