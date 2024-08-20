let lastWasResult = false;
function appendToResult(value) {
    const resultInput = document.getElementById('result');

    if (lastWasResult && !isNaN(value)) {  // Check if the last action was a result and the value is a number
        resultInput.value = '';            // Clear the result display
    }

    resultInput.value += value;
    lastWasResult = false; // Reset after appending a new value
}


function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultInput = document.getElementById('result');
    try {
        resultInput.value = eval(resultInput.value);
        lastWasResult = true; // Set the flag after calculation
    } catch (e) {
        resultInput.value = 'Error';
        lastWasResult = true; // Also set the flag in case of an error
    }
}

function deleteLastCharacter() {
    const resultInput = document.getElementById('result');
    resultInput.value = resultInput.value.slice(0, -1);
}

function toggleNegative() {
    const resultInput = document.getElementById('result');
    if (resultInput.value.charAt(0) === '-') {
        resultInput.value = resultInput.value.slice(1);
    } else {
        resultInput.value = '-' + resultInput.value;
    }
}

function appendDecimal() {
    const resultInput = document.getElementById('result');
    const lastNumber = resultInput.value.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
        appendToResult('.');
    }
}
