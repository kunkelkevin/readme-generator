licenseDescr = ``;
// Functions to retrieve basic description and badge associated with the chosen license.
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseDescr = `[**MIT License**](https://choosealicense.com/licenses/mit/) - A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU AGPLv3":
      licenseDescr =
        "[**GNU AGPLv3**](https://choosealicense.com/licenses/agpl-3.0/) - Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.";
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU GPLv3":
      licenseDescr =
        "[**GNU GPLv3**](https://choosealicense.com/licenses/gpl-3.0/) - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Mozilla":
      licenseDescr =
        "[**Mozilla Public License 2.0**](https://choosealicense.com/licenses/mpl-2.0/) - Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Apache":
      licenseDescr =
        "[**Apache License 2.0**](https://choosealicense.com/licenses/apache-2.0/) - A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost":
      licenseDescr =
        "[**Boost Software License 1.0**](https://choosealicense.com/licenses/bsl-1.0/) - A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    default:
      return "";
  }
}

// Creates a table of contents based on what sections are present
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

// Creates the different sections based on the user input
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

function renderLicense(license) {
  if (license) {
    return `## License
  ${licenseDescr}`;
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

function renderQuestions(github, email) {
  let questionsSection = ``;
  if (github || email) {
    questionsSection = `## Questions
  `;
    if (github) {
      questionsSection += `Please visit my [GitHub page](https://github.com/${github}).<br />`;
    }
    if (email) {
      questionsSection += `If you have any additional questions, you can email me [here](mailto:${email})
      `;
    }
  }
  return questionsSection;
}

// Creates the markdown by calling in all the different sections.
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
