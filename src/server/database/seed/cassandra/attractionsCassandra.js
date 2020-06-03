const faker = require('faker');
const fs = require('fs');
const _ = require('underscore');

const writeAttractions = fs.createWriteStream('attractions.csv');
writeAttractions.write('id,name,latitude,longitude, description,rating,image_path,image_alt\n', 'utf8');

// const randomReviewId = () => Math.floor(Math.random() * Math.floor(100));

const writeOneMillion = (writer, encoding, callback) => {
  let i = 5000000;
  let id = 0;

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

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.lorem.words();
      const latitude =  Math.random() * (coords.north - coords.south) + coords.south;
      const longitude = Math.random() * (coords.east - coords.west) + coords.west;
      const description = faker.lorem.sentences();
      const rating = (Math.random(5 - 3) + 1).toFixed(1);
      const image_path = pickrand(images);
      const mage_alt = faker.lorem.words();
      const data = `${id},${name},${latitude},${longitude}, ${description},${rating},${image_path},${mage_alt}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeOneMillion(writeAttractions, 'utf-8', () => {
  console.log('data generation completed');
  writeAttractions.end();
});



// LOAD DATA LOCAL INFILE '/Users/justinguan/Desktop/HR/HRSF127/projects/SDC/Justin_Tripadvisor_Service/tours.csv' INTO TABLE tours FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id,name,latitude,longitude, description,rating,image_path,image_alt);

