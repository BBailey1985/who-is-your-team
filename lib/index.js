const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generatePage = require("../src/page-template");

const teamArray = [];

const questions = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "Please enter your team manager's name:",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter your team manager's employee ID:",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter an id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter your team manager's email:",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter a valid email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter your team manager's office number:",
      validate: numberInput => {
        if (numberInput) {
          return true;
        } else {
          console.log('Please enter an office number!');
          return false;
        }
      }
    },
  ])
  .then(managerAnswers => {
    const {name, id, email, officeNumber} = managerAnswers
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
  })
};

const additionalEmployees = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'additionalOptions',
      message: 'Would you like to add:',
      choices: ['Engineer', 'Intern', 'Finish Building Team'], 
    }
  ])
}

// {
//   
// }


questions();