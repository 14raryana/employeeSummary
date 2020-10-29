const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMembers = []
const arrayId = []

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is your Manager's name",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid name"
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "What is your Manager's ID?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid ID"
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your Manager's email?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid email"
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your Manager's office number?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid office number"
        }
    }
]

var engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid name"
        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your employee's ID?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid ID"
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your employee's email?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid email"
        }
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is your employee's Github?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid github"
        }
    }
]

var internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is your Intern's name",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid name"
        }
    },
    {
        type: "input",
        name: "internId",
        message: "What is your Intern's ID?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid ID"
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your Intern's email?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid email"
        }
    },
    {
        type: "input",
        name: "schoolName",
        message: "What is your Intern's school name?",
        validate: answer => {
            if(answer !== "") {
                return true
            }

            return "Please enter a valid school name"
        }
    }
];



function appMenu() {
    createEngineer();
    function  createTeam(){
        // inquirer to ask which type of employee you want to create and runs the relevant function
    }
    function createManager() {
        inquirer.prompt(managerQuestions).then(function(answers){
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
            teamMembers.push(manager)
            arrayId.push(answers.managerId);
            createIntern();
        });
    }

    function createEngineer() {
       inquirer.prompt(engineerQuestions).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer)
            arrayId.push(answers.engineerId)
            createManager();
            // run a function here that creates the entire "team" prompting you to create another employee
        })
    }

    function createIntern() {
        inquirer.prompt(internQuestions).then(answers => {
             const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.schoolName)
             teamMembers.push(intern)
             arrayId.push(answers.internId)
             buildTeam();
             // run a function here that creates the entire "team" prompting you to create another employee
         })
     }

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }

      
}

appMenu()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
