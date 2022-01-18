const router = require('express').Router();
const educationRoutes = require('./educationRoutes');
const profileRoutes = require('./profileRoutes');
const serviceRoutes = require('./serviceRoutes');
const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes');
// const homeRoutes = require('./homeRoute');
// const dashboardRoutes = require('./dashboardRoutes');
// const dashboardProviderRoutes = require('./dashboardProviderRoutes');


router.use('/education', educationRoutes);
router.use('/profile', profileRoutes);
router.use('/service', serviceRoutes);
router.use('/task', taskRoutes);
router.use('/user', userRoutes);
// router.use('/homepage',homeRoutes);
// 

module.exports = router;