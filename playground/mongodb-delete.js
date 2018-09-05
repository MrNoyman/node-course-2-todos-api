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

    // delete Many
    // db.collection('Todos').deleteMany({
    //     text: 'To another something'
    // }).then((result) => console.log(result));
    // delete one
    // db.collection('Todos').deleteOne({
    //     text: 'To another something'
    // }).then((result) => console.log(result));
    // find one and delete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => console.log(result));

     db.collection('Users').findOneAndDelete({
         _id: new ObjectID('5b8e9590504bc554f40c11a1')
     }).then((result) => console.log(result));


     db.collection('Users').deleteMany({
         name: 'Amit'
     }).then((result) => console.log(result));


  }

  client.close();
});
