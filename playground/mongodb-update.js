//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID('5b8e94ef8cf7fa91dcef66ce')
    //  }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5b8fc8c258274dfc7bf56b7f')
     }, {
      $set: {
        name: 'Amit'
      },
      $inc: {
        age:1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
  }

  client.close();
});
