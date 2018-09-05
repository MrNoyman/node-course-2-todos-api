//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //       console.log('Unable to insert todo', e);
    //     } else {
    //       console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    db.collection('Users').insertOne({
        name: 'Amit',
        age: 29,
        location: 'Tel Aviv'
    }, (err, result) => {
        if (err) {
          console.log('Unable to insert todo', e);
        } else {
          console.log(JSON.stringify(result.ops, undefined, 2));
        }
    });
  }
  client.close();
});
