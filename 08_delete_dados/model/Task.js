const {DataTypes} = require('sequelize');
const db = require('../db/conn');

const sequelize = db.define('Task', {
    title:{
        type:DataTypes.STRING,
        require: true
    },
    description:{
        type:DataTypes.STRING,
        require: true
    },
    done:{
        type:DataTypes.STRING,
        require: true
    }
});

module.exports = sequelize