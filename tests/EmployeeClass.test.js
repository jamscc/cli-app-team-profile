const EmployeeAll = require('../lib/EmployeeClass');

describe("Class EmployeeAll", () => {
    it("creates an object with empName, empId, and empEmail; and returns info when using the methods", () => {
        const nameEmp = 'E';
        const idEmp = 3;
        const emailEmp = 'E@---.com';
        const employeeAll = new EmployeeAll(nameEmp, idEmp, emailEmp);

        const resultName = employeeAll.getName();
        const resultRole = employeeAll.getRole();
        const resultEmail = employeeAll.getEmail();
        const resultId = employeeAll.getId();

        expect(employeeAll).toMatchObject({ empName: 'E', empId: 3, empEmail: 'E@---.com' });
        expect(resultName).toEqual('E');
        expect(resultRole).toEqual('Employee');
        expect(resultEmail).toEqual('E@---.com');
        expect(resultId).toEqual(3);
    })
})