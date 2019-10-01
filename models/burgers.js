module.exports = (sequelize,DataTypes)=>{
    const burgers = sequelize.define('burgers',{
        burger_name: {type: DataTypes.STRING, allowNull: false,
            validate:{notEmpty: true }},
        author: {type: DataTypes.STRING, allowNull: false,
        validate:{notEmpty: true }},
        eaten: {type: DataTypes.BOOLEAN, defaultValue: 0}
    });
    return burgers;
}
