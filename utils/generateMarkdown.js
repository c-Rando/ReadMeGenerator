// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== "none") {
    return `[![License](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license == "mit" || "MIT") {
    return `[![License](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})`;
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



  ## Application functionality demo
`;
}

module.exports = generateMarkdown;
