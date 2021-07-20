// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    {
        type: 'input',
        name: 'github', //1
        message: 'what is your github username?'
    },
    {
        type: 'input',
        name: 'email', //2
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'title', //3
        message: "what is your project's name?"
    },
    {
        type: 'list',
        name: 'license', //4
        message: 'what license are you using?',
        choices: ['MIT', 'Apache', 'EPL-1.0', 'GPLv3', 'Boost'],
    },
    {
        type: 'input',
        name: 'runcmd', //5
        message: "how do you run this app?"
    },
    {
        type: 'input',
        name: 'description', //6
        message: "What do you plan to accomplish with this app?"
    },
    {
        type: 'input',
        name: 'installation', //7
        message: "Please list the dependencies for this application:"
    },
    {
        type: 'input',
        name: 'usage', //8
        message: "How may it be integrated into other technologies?"
    },
    {
        type: 'input',
        name: 'tests', //9
        message: "what testing do we perform on this app prior to upload?"
    },
    { 
        type: 'input',
        name: 'contributors', //10
        message: "Are there any contributors to your success?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log("your readme is being created...");
            writeToFile('README.md', generateMarkdown({ ...response }));
        })
        .then(() => console.log('successful exchange'))
        .catch((err) => console.log(err));
};

// Function call to initialize app
init();
