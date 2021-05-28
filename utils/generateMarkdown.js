// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== "none") {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license == "MIT") { //1
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
  if (license == "Apache") { //2
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
  if (license == "Boost") { //3
    return `[![License](https://img.shields.io/badge/License-${license}%201.0-lightblue.svg)](https://opensource.org/licenses/${license}-2.0)`;
  } else {
    return "";
  }
  if (license == "CreativeCommons") { //4
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else {
    return "";
  }
  if (license == "Eclipse") { //5
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ReadMeGenerator


  # ${data.title}
  
  ## Github user name is ${data.github}
  
  ## the user email is  ${data.email}
   
  ### installation guide
  - ${data.runcmd}
  - npm i

  ## the user is requesting use of the ${data.license} license
  ## ${renderLicenseSection(data.license)}



  ## Application functionality demo
`;
}

module.exports = generateMarkdown;
