module.exports = function(sequelize, DataTypes) {
    const Todo = sequelize.define("Todo", {
      task: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Todo;
  };

