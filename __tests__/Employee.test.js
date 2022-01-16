const Employee = require('../lib/Employee');

test ('creates an employee object', () => {
  const employee = new Employee('Brandon');

  expect(employee.name).toBe('Brandon');
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

test ("gets employee's name", () => {
  const employee = new Employee('Brandon');
  expect(employee.getName()).toHaveProperty('name');
});

test ("gets employee's name", () => {
  const employee = new Employee('Brandon');
  expect(employee.getId()).toHaveProperty('id');
});