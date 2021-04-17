const User = require('./User');
const Faves = require('./Faves');

User.hasMany(Faves, {
  foreignKey: 'user_id',
});

Faves.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Faves };
