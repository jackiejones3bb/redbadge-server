const Rewards = require('./rewards');
const User = require('./users');
const Businesss = require('./business');

const sequelize = require('sequelize');
const db = require('../db');

//allows custom key to be added to the table (id) so that rewards can be linked to memberships
const Memberships = db.define('memberships', {
   id: {
       type: sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
       unique: true
   }
})

// one-to-many association of rewards to memberships (one membership has many rewards)

Memberships.hasMany(Rewards, { constraints: false }); //was getting error about constraints on the table, this removes the requirement on the relationship to have a unique constraint
Rewards.belongsTo(Memberships, { constraints: false });

// many-to-many association of Users to Businesses (through memberships table)

User.belongsToMany(Businesss, { through: Memberships });
Businesss.belongsToMany(User, { through: Memberships });

module.exports = Memberships;