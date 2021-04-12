const User = require('./User');
const Project = require('./Project');
const Faves = require('./Faves');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Faves, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Faves.belongsTo(User, {
  foreignKey: 'user_id'
});



Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Faves };
