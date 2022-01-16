const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name);
    this.github = github
  }

  getGithub() {
    return `The engineer's github is ${this.github}`;
  }

  getRole() {
    return "Engineer"
  }
}

module.exports = Engineer;