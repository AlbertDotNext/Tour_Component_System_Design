const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

function setResponse(username, repos) {
  return `${username} and ${repos}`;
}

async function getId(req, res, next) {
  try {
    console.log('Fetching Data');
    const { username } = req.params;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const repos = data.public_repos;
    client.setex(username, 3600, repos);
    res.send(setResponse(username, repos));
  }catch (err) {
    console.error(err);
    res.status(500);
  }
}

//cache middleware
function cache(req, res, next) {
  const {username} = req.username;
  client.get(username, (err, data) => {
    if(err) throw err;
    if(data !== null) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  })
}

app.get('/tour/:id', cache, getId);

app.listen(5000, () => {
  console.log(`APP listen on port ${PORT}`);
});

