const sequelize = require('../config/connection');
const { User, Profile, Education, Service } =  require('../models')

const userData = require('./userData.json');
const educationData = require('./educationData.json');
const serviceData = require('./serviceData.json');
const profileData = require('./profileData.json');


const seedDatabase = async () => {
    await sequelize.sync ({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })
    const educations = await Education.bulkCreate(educationData)
    const services = await Service.bulkCreate(serviceData)
    const profiles = await Profile.bulkCreate(profileData)


      process.exit(0);
};

seedDatabase();