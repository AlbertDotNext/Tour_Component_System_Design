const db = require('./index.js');

module.exports = {
  findAll: (res) => {
    db.execute('SELECT * FROM snaketours.tours', [], { prepare: true }, (error, data) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).send(data.rows);
      }
    });
    // db.execute('SELECT * FROM snaketours.attractions', (error, data) => {
    //   if (error) {
    //     console.error(error);
    //     res.status(500).send(error);
    //   } else {
    //     res.status(200).send(data.rows);
    //   }
    // });
  }
};