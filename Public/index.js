// Import required modules and classes
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

// Initialize empty team array
const teamArray = [];

// Define function to prompt for manager information
function addManager() {
  console.log("Please enter the manager's information:");
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name:',
        validate: (input) => (input ? true : 'Please enter a name.'),
      },
      {
        type: 'input',
        name: 'id',
        message: 'ID:',
        validate: (input) =>
          isNaN(input) ? 'Please enter a number.' : true,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
        validate: (input) =>
          /\S+@\S+\.\S+/.test(input) ? true : 'Please enter a valid email.',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Office number:',
        validate: (input) =>
          isNaN(input) ? 'Please enter a number.' : true,
      },
    ])
    .then((data) => {
      // Create new manager instance and add to team array
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamArray.push(manager);
      console.log('Manager added successfully!');
    });
}

// Define function to prompt for employee information
function addEmployee() {
  console.log("Please enter the employee's information:");
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Role:',
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name:',
        validate: (input) => (input ? true : 'Please enter a name.'),
      },
      {
        type: 'input',
        name: 'id',
        message: 'ID:',
        validate: (input) =>
          isNaN(input) ? 'Please enter a number.' : true,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
        validate: (input) =>
          /\S+@\S+\.\S+/.test(input) ? true : 'Please enter a valid email.',
      },
      {
        type: 'input',
        name: 'github',
        message: "GitHub username (Engineer's only):",
        when: (data) => data.role === 'Engineer',
        validate: (input) =>
          input ? true : "Please enter the engineer's GitHub username.",
      },
      {
        type: 'input',
        name: 'school',
        message: "School name (Intern's only):",
        when: (data) => data.role === 'Intern',
        validate: (input) =>
          input ? true : "Please enter the intern's school name.",
      },
      {
        type: 'confirm',
        name: 'addMore',
        message: 'Add another team member?',
        default: false,
      },
    ])

    .then((data) => {
      // Create new employee instance and add to team array
      const { name, id, email, role, github, school } = data
    })};
