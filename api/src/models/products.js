const {DataTypes} = require('sequelize');
module.exports = (sequelize)=> {
    sequelize.define('products', {


        id: {
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    },{timestamsps: false}
    )
}