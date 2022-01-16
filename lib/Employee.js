class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id
    this.email = email
  }

getName() {
return `the Employee's name is ${this.name}`;
}

getId() {
  return `The employee's id is ${this.id}`;
}

getEmail() {
  return `The employee's email is ${this.email}`;
}

getRole() {
  return 'Employee';
}
}
module.exports = Employee;