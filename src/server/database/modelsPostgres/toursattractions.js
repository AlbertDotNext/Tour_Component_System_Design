module.exports = function (sequelize, DataTypes) {
  const TourAttraction = sequelize.define('TourAttraction',
    {
      stopIndex: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      admissionPrice: DataTypes.FLOAT,
      admissionNote: DataTypes.STRING,
    },
    {
      tableName: 'ToursAttractions',
    });


  TourAttraction.associate = function (models) {
    models.Attraction.belongsToMany(models.Tour, { through: 'ToursAttractions' });
    models.Tour.belongsToMany(models.Attraction, { through: 'ToursAttractions' });
  };

  return TourAttraction;
};
