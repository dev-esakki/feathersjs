const { Service } = require('feathers-mongodb');

exports.Users = class Users extends Service {
  constructor(options, app) {
    super(options);
    app.get('mongoClient').then(db => { 
      console.log(db);     
      this.Model = db.collection('users');      
    });

  }

  get() {
    const a = this.Model.find();
    console.log(a);
    return a;
  }
};
