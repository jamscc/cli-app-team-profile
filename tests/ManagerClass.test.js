const ManagerEmp = require('../lib/ManagerClass');

describe("Class ManagerEmp", () => {
    it("creates an object with empName, empId, empEmail, and officeNumber; and returns info when using the methods", () => {
        const mgrName = 'E';
        const mgrID = 3;
        const mgrEm = 'E@---.com';
        const mgrTel = '212';
        const managerEmp = new ManagerEmp(mgrName, mgrID, mgrEm, mgrTel);

        const resultName = managerEmp.getName();
        const resultRole = managerEmp.getRole();
        const resultEmail = managerEmp.getEmail();
        const resultId = managerEmp.getId();
        
        expect(managerEmp).toMatchObject({ empName: 'E', empId: 3, empEmail: 'E@---.com', officeNumber: '212' });
        expect(resultName).toEqual('E');
        expect(resultRole).toEqual('Manager');
        expect(resultEmail).toEqual('E@---.com');
        expect(resultId).toEqual(3);
    })
})