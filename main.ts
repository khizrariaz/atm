#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //dollor

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {

    name : "pin",
    message : "enter ur pin",
    type : "number"
}])

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");

    let operationAnswer = await inquirer.prompt(
        [
            {

                name : "operation",
                message : " Please select option",
                type : "list",
                choices : ["Withdraw","Check balance"]
            }
        ]
        
    )

console.log(operationAnswer.operation)

if (operationAnswer.operation === "Withdraw") {
let amountAnswer = await inquirer.prompt(
    [
        {
            name : "amount",
            message : "enter amount",
            type : "number"

        }
    ]
)

myBalance -= amountAnswer.amount;
console.log("your remaining  balance is: " + myBalance)

} else if (operationAnswer.operation === "Check balance") {

console.log("your balance is: " + myBalance)
}
}
else{
    console.log("Wrong pin code!");
}


//{} like a door if ki condition true hui to { } k andr wala code console run hojayga

//type list= list of options. like a list of options. like a list of options. 

//await= wait inquirer. ask a question then wait for ans. after ans ask ur next question
//name : "question",
//message : "enter ur pin",
//type : "number"
//multiple question [] me likhty hen. array