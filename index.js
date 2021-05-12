// TODO: Include packages needed for this application
const { rejects } = require("assert");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter the title of the Readme file.",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Make sure you enter a title.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter the description for the Readme.",
      validate: (descInput) => {
        if (descInput) {
          return true;
        } else {
          console.log("The readme needs a description");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "Enter the installation instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter the usage information",
    },
    {
      type: "input",
      name: "contribute",
      message: "Enter the contribution guidelines.",
    },
    {
      type: "input",
      name: "test",
      message: "Enter the test instructions",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for the application:",
      choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "Mozilla", "Apache", "Boost"],
    },
  ]);
};

questions()
  .then((readmeData) => {
    return generateMarkdown(readmeData);
  })
  .then((markdown) => {
    return writeToFile("./dist/README.md", markdown);
  })
  .catch((err) => {
    console.log(err);
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("README has been created.");
    });
  });
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
