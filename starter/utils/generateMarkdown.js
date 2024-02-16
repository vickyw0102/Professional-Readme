// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${data.emoji} ${data.tableofcontents} 

  
  `;
  }
  
  module.exports = generateMarkdown;