const express = require('express');
const bodyParser= require('body-parser')
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient

let db

MongoClient.connect('mongodb+srv://jess:JL731996@cluster0-cfgis.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
  if (err) return console.log(err)
  db = database.db('wordball')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// ---------scores and leaderboard api--------------

app.get('/api/getLeaderboard', (req,res) => {
  console.log('reached')
  let list = []
  db.collection('scores').find()
  .toArray(function(err, results) {
    results.forEach((item) => {
      list.push(`${item.name} ---- skill: ${item.skillscore} - smart: ${item.smartscore}`)
    })
    res.json(list);
  })
})

// ---------users api--------------

// users api to get and post requests to go here

// ---------heroku deploy settings--------------

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
