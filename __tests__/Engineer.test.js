const Engineer = require('../lib/Engineer');

test ('creates a engineer object', () => {
  const engineer = new Engineer('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 'bbailey1985');

  expect(engineer.github).toEqual(expect.any(String));
})

test ("gets engineer's github account", () => {
  const engineer = new Engineer('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 'bbailey1985');

  expect(engineer.getGithub()).toEqual(expect.any(String));
})

test ("gets engineer's role", () => {
  const engineer = new Engineer('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 'bbailey1985');
  expect(engineer.getRole()).toBe('Engineer');
})