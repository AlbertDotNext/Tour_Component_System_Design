const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const user = process.env.SQLUSER || 'ChE';
const password = process.env.SQLPASS || 'snaketours';
const myport = process.env.SQLPORT || 5432;
const dbname = process.env.SQLDBNAME || 'snaketours';
const myhost = process.env.SQLHOST || 'localhost';

const sequelize = new Sequelize(dbname, user, password, {
  host: myhost,
  port: myport,
  dialect: 'postgresql',
  dialectOptions: {
    multipleStatements: true,
  },
  define: {
    underscored: true,
  },
});

module.exports = sequelize;

const db = {};

fs.readdirSync(__dirname).filter((fileName) => (fileName.indexOf('.') !== 0) && (fileName !== 'index.js'))
  .forEach((fileName) => {
    console.log(`Reading ${fileName}`);
    const model = sequelize.import(path.join(__dirname, fileName));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  console.log(`Loading model ${modelName}`);
  if (db[modelName].associate) {
    console.log(`associations found for ${db[modelName]}`);
    db[modelName].associate(db);
  } else {
    console.log(`${modelName} loaded with no associations`);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
