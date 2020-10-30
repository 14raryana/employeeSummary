const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questionsModule = require("./lib/Questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { doesNotMatch } = require("assert");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMembers = []
const arrayId = [];
var countEngineers = 0;
var countManagers = 0;
var countInterns = 0;

function test() {
    inquirer.prompt(questionsModule.numOfEachEmployees);
}

function numOfEmployees(){
    inquirer.prompt(questionsModule.numOfEachEmployees).then(function(response) {
        // console.log(response);
        var numOfEngineers = response.numOfEngineers;
        var numOfInterns = response.numOfInterns;
        var numOfManagers = response.numOfManagers;

        console.log(response.numOfEngineers);

        // if(isNaN(response.numOfEngineers)) {
        //     console.log("not a number")
        // }
        // else{console.log("this is a number")}

        appMenu(numOfEngineers,numOfInterns,numOfManagers);
    });
}

function appMenu(numOfEngineers, numOfInterns, numOfManagers) {
    if(numOfEngineers > 0) {
        createEngineer();
    }
    else if(numOfEngineers <= 0 && numOfManagers > 0) {
        createManager();
    }
    else if (numOfEngineers <= 0 && numOfManagers <=0 && numOfInterns > 0) {
        createIntern();
    }
    else {console.log("Your team has 0 people")}
    function  createTeam(){
        // inquirer to ask which type of employee you want to create and runs the relevant function
    }
    function createManager() {
        inquirer.prompt(questionsModule.managerQuestions).then(function(answers){
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
            teamMembers.push(manager)
            arrayId.push(answers.managerId);
            countManagers++;

            if(countManagers < numOfManagers) {
                createManager();
            }
            else if(numOfInterns > 0) {
                createIntern();
            }
            else if(numOfInterns <= 0) {
                buildTeam();
            }
        });
    }

    function createEngineer() {
        // console.log(Object.values(numOfEachEmployees[0].numOfEngineers));
       inquirer.prompt(questionsModule.engineerQuestions).then(answers => {
        //    console.log(answers[0].name);
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer);
            arrayId.push(answers.engineerId);
            countEngineers++;

            if(countEngineers < numOfEngineers) {
                createEngineer();
            }

            else if(numOfManagers > 0) {
                createManager();
            }

            else if(numOfInterns <= 0 && numOfManagers <= 0) {
                buildTeam();
            }
            // run a function here that creates the entire "team" prompting you to create another employee
        })
    }

    function createIntern() {
        inquirer.prompt(questionsModule.internQuestions).then(answers => {
             const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.schoolName)
             teamMembers.push(intern)
             arrayId.push(answers.internId)
             countInterns++;

             if(countInterns < numOfInterns) {
                 createIntern();
             }
             else {
                buildTeam();
                console.log(typeof teamMembers);
                console.log(teamMembers);
                console.log(typeof countEngineers);
             }
             // run a function here that creates the entire "team" prompting you to create another employee
         })
     }

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
        console.log("File "+ outputPath +" is ready for you")
      }

      
}

numOfEmployees();
// test();
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
