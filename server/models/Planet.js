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
    },
    {
      timestamps: false,
    }
  );

  return Planet;
};
