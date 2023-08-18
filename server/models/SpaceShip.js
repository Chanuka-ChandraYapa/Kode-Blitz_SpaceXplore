module.exports = (sequelize, DataTypes) => {
  const SpaceShip = sequelize.define(
    "SpaceShip",
    {
      SpaceShip_ID: {
        type: DataTypes.STRING, // Assuming SpaceShip_ID is alphanumeric
        allowNull: false,
        primaryKey: true,
      },
      Model_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Seating_Capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  return SpaceShip; // Return the correct model name
};
