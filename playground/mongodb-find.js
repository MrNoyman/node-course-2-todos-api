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

    // db.collection('Todos')
    // .find({
    //   _id: new ObjectID('5b8fc57c58274dfc7bf56b25')
    // }).toArray()
    // .then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch documents', err);
    // });

    // db.collection('Todos')
    // .find().count()
    // .then((counts) => {
    //   console.log(`Todos count: ${counts}`);
    //   console.log(JSON.stingify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch documents', err);
    // });

    db.collection('Users')
    .find({name: 'Amit'}).count()
    .then((counts) => {
      console.log(`Todos count: ${counts}`);
      console.log(JSON.stingify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch documents', err);
    });
  }

  client.close();
});
