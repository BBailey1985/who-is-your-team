const Employee = require('../lib/Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name);
    this.school = school;
  }

  getSchool() {
    return `The intern's school is ${this.school}`;
  }

  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;