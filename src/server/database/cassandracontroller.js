const models = require('/Users/ChE/Desktop/Archive/src/server/database/modelsCassandra/models.js');

module.exports = {
  getTour: (req, res) => {
    models.findAll(res);
  }
};