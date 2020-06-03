const nr = require('newrelic');
let http = require('http');
const app = require('./routes');
const models = require('./database/modelsPostgres/index');
// const seed = require('./database/seed/postgres/tours.js');
const controller = require('./database/controller');

http = http.Server(app);

const sequelizeOptions = { force: true, logging: false };

// If force is true (and it is), Sequelize will drop all
// tables and re-add whatever is in models when the server starts.
// This is nifty for y'all to be able to make changes to the DB
// and not have to constantly do some pruning.
//  This option should be eventually put to 'false'!

const port = process.env.PORT || 3000;

app.set('sqlport', process.env.SQLPORT || 5432);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

models.sequelize.sync(sequelizeOptions).then(() => {
  const server = http.listen(app.get('sqlport'), () => {
    console.log(`SQL server on ${server.address().port}`);

    models.Tour.count()
      .then((results) => {
        if (results < 100) {
          // seed(models);
        } else {
          console.log('\x1b[32m%s\x1b[0m', `${results} rows found in Tours table: database seed script will not run.`);
        }
      })
      .catch((error) => console.error(error));
  });
})
  .catch((error) => {
    console.error(error);
  });
