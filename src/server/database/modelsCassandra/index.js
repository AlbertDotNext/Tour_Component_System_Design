const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'snaketours',
  localDataCenter: 'datacenter1',
});

client.connect(() => console.log('Connected to the database!'));

module.exports = client;