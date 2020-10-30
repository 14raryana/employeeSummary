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

module.exports = {engineerQuestions, managerQuestions, internQuestions, numOfEachEmployees};