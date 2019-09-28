module.exports = (sequelize,DataTypes)=>{
    const burgers = sequelize.define('burgers',{
        burger_name: {type: DataTypes.STRING, allowNull: false,
            validate:{isAlphanumeric: true, notEmpty: true }},
        author: {type: DataTypes.STRING, allowNull: false,
        validate:{isAlphanumeric: true, notEmpty: true }},
        eaten: {type: DataTypes.BOOLEAN, defaultValue: 0}
    });
    return burgers;
}
/** 
 * created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
*/