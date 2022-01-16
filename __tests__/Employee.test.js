const Employee = require('../lib/Employee');

test ('creates an employee object', () => {
  const employee = new Employee('Brandon', 'abcd', 'brandon_bailey@hotmail.com');

  expect(employee.name).toBe('Brandon');
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

test ("gets employee's name", () => {
  const employee = new Employee('Brandon', 'abcd', 'brandon_bailey@hotmail.com');
  expect(employee.getName()).toEqual(expect.any(String));
});

test ("gets employee's id", () => {
  const employee = new Employee('Brandon', 'abcd', 'brandon_bailey@hotmail.com');
  expect(employee.getId()).toEqual(expect.any(String));
});

test ("get employee's email", () => {
  const employee = new Employee('Brandon', 'abcd', 'brandon_bailey@hotmail.com');
  expect(employee.getEmail()).toEqual(expect.any(String));
})

test ("get employee's role", () => {
  const employee = new Employee('Brandon', 'abcd', 'brandon_bailey@hotmail.com');
  expect(employee.getRole()).toBe('Employee');
})