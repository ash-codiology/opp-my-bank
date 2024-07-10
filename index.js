#! /usr/bin/env node
import inquirer from "inquirer";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 17ac9b84015827c38b9dd9434ae33f97d566d603
class bank {
    customers = [];
    accounts = [];
    addCustomer(firstName, lastName, accountNumber) {
        this.customers.push({ firstName, lastName, accountNumber });
    }
    addAccount(accounts) {
        this.accounts.push(accounts);
    }
    transaction(accObj) {
        this.accounts = this.accounts.map(acc => acc.accountNum === accObj.accountNum ? accObj : acc);
    }
<<<<<<< HEAD
}
let UnitedBank = new bank();
const sampleAccounts = [
    { accountNum: 10007, accountBalance: 1000 },
    { accountNum: 10008, accountBalance: 2000 },
];
sampleAccounts.forEach(account => UnitedBank.addAccount(account));
async function promptUserName() {
    const responseName = await inquirer.prompt([{
            name: "firstName",
            type: "input",
            message: "Enter Your First Name",
        }, {
            name: "lastName",
            type: "input",
            message: "Enter Your Last Name",
        }]);
    return responseName;
}
async function bankService(bank) {
    do {
        const service = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Select a service",
                choices: ["Veiw Balance", "Cash Withdraw", "Cash Deposit", "Exit"]
            }
        ]);
        if (service.select === "Veiw Balance") {
            let response = await inquirer.prompt([
                {
                    name: "accountNum",
                    type: "input",
                    message: "Enter You Account Number",
                }
            ]);
            const account = bank.accounts.find((acc) => acc.accountNum == parseInt(response.accountNum, 10));
            if (!account) {
                console.log("Invalid Account Number");
            }
            else {
                const UserName = await promptUserName();
                console.log(`Dear "${UserName.firstName} ${UserName.lastName}", your Account Balance is $${account.accountBalance}`);
            }
        }
        else if (service.select == "Cash Withdraw") {
            let response = await inquirer.prompt([
                {
                    name: "accountNum",
                    type: "input",
                    message: "Enter Your Account Number",
                }
            ]);
            const account = bank.accounts.find((acc) => acc.accountNum === parseInt(response.accountNum, 10));
            if (!account) {
                console.log("Invalid Account Number");
            }
            if (account) {
                let answer = await inquirer.prompt([{
                        name: "amount",
                        type: "number",
                        message: "Enter The Amount To Withdraw",
                    }
                ]);
                if (answer.amount > account.accountBalance) {
                    console.log("Insufficient Balance");
                }
                else {
                    let newBalance = account.accountBalance - answer.amount;
                    bank.transaction({
                        accountNum: account.accountNum,
                        accountBalance: newBalance,
                    });
                    console.log("Withdrawal Successful");
                }
            }
        }
        else if (service.select === "Cash Deposit") {
            let response = await inquirer.prompt([
                {
                    name: "accountNum",
                    type: "input",
                    message: "Enter The Account Number To Deposit",
                }
            ]);
            let account = bank.accounts.find((acc) => acc.accountNum == parseInt(response.accountNum, 10));
            if (!account) {
                console.log("Invalid Account Number");
            }
            else {
                let answer = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "Number",
                        message: "Enter The Amount To Deposit:",
                    }
                ]);
                let newBalance = account.accountBalance + answer.amount;
                bank.transaction({
                    accountNum: account.accountNum,
                    accountBalance: newBalance,
                });
                console.log("Deposit Successful");
            }
        }
        else if (service.select === "Exit") {
            return;
        }
    } while (true);
}
bankService(UnitedBank);
=======
}
let UnitedBank = new bank();
const sampleAccounts = [
    { accountNum: 10001, accountBalance: 1000 },
    { accountNum: 10002, accountBalance: 2000 },
];
sampleAccounts.forEach(account => UnitedBank.addAccount(account));
async function promptUserName() {
    const responseName = await inquirer.prompt([{
            name: "firstName",
            type: "input",
            message: "Enter Your First Name",
        }, {
            name: "lastName",
            type: "input",
            message: "Enter Your Last Name",
        }]);
    return responseName;
}
async function bankService(bank) {
    do {
        const service = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Select a service",
                choices: ["Veiw Balance", "Cash Withdraw", "Cash Deposit", "Exit"]
            }
        ]);
        if (service.select === "Veiw Balance") {
            let response = await inquirer.prompt([
                {
                    name: "accountNum",
                    type: "input",
                    message: "Enter You Account Number",
                }
            ]);
            const account = bank.accounts.find((acc) => acc.accountNum == parseInt(response.accountNum, 10));
            if (!account) {
                console.log("Invalid Account Number");
            }
            else {
                const UserName = await promptUserName();
                console.log(`Dear "${UserName.firstName} ${UserName.lastName}", your Account Balance is $${account.accountBalance}`);
            }
        }
        else if (service.select == "Cash Withdraw") {
            let response = await inquirer.prompt([
                {
                    name: "accountNum",
                    type: "input",
                    message: "Enter Your Account Number",
                }
            ]);
            const account = bank.accounts.find((acc) => acc.accountNum === parseInt(response.accountNum, 10));
            if (!account) {
                console.log("Invalid Account Number");
            }
            if (account) {
                let answer = await inquirer.prompt([{
                        name: "amount",
                        type: "number",
                        message: "Enter The Amount To Withdraw",
                    }
                ]);
                if (answer.amount > account.accountBalance) {
                    console.log("Insufficient Balance");
                }
                else {
                    let newBalance = account.accountBalance - answer.amount;
                    bank.transaction({
                        accountNum: account.accountNum,
                        accountBalance: newBalance,
                    });
                    console.log("Withdrawal Successful");
                }
            }
        }
        else if (service.select === "Cash Deposit") {
            let response = await inquirer.prompt([
                {
                    name: "accountNum",
                    type: "input",
                    message: "Enter The Account Number To Deposit",
                }
            ]);
            let account = bank.accounts.find((acc) => acc.accountNum == parseInt(response.accountNum, 10));
            if (!account) {
                console.log("Invalid Account Number");
            }
            else {
                let answer = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "Number",
                        message: "Enter The Amount To Deposit:",
                    }
                ]);
                let newBalance = account.accountBalance + answer.amount;
                bank.transaction({
                    accountNum: account.accountNum,
                    accountBalance: newBalance,
                });
                console.log("Deposit Successful");
            }
        }
        else if (service.select === "Exit") {
            return;
        }
    } while (true);
}
bankService(UnitedBank);
=======
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
>>>>>>> 1dd8a219780276cfe0a1d5f1c2cfbe484adfece0
>>>>>>> 17ac9b84015827c38b9dd9434ae33f97d566d603
