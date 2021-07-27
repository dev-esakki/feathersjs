const MongoClient = require('mongodb').MongoClient;

module.exports = function (app) {
  const result = new Promise(async (resolve, reject) => {
    const connection = "mongodb+srv://devesakki:React123@cluster0.oxhpz.mongodb.net/test"//app.get('mongodb');
    const database = connection.substr(connection.lastIndexOf('/') + 1);
    
    MongoClient.connect(connection, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
     }).then(client => {
        client.db(database)
        console.log("Database connected", client);
        app.set('mongoClient', client);
        resolve(true)
      }).catch(err => {
        console.log("connection error", err)
        reject(false)
      });  
  }) 
  return result
};
