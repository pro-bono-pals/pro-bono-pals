const User = require('./User');
const Profile = require('./Profile');
const Task = require('./Task');
const Service = require('./Service');
const Education = require('./Education');

User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
})

Profile.hasMany(Service, {
    foreignKey: 'service_id',
    onDelete: 'CASCADE'
});

Service.belongsTo(Profile, {
    foreignKey: 'service_id'
});

Task.hasOne(Service, {
    foreignKey: 'service_id',
    onDelete: 'CASCADE'
});

Service.belongsTo(Task, {
    foreignKey: 'service_id'
});

User.hasMany(Task, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Task.belongsTo(User, {
    foreignKey: 'user_id'
});

Profile.hasOne(Education, {
    foreignKey: 'education_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Profile, Service, Task, Education }





