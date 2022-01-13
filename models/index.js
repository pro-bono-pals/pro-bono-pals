const User = require('./User');
const Profile = require('./Profile');
const Task = require('./Task');
const Service = require('./Service');
const Education = require('./Education');

User.hasOne(Profile, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
    foreignKey: 'userId'
})

Profile.hasMany(Service, {
    foreignKey: 'serviceId',
    onDelete: 'CASCADE'
});

Service.belongsTo(Profile, {
    foreignKey: 'serviceId'
});

Task.hasOne(Service, {
    foreignKey: 'serviceId',
    onDelete: 'CASCADE'
});

Service.belongsTo(Task, {
    foreignKey: 'serviceId'
});

User.hasMany(Task, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Task.belongsTo(User, {
    foreignKey: 'userId'
});

Profile.hasOne(Education, {
    foreignKey: 'educationId',
    onDelete: 'CASCADE'
});


module.exports = { User, Profile, Service, Task, Education }





