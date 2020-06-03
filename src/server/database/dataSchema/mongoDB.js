const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tour', { useNewUrlParser: true, useUnifiedTopology: true, });

const Schema = mongoose.Schema;

const tourSchema = new Schema(
  {
    id: Number,
    name: String,
    overview: String,
    cancellation_policy: String,
    return_details: String,
    Attractions: [{ type: String }]
  }
)

const attractionsSchema = new Schema(
  {
    id: Number,
    name: String,
    latitude: Number,
    longitude: Number,
    description: String,
    rating: Number,
    image_path: String,
    image_alt: String,
    ToursAttractions: [{ type: String }]
  })


const toursAttractionsSchema = new Schema(
  {
    created_at: String,
    updated_at: String,
    attraction_id: Number,
    tour_id: Number,
  });

const TourModel = mongoose.model('tour', tourSchema);
const AttractionsModel = mongoose.model('attractions', attractionsSchema);
const ToursAttractions = mongoose.model('toursAttractions', toursAttractionsSchema);

module.exports = { TourModel, AttractionsModel, ToursAttractions };