const EngineerEmp = require('../lib/EngineerClass');

describe("Class EngineerEmp", () => {
    it("creates an object with empName, empId, empEmail, and github; and returns info when using the methods", () => {
        const engName = 'E';
        const engID = 3;
        const engEm = 'E@---.com';
        const engGH = 'username';
        const engineerEmp = new EngineerEmp(engName, engID, engEm, engGH);

        const resultName = engineerEmp.getName();
        const resultRole = engineerEmp.getRole();
        const resultId = engineerEmp.getId();
        const resultGH = engineerEmp.getGitHub();
        const resultEmail = engineerEmp.getEmail();

        expect(engineerEmp).toMatchObject({ empName: 'E', empId: 3, empEmail: 'E@---.com', github: 'username' });
        expect(resultName).toEqual('E');
        expect(resultRole).toEqual('Engineer');
        expect(resultId).toEqual(3);
        expect(resultGH).toEqual('username');
        expect(resultEmail).toEqual('E@---.com');
    })
})