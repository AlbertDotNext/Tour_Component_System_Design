const faker = require('faker');
const fs = require('fs');
const _ = require('underscore');

const writeTours = fs.createWriteStream('csv_file/cassandra/toursCassandra.csv');
writeTours.write('tourId,name,overview,cancellation_policy, return_details\n', 'utf8');

// const randomReviewId = () => Math.floor(Math.random() * Math.floor(100));

const writeOneMillion = (writer, encoding, callback) => {
  let i = 100;
  let tourId = 0;

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

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      tourId += 1;
      const name = makeTitle();
      const overview =  faker.lorem.sentences();
      const cancellation_policy = pickrand(cancellationPolicies);
      const return_details = pickrand(returnDetails);
      const data = `${tourId},${name},${overview},${cancellation_policy}, ${return_details}\n`;
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

writeOneMillion(writeTours, 'utf-8', () => {
  console.log('data generation completed');
  writeTours.end();
});