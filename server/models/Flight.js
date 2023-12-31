module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define(
    "Flight",
    {
      Flight_ID: {
        type: DataTypes.STRING, // Assuming Flight_ID is alphanumeric
        allowNull: false,
        primaryKey: true,
      },
      Origin_Planet: {
        type: DataTypes.STRING, // Assuming Origin_Planet is a string
        allowNull: false,
      },
      Destination_Planet: {
        type: DataTypes.STRING, // Assuming Destination_Planet is a string
        allowNull: false,
      },
      Duration: {
        type: DataTypes.INTEGER, // Assuming Duration is in minutes or seconds
        allowNull: false,
      },
      Flight_Price: {
        type: DataTypes.FLOAT, // Assuming Flight_Price is a floating-point number
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  // Define the association to Flight_Schedule
  Flight.associate = (models) => {
    Flight.hasMany(models.Flight_Schedule, {
      foreignKey: "Flight_ID",
      as: "Schedules", // You can choose a different alias if needed
    });
  };

  return Flight;
};
