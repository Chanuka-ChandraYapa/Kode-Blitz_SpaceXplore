const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      User_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      FullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensures email is unique
        validate: {
          isEmail: true, // Ensures that the email is in a valid format
        },
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          // Hash the password before saving it
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(value, salt);
          this.setDataValue("Password", hashedPassword);
        },
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};
