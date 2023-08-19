const User = require('../lib/User');

test('creates a user object', () => {
  const user = new User('Dave');

  expect(user.name).toBe('Dave');

});