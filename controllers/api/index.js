const router = require('express').Router();
// const educationRoutes = require('./educationRoutes');
// const profileRoutes = require('./profileRoutes');
// const serviceRoutes = require('./serviceRoutes');
// const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes');
// const homepageRoutes = require('./homepageRoutes');
// const dashboardRoutes = require('./dashboardRoutes');
// const dashboardProviderRoutes = require('./dashboardProviderRoutes');


// router.use('/education', educationRoutes);
// router.use('/profile', profileRoutes);
// router.use('/service', serviceRoutes);
// router.use('/task', taskRoutes);
router.use('/user', userRoutes);
// 

module.exports = router;