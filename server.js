const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//Static file declarationapp.use(express.static(path.join(__dirname, 'client/build')));
//production modeif(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
//build modeapp.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})
//start serverapp.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'client/build')));
app.set('view engine', 'ejs')


const MongoClient = require('mongodb').MongoClient

var db
var list = []

MongoClient.connect('mongodb+srv://jess:JL731996@cluster0-cfgis.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
    if (err) return console.log(err)
    db = database.db('wordball')


    app.listen(5000, function() {
      console.log('listening on 5000')
    })
  })

  app.get('/api/getLeaderboard', (req,res) => {
    db.collection('scores').find()
    .toArray(function(err, results) {
      results.forEach((item) => {
        list.push(`${item.name} ---- skill: ${item.skillscore} - smart: ${item.smartscore}`)
      })
      res.json(list);
    })
  })

  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
