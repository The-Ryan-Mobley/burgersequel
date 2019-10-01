module.exports = (sequelize,DataTypes)=>{
    const burgers = sequelize.define('burgers',{
        burger_name: {type: DataTypes.STRING, allowNull: false,
            validate:{notEmpty: true }},
        author: {type: DataTypes.STRING, allowNull: false,
        validate:{notEmpty: true }},
        eaten: {type: DataTypes.BOOLEAN, defaultValue: 0},
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
        updatedAt:{type:DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')}
    });
    return burgers;
}
