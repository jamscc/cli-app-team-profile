const inquirer = require('inquirer');

// questions - team manager
const questionsManager = [
    "Please enter the name of the manager:",
    "Please enter the employee ID of the manager:",
    "Please enter the email address of the manager:",
    "Please enter the office number of the manager:",
    "Add an engineer or intern to the team profile?"
];

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
        .then()
}

managerInformation()