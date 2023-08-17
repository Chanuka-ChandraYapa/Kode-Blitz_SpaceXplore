module.exports = (sequelize, DataTypes) => {
  const Travel_Class = sequelize.define(
    "Travel_Class",
    {
      Class_ID: {
        type: DataTypes.STRING, // Assuming Flight_ID is alphanumeric
        allowNull: false,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING, // Assuming Origin_Planet is a string
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  return Travel_Class; // Return the correct model name
};
