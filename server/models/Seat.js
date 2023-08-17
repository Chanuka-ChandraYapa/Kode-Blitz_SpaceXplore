module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define(
    "Seat",
    {
      Seat_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Spaceship_ID: {
        type: DataTypes.STRING, // Assuming Spaceship_ID is an alphanumeric identifier
        allowNull: false,
      },
      Class_ID: {
        type: DataTypes.INTEGER, // Assuming Class_ID is a numerical identifier
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  return Seat;
};
