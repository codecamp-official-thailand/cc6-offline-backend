module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("TodoList", {
        task: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    }, {
        tableName: "todolists",
    });

    return model;
};