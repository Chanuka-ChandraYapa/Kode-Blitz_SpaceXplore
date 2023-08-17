module.exports = (sequelize, DataTypes) => {
  const Flight_Schedule = sequelize.define(
    "Flight_Schedule",
    {
      Schedule_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Flight_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SpaceShip_ID: {
        type: DataTypes.STRING, // Assuming SpaceShip_ID is alphanumeric
        allowNull: false,
      },
      Starting_Time: {
        type: DataTypes.DATE, // Assuming Starting_Time is a date value
        allowNull: false,
      },
      Stopping_Time: {
        type: DataTypes.DATE, // Assuming Stopping_Time is also a date value
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  return Flight_Schedule; // Return the correct model name
};
