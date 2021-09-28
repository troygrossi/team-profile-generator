const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputDirectory = path.resolve(__dirname, "output")
const outputFile = path.join(outputDirectory, "team.html");
const generateHTML = require("./src/generateHTML.js");

const teamArray = [];
const idArray = [];

function addTeam(){
    // inquirer starts here
    function addManager(){
        console.log("Answer the following questions for manager:");
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Input the name of the manager:",
                validate: input => {
                    if(input){
                        return true;
                    }else{
                        return "Please provide a name for the manager";
                    }
                }
            },
            {
                type: 'input',
                name: 'managerID',
                message: "Input the manager's ID:",
                validate: input => {
                    if(isNaN(input) || (!input)){
                        return "Please provide the manager's ID";
                    }else{
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Input the manager's email:",
                validate: input => {
                  const isTrue = input.match(
                    /\S+@\S+\.\S+/
                  );
                  if (isTrue) {
                    return true;
                  }
                  return "Please provide the manager's email";
                }
              },
              {
                type: "input",
                name: "officeNumber",
                message: "Input the manager's office number",
                validate: input => {
                    if(isNaN(input) || (!input)){
                        return "Please provide the manager's office number";
                    }else{
                        return true;
                    }
                }
              },
            

        ])
        .then(managerData=>{
            // pass prompt object to manager constructor
            const manager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.officeNumber);
            teamArray.push(manager);
            idArray.push(manager.managerID);
            // prompt to add another employee
            addEmployee();
        })
    }
    // prompts to add another employee or submit team build
        function addEmployee(){
            inquirer.prompt([
                {
                  type: "list",
                  name: "memberChoice",
                  message: "Which type of team member would you like to add?",
                  choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                  ]
                }
              ]).then(userChoice => {
                switch (userChoice.memberChoice) {
                  case "Engineer":
                    // begins prompts for an engineer team member
                    addEngineer();
                    break;
                  case "Intern":
                    //   begins prompts for an intern team member
                    addIntern();
                    break;
                  default:
                    //   outputs the team array to an html 
                    buildTeam();
                }
              });
            }

    function addEngineer(){
        console.log("Answer the following questions:");
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Input the name of the engineer:",
                validate: input => {
                    if(input){
                        return true;
                    }else{
                        return "Please provide a name for the engineer";
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "Input the engineer's ID:",
                validate: input => {
                    if(isNaN(input) || (!input)){
                        return "Please provide the engineer's ID";
                    }else{
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Input the engineer's email:",
                validate: input => {
                  const isTrue = input.match(
                    /\S+@\S+\.\S+/
                  );
                  if (isTrue) {
                    return true;
                  }
                  return "Please provide the engineer's email";
                }
              },
              {
                type: "input",
                name: "github",
                message: "Input the engineer's gitHub username:",
                validate: input => {
                    if(input){
                        return true;
                    }else{
                        return "Please provide a github for the engineer";
                    }
                }
              },
            

        ])
        .then(engineerData=>{
            const engineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.github);
            teamArray.push(engineer);
            idArray.push(engineer.engineerID);
            addEmployee();
        })
    }
    function addIntern(){
        console.log("Answer the following questions:");
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Input the name of the intern:",
                validate: input => {
                    if(input){
                        return true;
                    }else{
                        return "Please provide a name for the intern";
                    }
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: "Input the intern's ID:",
                validate: input => {
                    if(isNaN(input) || (!input)){
                        return "Please provide the intern's ID";
                    }else{
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Input the intern's email:",
                validate: input => {
                  const isTrue = input.match(
                    /\S+@\S+\.\S+/
                  );
                  if (isTrue) {
                    return true;
                  }
                  return "Please provide the intern's email";
                }
              },
              {
                type: "input",
                name: "school",
                message: "Input the engineer's school",
                validate: input => {
                    if(input){
                        return true;
                    }else{
                        return "Please provide a school for the engineer";
                    }
                }
              },
        ])
        .then(internData=>{
            const intern = new Intern(internData.internName, internData.internID, internData.internEmail, internData.school);
            teamArray.push(intern);
            idArray.push(intern.internID);
            addEmployee();
        })
    }
    function buildTeam() {
        if (!fs.existsSync(outputDirectory)) {
          fs.mkdirSync(outputDirectory)
        }
        fs.writeFileSync(outputFile, generateHTML(teamArray), "utf-8");
      }
// starts manager prompts
    addManager();
}
// Begin inquirer prompts
addTeam();


