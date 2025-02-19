function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let result;
    const operation = document.getElementById('operation').value;

    if(!isNaN(num1) && !isNaN(num2)){
        switch(operation){
            case "suma":
                result = sum(num1, num2);
            break;
            case "resta":
                result = res(num1, num2);
            break;
            case "multiplicacion":
                result = mul(num1, num2);
            break;
            case "division":
                result = div(num1, num2);
            break;
        }

        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function sum(a, b){
    debugger;
    return a + b;
}
function res(a, b){
    debugger;
    return a - b;
}function mul(a, b){
    debugger;
    return a * b;
}
function div(a, b) {
    debugger;
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}