function User (name = '') {
    this.name = name;
};

const user = new User('Jane');

module.exports = User;