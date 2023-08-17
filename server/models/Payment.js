module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "Payment",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Price: {
        type: DataTypes.DECIMAL(10, 2), // Example of using DECIMAL for currency with precision and scale
        allowNull: false,
      },
      Discount: {
        type: DataTypes.DECIMAL(5, 2), // Example of using DECIMAL for percentage discount with precision and scale
        allowNull: false,
      },
    },
    {
      timestamps: false, // This line will prevent createdAt and updatedAt columns from being created
    }
  );

  return Payment;
};
