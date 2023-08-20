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

  // Define the association to Flight_Schedule
  SpaceShip.associate = (models) => {
    SpaceShip.hasMany(models.Flight_Schedule, {
      foreignKey: "SpaceShip_ID",
      as: "Schedules", // You can choose a different alias if needed
    });
  };

  return SpaceShip;
};
