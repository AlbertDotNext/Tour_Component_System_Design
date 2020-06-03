const faker = require('faker');
const fs = require('fs');
const _ = require('underscore');

// module.exports = function (models) {

const writeTours = fs.createWriteStream('toursAttractions.csv');
writeTours.write('created_at,updated_at,attraction_id,tour_id\n', 'utf8');


const writeOneMillion = (writer, encoding, callback) => {
  let i = 500000;
  let id = 0;



  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const created_at = faker.date.past();
      const updated_at = faker.date.future();
      const attraction_id = id;
      const tour_id = faker.random.number(100000);
      const data = `${created_at},${updated_at},${attraction_id},${tour_id}\n`;
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