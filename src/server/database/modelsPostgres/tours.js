module.exports = function (sequelize, DataTypes) {
  const Tour = sequelize.define('Tour',
    {
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
      cancellation_policy: DataTypes.TEXT,
      return_details: DataTypes.TEXT,
      // created_at: DataTypes.VARCHAR,
      // updated_at: DataTypes.VARCHAR,
    },
    {
      tableName: 'tours',
    });

  return Tour;
};
