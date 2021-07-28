// Initializes the `users` service on path `/users`
const { Users } = require('./users.class');
const Model = require('../../models/users');
const hooks = require('./users.hooks');

module.exports = async function (app) {  
  const options = {
    paginate: app.get('paginate'),
    name: 'users',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/users', new Users(options, app));
  
  // Get our initialized service so that we can register hooks
  const service = app.service('users');
  
  service.create({
    email: 'test@mail.com',
    password: 'asddasfsdfsdg12o3i103r'
  }).then(function(point) {
      console.log('Created point', point);
  });

  //service.hooks(hooks);
};
