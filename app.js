const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

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

var numOfEachEmployees = [
    {
        type: "input",
        name: "numOfEngineers",
        message: "How many engineers do you have on your team?",
        validate: function(answer) {
            answer = parseInt(answer);
            if(isNaN(answer)) {
                return "You need to provide a number"
            }
            else{return true}
        }
    },
    {
        type: "input",
        name: "numOfManagers",
        message: "How many managers do you have on your team?",
        validate: function(answer) {
            answer = parseInt(answer);
            if(isNaN(answer)) {
                return "You need to provide a number"
            }
            else{return true}
        }
    },
    {
        type: "input",
        name: "numOfInterns",
        message: "How many interns do you have on your team?",
        validate: function(answer) {
            answer = parseInt(answer);
            if(isNaN(answer)) {
                return "You need to provide a number"
            }
            else{return true}
        }
    },

];

function test() {
    var hello = "hello";
    hello = parseInt(hello);
    console.log(typeof hello);
    console.log(hello);
    if(hello == "NaN") {
        console.log("not a number")
    }
    else {console.log("is a number")}
    // if(typeof hello != "number") {
    //     console.log("not a number")
    // }
    // else {console.log("this is a number")}
    // console.log(typeof hello);
    // console.log(typeof hello == "string");
    // if(typeof hello == "string") {
    //     console.log("this is a string")
    // }
    // else if(typeof hello == "number") {
    //     console.log("this is a number");
    // }
    // console.log(typeof hello);
}

function numOfEmployees(){
    inquirer.prompt(numOfEachEmployees).then(function(response) {
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
        inquirer.prompt(managerQuestions).then(function(answers){
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
        });
    }

    function createEngineer() {
        // console.log(Object.values(numOfEachEmployees[0].numOfEngineers));
       inquirer.prompt(engineerQuestions).then(answers => {
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

            // if(numOfManagers > 0) {
            //     createManager();
            // }
            // run a function here that creates the entire "team" prompting you to create another employee
        })
    }

    function createIntern() {
        inquirer.prompt(internQuestions).then(answers => {
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
