const Objection = require("objection");

const {Model} = require(Objection)

class Users extends Model {
    static get tableName() {
        return 'users';
    }
}

module.exports = Users;