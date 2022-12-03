const EmployeeAll = require('./EmployeeClass');

class InternEmp extends EmployeeAll {
    constructor(empName, empId, empEmail, school) {
        const role = 'Intern';
        super(empName, empId, empEmail);
        this.school = school;
        this.getSchool = () => school;
        this.getRole = () => role;
    }
}
module.exports = InternEmp;