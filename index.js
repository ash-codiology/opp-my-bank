#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\t welcome to ash quiz\n"));
console.log(chalk.cyanBright("\t BEST OF LUCK!!!\n"));
let quiz_questions = await inquirer.prompt([
    {
        name: "answer_1",
        type: "checkbox",
        message: "what is the main purpose of a pharmacy?",
        choices: ["selling toys",
            "dispensing medications",
            "providing gym memberships",
            "selling furniture"
        ],
    },
    {
        name: "answer_2",
        type: "checkbox",
        message: "What do you call a person who prepares and dispenses medications?",
        choices: ["doctor",
            "teacher",
            "pharmacist",
            "chef"
        ],
    },
    {
        name: "answer_3",
        type: "checkbox",
        message: "Which of these is commonly used to treat a headache?",
        choices: ["shampoo",
            "pain reliever",
            "toothpaste",
            "deodorant"
        ],
    },
]);
if (quiz_questions.answer_1.includes("dispensing medications")) {
    console.log(chalk.greenBright("correct answer"));
}
else {
    chalk.redBright;
    console.log(chalk.redBright("wrong answer"));
}
if (quiz_questions.answer_2.includes("pharmacist")) {
    console.log((chalk.greenBright("correct answer")));
}
else {
    chalk.redBright;
    console.log(chalk.redBright("wrong answer"));
}
if (quiz_questions.answer_3.includes("pain reliever")) {
    console.log(chalk.greenBright("correct answer"));
}
else {
    chalk.redBright;
    console.log(chalk.redBright("wrong answer"));
}
console.log(chalk.magentaBright("\t thank you for taking this quiz\n"));
