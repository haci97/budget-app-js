let balanceValue = document.getElementById('balance__value');

const plusButton = document.getElementById('plus__button');
const minusButton = document.getElementById('minus__button');
const numberInput = document.getElementById('number__input');
const textInput = document.getElementById('text__input');
const submitButton = document.getElementById('submit__button');

const incomeList = document.getElementById('income__list');
const expensesList = document.getElementById('expenses__list');

let totalIncome;
let totalExpenses;
let balanceResult;


plusButton.addEventListener('click', function(e) {
    minusButton.classList.remove('minus__button-active');
    plusButton.classList.add('plus__button-active');
    e.preventDefault();
});

minusButton.addEventListener('click', function(e) {
    minusButton.classList.add('minus__button-active');
    plusButton.classList.remove('plus__button-active');
    e.preventDefault();
});


submitButton.addEventListener('click', function(e) {
   if (numberInput.value == '' && textInput.value =='') {
        window.alert('Please enter Value and Description')
        e.preventDefault();
    }
    else if (numberInput.value == '') {
        window.alert('Please enter Value');
        e.preventDefault();
    }
    else if (textInput.value == '') {
        window.alert('Please enter Description');
        e.preventDefault();
    }
    else if (plusButton.classList.contains('plus__button-active') === true) {
        let newValueInput = numberInput.value;
        let newValue = document.createElement('li');
        newValue.classList.add('value__number');
        newValue.innerHTML = newValueInput;
        let newDescriptionInput = textInput.value;
        let newDescription = document.createElement('li');
        newDescription.classList.add('value__description');
        newDescription.innerHTML = newDescriptionInput;
        incomeList.append(newValue);
        incomeList.append(newDescription);
        e.preventDefault();
    }
    else if (minusButton.classList.contains('minus__button-active') === true) {
        let newValueInput = numberInput.value;
        let newValue = document.createElement('li');
        newValue.classList.add('value__number');
        newValue.innerHTML = newValueInput;
        let newDescriptionInput = textInput.value;
        let newDescription = document.createElement('li');
        newDescription.classList.add('value__description');
        newDescription.innerHTML = newDescriptionInput;
        expensesList.append(newValue);
        expensesList.append(newDescription);
        e.preventDefault();
    }
    else {
        window.alert('Please select the type of value ' + '(+ or -)');
        e.preventDefault();
    };
    e.preventDefault();
});


/* 
Replace chunks of code inside submit eventlistener with functions below

function getNewValue() {
    let newValueInput = numberInput.value;
    let newValue = document.createElement('li');
    newValue.classList.add('value__number');
    newValue.innerHTML = newValueInput;
};

function getNewDescription() {
    let newDescriptionInput = textInput.value;
    let newDescription = document.createElement('li');
    newDescription.classList.add('value__description');
    newDescription.innerHTML = newDescriptionInput;
};

function submitPositiveValue() {
    getNewValue();
    getNewDescription();
    incomeList.append(newValue);
    incomeList.append(newDescription);
};

function submitNegativeValue() {
    getNewValue();
    getNewDescription();
    expensesList.append(newValue);
    expensesList.append(newDescription);
};
*/