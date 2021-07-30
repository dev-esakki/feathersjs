const { Service } = require('feathers-mongodb');

exports.Users = class Users extends Service {
  
  constructor(options, app) {
    super(options);
    this.app = app
  }
  
  async find() {
    const db = this.app.get('mongoClient')
    const users = await db.userModal.find();
    return users;
  }

  getMiniProfile() {
    console.log("ttetetefd>>>>>>>>>>>>>");

    return { "Test": "oooooooo", "POK": "lllllll"};

  }
};
