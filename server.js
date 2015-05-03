// MEAN Stack RESTful API Tutorial - studentlist

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('studentlist', ['studentlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/students', function (req, res) {
  console.log('I received a GET request');

  db.studentlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/students', function (req, res) {
  console.log(req.body);
  db.studentlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/students/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.studentlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/students/:id', function (req, res) {
  var id = req.params.id;
  console.log('In get by id'+id);
  db.studentlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/students/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.studentlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(3000);
console.log("Server running on port 3000");
