// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");



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
        message: "What installation method did you use?"
    },
    {
        type: "checkbox",
        name: "Usage",
        message: "What languages are used in this project"
        choices: ["HTML", "CSS", "JavaScript"],
    },
    {
        type: "checkbox",
        name: "License",
        message: "What License works on this project"
        choices: ["Apache", "Boost", "BSD"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "How should people contribute to this project?"
    },
    {
        type: "input",
        name: "Tests",
        message: "How will you test this project?"
    },

    {
        type: "input",
        name: "Questions",
        message: "What questions do you have?",
    },
    {
        type: "input",
        name: "Github username",
        message: "Please enter your github username.",
    },
        
];



// TODO: Create a function to write README file
function writeToFile(fileName, data,) {
    return fs.writeFile(path.join(process.cwd(), fileName,), data);
}

// TODO: Create a function to initialize app
function init() {}

    // inquirer.createPromptModule(questions).then((responses) => {
    //     console.log("Professional README");
    //     writeToFile("./README.md", generateMarkdown({ ...responses }));
    // });


// Function call to initialize app
init();
