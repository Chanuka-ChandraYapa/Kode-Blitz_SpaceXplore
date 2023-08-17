module.exports = (sequelize, DataTypes) => {
  const SpaceShip = sequelize.define(
    "SpaceShip",
    {
      SpaceShip_ID: {
        type: DataTypes.STRING, // Assuming SpaceShip_ID is alphanumeric
        allowNull: false,
      },
      Model_Name: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  return SpaceShip; // Return the correct model name
};
