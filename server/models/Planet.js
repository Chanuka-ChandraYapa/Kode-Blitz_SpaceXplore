module.exports = (Sequelize, DataTypes) => {
  const Planet = Sequelize.define(
    "Planet",
    {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Description: {
        type: DataTypes.TEXT("long"),
        allowNull: true,
      },
      Image_Link: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Planet;
};
