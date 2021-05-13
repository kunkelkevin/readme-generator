const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Inquirer function that displays the questions and recieves the input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter the title of the Readme file (Required):",
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
      type: "confirm",
      name: "details",
      message:
        "Do you want detailed instructions on what is needed in each section?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter the description for the program (Required):",
      when: ({ details }) => {
        if (details) {
          console.log(
            "The Description section should be a short description explaining the what, why, and how. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?"
          );
        }
        return true;
      },
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
      message: "Enter the installation instructions:",
      when: ({ details }) => {
        if (details) {
          console.log(
            "The Installation section should tell you what are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
          );
        }
        return true;
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Enter the usage information:",
      when: ({ details }) => {
        if (details) {
          console.log(
            "The Usage section should provide instructions and examples for use."
          );
        }
        return true;
      },
    },
    {
      type: "input",
      name: "contribute",
      message: "Enter the contribution guidelines:",
      when: ({ details }) => {
        if (details) {
          console.log(
            "The Contribution section should explain the guidelines for how to contribute towards the application from other developers."
          );
        }
        return true;
      },
    },
    {
      type: "input",
      name: "test",
      message: "Enter the test instructions:",
      when: ({ details }) => {
        if (details) {
          console.log(
            "The Tests sections should be added if you have written tests for your application.  It should have examples on how to run them."
          );
        }
        return true;
      },
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for the application:",
      choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "Mozilla", "Apache", "Boost"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ]);
};

// Promise chain that asks/recieves questions/answers, generates markdown content based on answers and writes it to a readme file.
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

// The promise that writes the generated markdown into a readme file.
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
