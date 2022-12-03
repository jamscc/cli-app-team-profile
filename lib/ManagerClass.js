const EmployeeAll = require('./EmployeeClass');

class ManagerEmp extends EmployeeAll {
    constructor(empName, empId, empEmail, officeNumber) {
        const role = 'Manager';
        super(empName, empId, empEmail);
        this.officeNumber = officeNumber;
        this.getRole = () => role;
    }
}
module.exports = ManagerEmp;