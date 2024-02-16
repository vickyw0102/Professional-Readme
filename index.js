const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is repo title?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'What is your table of Contents?',
        name: 'Table of Contents',
    },
    {
        type: 'input',
        message: 'What is Website Preview?',
        name: 'Website Preview',
    },
    {
        type: 'input',
        message: 'Please upload an image',
        name: 'Image',
        },
    {
        type: 'input',
        message: 'Please upload the video',
        name: 'Video',
        },
    {
        type: 'input',
        message: 'Please input the Features',
        name: 'Features',
        },
    {
        type: 'input',
        message: 'Please list your Technologies Used',
        name: 'Technologies Used',
        }, 
    {
        type: 'input',
        message: 'Please list your Project Requirements',
        name: 'Project Requirements',
        }, 
    {
        type: 'input',
        message: 'Please upload an image',
        name: 'Image',
        },


    ])
    .then((response) =>
        console.log (
            'Hello ${response.title} ${response.Table of Contents} ${response.Website Preview} ${response.Image} ${response.Video} ${response.Features} ${response.Technologies Used} ${response.Project Requirements} ${response.Image} ${response.Image}'
        ));
        };

// function to write README file
const writeToFile = utils.promisify(fs.writeFile);

function writeToFile(fileName, data) {
}

// // function to initialize program
function init = asyn()=> {
    console.log("Hello World");
    questions();
    try {
        const answer = await inquirer.prompt([
            {
                
            }
        ])
    }


}

// // function call to initialize program
// init();