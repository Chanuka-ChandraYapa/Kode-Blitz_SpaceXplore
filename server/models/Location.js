module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      Location_Name: {
        type: DataTypes.STRING, // Assuming Location_ID is alphanumeric
        allowNull: false,
        primaryKey: true,
      },
      Planet_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_link: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  // Define the association to Flight_Schedule
  Location.associate = (models) => {
    Location.hasMany(models.Flight_Schedule, {
      foreignKey: "Location_ID",
      as: "Schedules", // You can choose a different alias if needed
    });
  };

  return Location;
};
