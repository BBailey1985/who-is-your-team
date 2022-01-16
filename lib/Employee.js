class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = 'id'
    this.email = 'email'
  }


getName() {
return `the Employee's name is ${this.name}`;
}



getId() {
  return `The employee's id is ${this.id}`;
}


// getEmail()

// getRole()
}
module.exports = Employee;