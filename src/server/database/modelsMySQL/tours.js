module.exports = function (sequelize, DataTypes) {
  const Tour = sequelize.define('Tour',
    {
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
      cancellation_policy: DataTypes.TEXT,
      return_details: DataTypes.TEXT,
    },
    {
      tableName: 'tours',
    });

  return Tour;
};
