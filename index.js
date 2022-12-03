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


        })
}

managerInformation()