const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");


function addEmployee(){
    function addManager(){
        console.log("Answer the following questions:");
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
                name: "workNumber",
                message: "Input the manager's work number",
                validate: input => {
                    if(isNaN(input) || (!input)){
                        return "Please provide the manager's work number";
                    }else{
                        return true;
                    }
                }
              },
            

        ])
        .then(managerData=>{
            const manager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.workNumber)
            console.log(manager);
        })
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
                message: "Input the engineer's gitHub",
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
            const engineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.github)
            console.log(engineer);
        })
    }
    addManager();
    addEngineer();
}

addEmployee();



// promptQuestions(questions)
//   .then(getBadges)
//   .then((data) => {
//     fs.writeFile(
//       "./generated-README/README.md",
//       generateMarkdown(data),
//       (err) => {
//         if (err) {
//           throw new Error(err);
//         }
//       }
//     );
//   });