
const Customer = require('./customer');
const Business = require('./business');

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
   },
numPunches: {
    type: sequelize.DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
}
})



// many-to-many association of Users to Businesses (through memberships table)

Customer.belongsToMany(Business, { through: Memberships });
Business.belongsToMany(Customer, { through: Memberships });

module.exports = Memberships;