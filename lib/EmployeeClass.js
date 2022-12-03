class EmployeeAll {
    constructor(empName, empId, empEmail) {
        const role = 'Employee';
        this.empName = empName;
        this.empEmail = empEmail;
        this.empId = empId;
        this.getRole = () => role;
        this.getName = () => empName;
        this.getEmail = () => empEmail;
        this.getId = () => empId;
    }
}
module.exports = EmployeeAll;