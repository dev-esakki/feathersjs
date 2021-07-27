const users = require("./users/users.service")
const db = require("../mongodb")
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    db(app).then((res) => {
        if(res) {
            app.configure(users);
        }
    })
};
