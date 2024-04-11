// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
{
    name: 'title',
    message: 'Please type your readme-Title'
},
{
    name: 'author',
    message: 'Please type your readme-Author'
},
{
    name: 'description',
    message: 'Please type your readme-Description'
},
{
    name: 'usage',
    message: 'Please type your readme-Usage'
},
{
    name: 'credits',
    message: 'Please type your readme-Credits'
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose your license',
    choices:  ['No License', 'MIT', 'ISC',{
        name: 'Mozilla',
        value: 'MPL_2.0'
    }],
    default: ['MIT']
    
},
{
    name: 'github',
    message: 'Enter your GITHUB_USERNAME'
},
{
    name: 'email',
    message: 'Write your email pls:) :'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            return console.log(err)
        }

        console.log('Readme generated NOW YOU CAN DANCE !')
    })


}

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then((answersObj) => {
      const markdown = generateMarkdown(answersObj)

      writeToFile('README.md', markdown)
    })
    .catch((err) => {
      console.log(err)
    })


}

// Function call to initialize app
init();
