// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email)
        this.schoolName = schoolName
    }

    getRole() {
        return "Intern"
    }

    getSchoolName() {
        return this.schoolName
    }
}

module.exports = Intern