import inputData from "./adventData.js";

const data = inputData.split('\n');

let totalSum = 0;

for (let i = 0; i < data.length; i++) {
    let numbersArr = [];
    for (let j = 0; j < data[i].length; j++) {
        if (!isNaN(data[i][j])) {
            numbersArr.push(data[i][j]);
        }
    }
    totalSum += parseInt(numbersArr[0] + numbersArr[numbersArr.length - 1]);
}

console.log(parseInt(totalSum));