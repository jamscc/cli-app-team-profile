const EmployeeAll = require('./EmployeeClass');

class EngineerEmp extends EmployeeAll {
    constructor(empName, empId, empEmail, github) {
        const role = 'Engineer';
        super(empName, empId, empEmail);
        this.github = github;
        this.getGitHub = () => github;
        this.getRole = () => role;
    }
}
module.exports = EngineerEmp;