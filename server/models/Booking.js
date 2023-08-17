module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      passenger_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Seat_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Schedule_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Payment_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Class_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  return Booking;
};
