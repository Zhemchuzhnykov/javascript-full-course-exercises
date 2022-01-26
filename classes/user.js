// classes User and UserRepository to create users' profiles and save them into the storage of users

export class User {

  constructor(id, name, sessionId) {
    this.id = id;
    this.name = name; 
    this.sessionId = sessionId;
    Object.freeze(this);
  };

};

export class UserRepository {

  constructor(users) {
    this._users = Object.freeze(users);
  };

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user.name);
  };

  getUserIds() {
    return this._users.map(user => user.id);
  };

  getUserNameById (id){
    return this._users.filter(user => user.id === id)[0].name;
  };

};

const coolUsers = [ { name: 'Bonny', id: 18 }, { name: 'Adam', id: 19 }, { name: 'Dasha', id: 20 } ];
const coolRep = new UserRepository(coolUsers);