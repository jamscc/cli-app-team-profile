const ManagerEmp = require('./lib/ManagerClass');
const EngineerEmp = require('./lib/EngineerClass');
const InternEmp = require('./lib/InternClass');
const htmlFile = require('./src/createHTML');
const inquirer = require('inquirer');

// questions - team manager
const questionsManager = [
    "Please enter the name of the manager:",
    "Please enter the employee ID of the manager:",
    "Please enter the email address of the manager:",
    "Please enter the office number of the manager:",
    "Add an engineer or intern to the team profile?"
];

// questions - other team members
const questionsOthers = [
    "name",
    "employee ID",
    "email address",
    "username (GitHub)",
    "name of the school",
    "Add others to the team profile?"
];

// generate HTML
function writeHTML(insertHTML) { 

}

// validate
function valInformation(enterInformation) {
    if (!enterInformation) {
        return 'an input is required'
    } else {
        return true;
    }
}

// information about the team manager
function managerInformation() {
    inquirer.prompt([

        {
            type: "input",
            name: "managerName",
            message: questionsManager[0],
            validate: valInformation
        },

        {
            type: "input",
            name: "managerId",
            message: questionsManager[1],
            validate: valInformation
        },

        {
            type: "input",
            name: "managerEmail",
            message: questionsManager[2],
            validate: valInformation
        },

        {
            type: "input",
            name: "managerTel",
            message: questionsManager[3],
            validate: valInformation
        },

        {
            type: "list",
            name: "others",
            message: questionsManager[4],
            choices: ['No', 'add Engineer', 'add Intern']
        },

    ])
        .then((dataManager) => {

            // object with empName, empId, empEmail, and officeNumber
            const managerSummary = new ManagerEmp(dataManager.managerName, dataManager.managerId, dataManager.managerEmail, dataManager.managerTel);

            // Bootstrap
            // team manager - summary
            let insertHTML =
                `   <div class="col-6 col-md-4">
                <div class="card border-primary text-dark mb-3" style="max-width: 22rem;">
                    <div class="card-header text-center">${managerSummary.empName}</div>
                    <div class="card-body">
                        <h6 class="card-title text-center">${managerSummary.getRole()}</h6>
                        <p class="card-text">Employee ID: ${managerSummary.empId}</p>
                        <p class="card-text">Employee Email: <a href="mailto:${managerSummary.empEmail}">${managerSummary.empEmail}</a></p>
                        <p class="card-text">Office Tel: ${managerSummary.officeNumber}</p>
                    </div>
                </div>
            </div>`

            // whether to add information about other team members to the team profile or generate team profile
            if (dataManager.others != 'No') {
                var employeePosition;
                switch (dataManager.others) {
                    case ('add Intern'):
                        employeePosition = 'Intern';
                        var additionalDataI = `${questionsOthers[4]} that the employee attends`;
                        break;
                    default:
                        employeePosition = 'Engineer';
                        var additionalDataE = `${questionsOthers[3]} of the Engineer`;
                }
                // information about the other team members
                othersInformation(employeePosition, additionalDataI, additionalDataE, insertHTML);
            } else {
                writeHTML(insertHTML);
            }
        })
}

// information about the other team members
function othersInformation(employeePosition, additionalDataI, additionalDataE, insertHTML) {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: `Please enter the ${questionsOthers[0]} of the ${employeePosition}:`,
            validate: valInformation
        },

        {
            type: "input",
            name: "employeeId",
            message: `Please enter the ${questionsOthers[1]} of the ${employeePosition}:`,
            validate: valInformation
        },

        {
            type: "input",
            name: "employeeEmail",
            message: `Please enter the ${questionsOthers[2]} of the ${employeePosition}:`,
            validate: valInformation
        },

        {
            type: "input",
            name: "employeeOtherData",
            message: `Please enter the ${additionalDataI || additionalDataE}:`,
            validate: valInformation
        },

        {
            type: "list",
            name: "addOthers",
            message: `${questionsOthers[5]}`,
            choices: ['No', 'add Engineer', 'add Intern']
        },

    ])
        .then((dataOthers) => {
            switch (employeePosition) {
                case ('Intern'):
                    // Bootstrap
                    // object with empName, empId, empEmail, and school
                    const internSummary = new InternEmp(dataOthers.employeeName, dataOthers.employeeId, dataOthers.employeeEmail, dataOthers.employeeOtherData);
                    var summaryI = internSummary;
                    var empPositionI = internSummary.getRole();
                    var empSchoolData = `<p class="card-text">School Name: ${internSummary.school}</p>`;                    
                    break;
                default:
                    // Bootstrap
                    // object with empName, empId, empEmail, and github
                    const engineerSummary = new EngineerEmp(dataOthers.employeeName, dataOthers.employeeId, dataOthers.employeeEmail, dataOthers.employeeOtherData);
                    var summaryE = engineerSummary;
                    var empPositionE = engineerSummary.getRole();
                    var empGHData = `<p class="card-text">GitHub Link: <a href="https://github.com/${engineerSummary.github}" target="_blank">https://github.com/${engineerSummary.github}</a></p>`;
            }
            
            const { empName, empId, empEmail } = summaryI || summaryE;
            // Bootstrap
            // other team member - summary
            insertHTML += `
            <div class="col-6 col-md-4">
                <div class="card border-primary text-dark mb-3" style="max-width: 22rem;">
                    <div class="card-header text-center">${empName}</div>
                    <div class="card-body">
                        <h6 class="card-title text-center">${empPositionI || empPositionE}</h6>
                        <p class="card-text">Employee ID: ${empId}</p>
                        <p class="card-text">Employee Email: <a href="mailto:${empEmail}">${empEmail}</a></p>
                        ${empSchoolData || empGHData}
                    </div>
                </div>
            </div>`

            // whether to add information about other team members to the team profile or generate team profile
            if (dataOthers.addOthers != 'No') {
                switch (dataOthers.addOthers) {
                    case ('add Intern'):
                        employeePosition = 'Intern';
                        var additionalDataI = `${questionsOthers[4]} that the employee attends`;
                        break;
                    default:
                        employeePosition = 'Engineer';
                        var additionalDataE = `${questionsOthers[3]} of the Engineer`;                
                }
                othersInformation(employeePosition, additionalDataI, additionalDataE, insertHTML);
            } else {
                writeHTML(insertHTML);
            }
        })
}

managerInformation();