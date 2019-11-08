var valueOne;
var valueTwo;
var status;
var placeHolder = true;

function loadPage() {
    document.getElementById('calculateAnswer').disabled = true;
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
}

function numberButtons(digit) {
    if (placeHolder == true) {
        document.getElementById('display').innerHTML = " ";
    }
    placeHolder = false;
    document.getElementById('display').appendChild(document.createTextNode(digit));
    enableButtons();
    restoreColors();
}

function calculatePlus() {
    status = "plus";
    valueOne = parseFloat(document.getElementById('display').innerHTML);
    placeHolder = true;
    document.getElementById('display').innerHTML = valueOne;
    document.getElementById('calculateButtonPlus').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonPlus').style.color = 'black';
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateMinus() {
    status = "minus";
    valueOne = parseFloat(document.getElementById('display').innerHTML);
    placeHolder = true;
    document.getElementById('display').innerHTML = valueOne;
    document.getElementById('calculateButtonMinus').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonMinus').style.color = 'black';
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateMultiply() {
    status = "multiply";
    valueOne = parseFloat(document.getElementById('display').innerHTML);
    placeHolder = true;
    document.getElementById('display').innerHTML = valueOne;
    document.getElementById('calculateButtonMultiply').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonMultiply').style.color = 'black';
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateDividedBy() {
    status = "divide";
    valueOne = parseFloat(document.getElementById('display').innerHTML);
    placeHolder = true;
    document.getElementById('display').innerHTML = valueOne;
    document.getElementById('calculateButtonDividedBy').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonDividedBy').style.color = 'black';
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateAnswer() {
    valueTwo = parseFloat(document.getElementById('display').innerHTML);

    if (status == "plus") {
        var Answer = valueOne + valueTwo
    } else if (status == "minus") {
        var Answer = valueOne - valueTwo
    } else if (status == "multiply") {
        var Answer = valueOne * valueTwo
    } else {
        var Answer = valueOne / valueTwo
    }
    document.getElementById('display').innerHTML = Answer;
    restoreColors()
}

function clearDisplay() {
    document.getElementById('display').innerHTML = "0";
    valueOne = null;
    valueTwo = null;
    document.getElementById('calculateAnswer').disabled = true;
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
    restoreColors()
    placeHolder = true;
}

function enableButtons() {
    document.getElementById('calculateAnswer').disabled = false;
    document.getElementById('calculateButtonMultiply').disabled = false;
    document.getElementById('calculateButtonPlus').disabled = false;
    document.getElementById('calculateButtonMinus').disabled = false;
    document.getElementById('calculateButtonDividedBy').disabled = false;
}

function restoreColors() {
    document.getElementById('calculateButtonPlus').style.backgroundColor = 'aqua';
    document.getElementById('calculateButtonPlus').style.color = 'black';
    document.getElementById('calculateButtonMinus').style.backgroundColor = 'aqua';
    document.getElementById('calculateButtonMinus').style.color = 'black';
    document.getElementById('calculateButtonMultiply').style.backgroundColor = 'aqua';
    document.getElementById('calculateButtonMultiply').style.color = 'black';
    document.getElementById('calculateButtonDividedBy').style.backgroundColor = 'aqua';
    document.getElementById('calculateButtonDividedBy').style.color = 'black';
}