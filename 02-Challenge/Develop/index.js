// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require() 
// ADD pathway above


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "Title",
    message: "Name the title of your project"
    },
    {
    type: "input",
    name: "Description",
    message: "Describe your project"
    },
    {
    type: "input",
    name: "Table of Contents",
    message: ""
    },
    {
    type: "input",
    name: "Installation",
    message: ""
    },
    {
    type: "checkbox",
    name: "License",
    message: "What License works on this project"
    },
    {
    type: "input",
    name: "Contributing",
    message: ""
    },
    {
    type: "input",
    name: "Tests",
    message: ""
    },
    {
    type: "input",
    name: "Usage",
    message: "What languages are used in this project"
    },
    {
    type: "input",
    name: "Questions",
    message: ""
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
