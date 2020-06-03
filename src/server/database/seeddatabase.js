const _ = require('underscore');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

// const writeUsers = fs.createWriteStream('users.csv');
// writeUsers.write('id,t,a\n', 'utf8');

module.exports = function (models) {
  const cancellationPolicies = [
    'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
    'Full refunds available for a very reasonable processing fee equal to admission price.',
    'All sales are final and incur 100% cancellation penalties.',
    'We will come for you if you try to cancel on us.',
  ];

  const returnDetails = [
    'Returns to the original departure point',
    'Those who fall behind stay behind',
    'The rendezvous will be disclosed by carrier pigeon',
  ];

  const lead = ['Enjoy A', 'Go On A', 'Take A', 'Beautiful', 'Windy', 'Wonderful', 'Starlight', 'Chaperoned', 'Virtual'];
  const conveyance = ['Walking', 'Beautiful', 'Bus', 'Bike', 'Hiking', 'Go-Kart', 'Wine Tour', 'Daydrinking', 'Strolling'];
  const tourTitleChunk = ['Tour Of', 'Through', 'Across', 'Around'];
  const localeName = ['San Francisco', 'SF', 'The Big Fran', 'The 7 x 7', 'Bay City'];

  const coords = {
    north: 37.788915,
    east: -122.390197,
    south: 37.722464,
    west: -122.503719,
  };

  // Originally acquired file paths to images on disk
  // Now we're using S3.
  var images = [
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/1024px-Hibernia_Bank%2C_San_Francisco.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/13159501074_c13ff7cc0d_b.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/2018-09-Salesforce-eschipul-0884-afb96.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/2018-09-Salesforce-eschipul-0915-e9941.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/32711819568_4755604d06_b.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/4083220012_0bbdfbd151_b.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/40956932812_bf1735edf3_b.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/4844340604_a287f7fed7_b.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/640px-Chinatown_San_Francisco_(26720090647).jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/640px-San_Francisco_Womens_Building.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/BalcluthaRainbow-copy.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/CCSF_Ocean_Avenue_Campus.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/Eureka_688px.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/bal_bow_ggb_415px.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/images+(1).jpeg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/images+(2).jpeg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/images.jpeg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/pd51b5-021-jj-a.webp",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/red-and-white-fleet-san-francisco-93197a-1024.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/san-francisco-2107524_960_720.webp",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/san-francisco-3608352_960_720.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/san-francisco-golden-gate-bridge-united-states-travel.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/san-francisco-public-transportation10.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/transamerica-pyramid-san-francisco-902f5a-1024.jpg",
    "https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Itinerary/union-square-san-francisco-482942-1024.jpg"
  ];

  function pickrand(array) {
    const max = array.length -1;
    const i = _.random(0, max);
    return array[i];
  }

  function makeTitle() {
    const myLead = pickrand(lead);
    const myConveyance = pickrand(conveyance);
    const myTitlechunk = pickrand(tourTitleChunk);
    const myLocale = pickrand(localeName);
    const title = `${myLead} ${myConveyance} ${myTitlechunk} ${myLocale}`;
    return title;
  }

  // Make a batch of tours:
  const tours = [];
  for (let i = 0; i < 100; i += 1) { //100 ori
    const tour = {
      name: makeTitle(),
      overview: faker.lorem.sentences(),
      cancellation_policy: pickrand(cancellationPolicies),
      return_details: pickrand(returnDetails),
    };
    tours.push(tour);
  }

  // Make a batch of attractions:
  const attractions = [];
  for (let i = 0; i < 500; i += 1) { //500 ori
    const attraction = {
      name: faker.lorem.words(),
      latitude: Math.random() * (coords.north - coords.south) + coords.south,
      longitude: Math.random() * (coords.east - coords.west) + coords.west,
      description: faker.lorem.sentences(),
      rating: (Math.random(5 - 3) + 1).toFixed(1),
      image_path: pickrand(images),
      image_alt: faker.lorem.words(),
    };
    attractions.push(attraction);
  }

  // Stick that into the database
  models.Attraction.bulkCreate(attractions,
    {
      updateOnDuplicate: ['name'],
    })
    .then(() => {
      models.tours.bulkCreate(tours, {
        updateOnDuplicate: ['name'],
      });
    })
    .then(() => {
      for (let i = 0; i < 500; i += 1) { //500 ori
        // A given tour is going to have an ID between 1 and 100
        const tour_id = _.random(1, 100); //100 ori
        // a given attraction will have an ID between 1 and 500
        const attraction_id = i;
        models.Attraction.findOne({
          where: { id: attraction_id },
        })
          .then((attraction) => {
            models.tours.findOne({
              where: {
                id: tour_id,
              },
            })
              .then((tour) => {
                console.log('data generation complete');
                tour.addAttraction(attraction);
              })
              .catch((error) => {
                console.error(error);
              });
          });
      }
    });



  // function writeTenMillionUsers(writer, encoding, callback) {
  //   let i = 100;
  //   let id = 0;
  //   function write() {
  //     let ok = true;
  //     do {
  //       i -= 1;
  //       id += 1;
  //       // const tours = faker.internet.userName();
  //       // const attractions = faker.image.avatar();
  //       const t = tours[1]
  //     const a = attractions[2]
  //       const data = `${id},${t},${a}\n`;
  //       if (i === 0) {
  //         writer.write(data, encoding, callback);
  //       } else {
  // // see if we should continue, or wait
  // // don't pass the callback, because we're not done yet.
  //         ok = writer.write(data, encoding);
  //       }
  //     } while (i > 0 && ok);
  //     if (i > 0) {
  // // had to stop early!
  // // write some more once it drains
  //       writer.once('drain', write);
  //     }
  //   }
  // write()
  // }


  // writeTenMillionUsers(writeUsers, 'utf-8', () => {
  //   console.log('data generation complete, old');
  //   writeUsers.end();
  // });


};
