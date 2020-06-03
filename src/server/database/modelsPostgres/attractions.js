module.exports = function (sequelize, DataTypes) {
  const Attraction = sequelize.define('Attraction',
    {
      name: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      rating: DataTypes.FLOAT,
      image_path: DataTypes.STRING,
      image_alt: DataTypes.STRING,
    },
    {
      tableName: 'attractions',
    });

  return Attraction;
};
