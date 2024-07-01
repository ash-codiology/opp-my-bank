#! /usr/bin/env node
import inquirer from "inquirer";

interface BankAccount{
    accountNum:number,
    accountBalance: number;
}
class bank{
  customers: {firstName: string, lastName: string, accountNumber: number}[]= [];
  accounts:BankAccount[]=[];

  addCustomer(firstName: string, lastName: string, accountNumber: number){
    this.customers.push({firstName, lastName, accountNumber});
  }
  addAccount(accounts:BankAccount){
    this.accounts.push(accounts);
  }
  transaction(accObj:BankAccount){
    this.accounts = this.accounts.map(acc => acc.accountNum === accObj.accountNum? accObj : acc)
  }
}
let UnitedBank = new bank();

const sampleAccounts : BankAccount[] = [
  { accountNum: 10001, accountBalance: 1000 },
  { accountNum: 10002, accountBalance: 2000 },
];
sampleAccounts.forEach(account => UnitedBank.addAccount(account));
   async function promptUserName() {
    const responseName = await inquirer.prompt([{
      name:"firstName",
      type:"input",
      message:"Enter Your First Name",
    },{
      name:"lastName",
      type:"input",
      message:"Enter Your Last Name",
    }]);
    return responseName;
   }
async function bankService(bank:bank){
  do{
    const service = await inquirer.prompt(
    [
      {
      name:"select",
      type:"list",
      message:"Select a service",
      choices:["Veiw Balance", "Cash Withdraw", "Cash Deposit", "Exit"]
    }
  ]
);
  if (service.select === "Veiw Balance"){
    let response = await inquirer.prompt(
      [
       {
      
      name:"accountNum",
      type:"input",
      message:"Enter You Account Number",
      }
    ] 
    );
    const account = bank.accounts.find(
      (acc) => acc.accountNum == parseInt(response.accountNum, 10),
    );

    if(!account){
      console.log("Invalid Account Number");
    }else{
      const UserName = await promptUserName();
     console.log(
      `Dear "${UserName.firstName} ${UserName.lastName}", your Account Balance is $${account.accountBalance}`);
    }
  } else if(service.select == "Cash Withdraw"){
    let response = await inquirer.prompt(
    [
      {
      name:"accountNum",
      type:"input",
      message:"Enter Your Account Number",
    }
   ]
 );
    const account = bank.accounts.find(
      (acc) => acc.accountNum === parseInt(response.accountNum, 10),
    );
    if (!account){
      console.log("Invalid Account Number");
    }
    if (account){
      let answer = await inquirer.prompt([{
        name:"amount",
        type:"number",
        message:"Enter The Amount To Withdraw",
      }
      ]);
      if(answer.amount > account.accountBalance){
        console.log("Insufficient Balance");
      }else{
        let newBalance = account.accountBalance - answer.amount;
        bank.transaction({
          accountNum: account.accountNum,
          accountBalance: newBalance,
        });
        console.log("Withdrawal Successful");
      }
    }
  }else if(service.select === "Cash Deposit"){
    let response = await inquirer.prompt(
    [
      {
      name:"accountNum",
      type:"input",
      message:"Enter The Account Number To Deposit",
    }
  ]
);
    let account = bank.accounts.find(
      (acc) => acc.accountNum == parseInt(response.accountNum, 10),
    );
    if(!account){
      console.log("Invalid Account Number");
    }else{
      let answer = await inquirer.prompt(
      [
        {
        name:"amount",
        type:"Number",
        message:"Enter The Amount To Deposit:",
       }
      ]
    );
    let newBalance = account.accountBalance + answer.amount;
    bank.transaction({
      accountNum: account.accountNum,
      accountBalance: newBalance,
    })
    console.log("Deposit Successful");
  }
}else if (service.select === "Exit"){
   return;
}
  } while(true);
}
bankService(UnitedBank);