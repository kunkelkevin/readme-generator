// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU AGPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicense(license) {}

function renderToc(data) {
  let toc = ``;
  if (data.install) {
    toc += `* [Installation](#installation)
  `;
  }
  if (data.usage) {
    toc += `* [Usage](#usage)
  `;
  }
  if (data.license) {
    toc += `* [License](#license)
  `;
  }
  if (data.contribute) {
    toc += `* [Contributions](#contributions)
  `;
  }
  if (data.test) {
    toc += `* [Tests](#tests)
  `;
  }
  if (data.github || data.email) {
    toc += `* [Questions](#questions)
  `;
  }
  return toc;
}

function renderInstall(install) {
  if (install) {
    return `## Installation
    ${install}`;
  }
  return "";
}

function renderUsage(usage) {
  if (usage) {
    return `## Usage
    ${usage}`;
  }
  return "";
}

function renderContribute(contribute) {
  if (contribute) {
    return `## Contributions
    ${contribute}`;
  }
  return "";
}

function renderTest(test) {
  if (test) {
    return `## Tests
    ${test}`;
  }
  return "";
}

function renderQuestions(github, email) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  ${renderToc(data)}

  ${renderInstall(data.install)}
  ${renderUsage(data.usage)}
  ${renderLicense(data.license)}
  ${renderContribute(data.contribute)}
  ${renderTest(data.test)}
  ${renderQuestions(data.github, data.email)}


`;
}

module.exports = generateMarkdown;
