const InternEmp = require('../lib/InternClass');

describe("Class InternEmp", () => {
    it("creates an object with empName, empId, empEmail, and school; and returns info when using the methods", () => {
        const intName = 'E';
        const intID = 3;
        const intEm = 'E@---.com';
        const intSch = 'school name';
        const internEmp = new InternEmp(intName, intID, intEm, intSch);

        const resultName = internEmp.getName();
        const resultRole = internEmp.getRole();
        const resultId = internEmp.getId();
        const resultSchool = internEmp.getSchool();
        const resultEmail = internEmp.getEmail();

        expect(internEmp).toMatchObject({ empName: 'E', empId: 3, empEmail: 'E@---.com', school: 'school name' });
        expect(resultName).toEqual('E');
        expect(resultRole).toEqual('Intern');
        expect(resultId).toEqual(3);
        expect(resultSchool).toEqual('school name');
        expect(resultEmail).toEqual('E@---.com');
    })
})