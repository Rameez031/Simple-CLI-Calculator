import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "input", name: "firstNumber" },
    { message: "Enter Second number", type: "input", name: "secondNumber" },
    {
        message: "Select any operator for perform Calculation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
const firstNumber = parseFloat(answer.firstNumber);
const secondNumber = parseFloat(answer.secondNumber);
if (answer.operator === "Addition") {
    console.log(`${answer.firstNumber}` + `${answer.secondNumber}`);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log('Please select valid operator');
}
