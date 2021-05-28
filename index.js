// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "what is your project's name?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license are you using?',
        choices: ['MIT', 'Apache', 'EPL-1.0', 'GPLv3', 'Boost'],
    },
    {
        type: 'input',
        name: 'runcmd',
        message: "how do you run this app?"
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
            writeToFile('README.md', generateMarkdown( { ...response } ) );
        })
        .then(() => console.log('successful exchange'))
        .catch((err) => console.log(err));
};

// Function call to initialize app
init();
