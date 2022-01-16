const Manager = require('../lib/Manager');

test ('creates a manager object', () => {
  const manager = new Manager('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 1234);

  expect(manager.officeNumber).toEqual(expect.any(Number));
})

test ("gets manager's role", () => {
  const manager = new Manager('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 1234);
  expect(manager.getRole()).toBe('Manager');
})