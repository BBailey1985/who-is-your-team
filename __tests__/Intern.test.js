const Intern = require('../lib/Intern');

test ("creates an intern object", () => {
  const intern = new Intern('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 'University');

  expect(intern.school).toEqual(expect.any(String));
});

test ('gets the interns school', () => {
  const intern = new Intern('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 'University');

  expect(intern.getSchool()).toEqual(expect.any(String));
})

test ("gets intern's role", () => {
  const intern = new Intern('Brandon', 'abcd', 'brandon_bailey@hotmail.com', 'University');
  expect(intern.getRole()).toBe('Intern')
});