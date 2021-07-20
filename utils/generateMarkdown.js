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
  } else if (license == "Apache") { //2
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  } else if (license == "Boost") { //3
    return `[![License](https://img.shields.io/badge/License-${license}%201.0-lightblue.svg)](https://opensource.org/licenses/${license}-2.0)`;
  } else if (license == "GPLv3") { //4
    return `[![License: GPL v3](https://img.shields.io/badge/License-${license}-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "EPL-1.0") { //5
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ReadMeGenerator by Chris Rando 


  # ${data.title} 
  
  ## description
  ## A brief mission statement of my application is:  \n${data.description}
  \n## Table of Contents:
    * Links
    * Installation Requirements
    * Demo
    * Licensing & author info


  ## My github username is: ${data.github}
  
  ## A good email address to contact me at is:  ${data.email}
   
  ### installation guide
  - ${data.runcmd}
  - We recommend that you run this block to handle requirements. You can copy and paste this into your terminal to handle to the download. 

     ${data.installation}
  \n-npm init -y
    once completed, and you have received your jSON packages, then run the following block:
  \n-npm i (this will install any dependencies required to run this program).
   ${data.tests} ${data.usage}

  
  
  


  ## Application functionality demo
  ### PLACEHOLDER 

  
  ### License
  ## I plan to use my app in conjunction with the following licensing:
  \n${renderLicenseSection(data.license)}

  ### Contributions
  This project was worked in conjunction with the following content developers: ${data.contributors}

  ### Tests
  
  ### Usage
  
  ### Questions 

  `;
}

module.exports = generateMarkdown;
