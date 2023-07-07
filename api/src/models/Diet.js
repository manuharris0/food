const { DataTypes } = require('sequelize');

// Exporto la función que recibe la instancia de sequelize que define el modelo
module.exports = (sequelize) => {
    sequelize.define('Diet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {timestamps: false}
    );
};