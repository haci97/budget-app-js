// Store needed elements
let balanceValue = document.getElementById('balance__value');

const plusButton = document.getElementById('plus__button');
const minusButton = document.getElementById('minus__button');
const numberInput = document.getElementById('number__input');
const textInput = document.getElementById('text__input');
const submitButton = document.getElementById('submit__button');

const incomeList = document.getElementById('income__list');
const expensesList = document.getElementById('expenses__list');

let totalIncome = 12;
let totalExpenses = 5;
let balanceResult;


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

minusButton.addEventListener('click', function(e) {
    minusButton.style.backgroundColor="#EFEFEF";
    minusButton.style.color="#43546C";
    plusButton.style.backgroundColor="transparent";
    plusButton.style.color="#EFEFEF";
    submitButton.addEventListener('click', function(e) {
        e.preventDefault()
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
    });
    e.preventDefault()
})

plusButton.addEventListener('click', function(e) {
    plusButton.style.backgroundColor="#EFEFEF";
    plusButton.style.color="#43546C";
    minusButton.style.backgroundColor="transparent";
    minusButton.style.color="#EFEFEF";
    submitButton.addEventListener('click', function(e) {
        e.preventDefault()
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
    });
    e.preventDefault()
})


/* submitButton.addEventListener('click', function(e) {
    let newValueInput = numberInput.value;
    let newValue = document.createElement('li');
    newValue.classList.add('income__value');
    newValue.innerHTML = newValueInput;
    expensesList.append(newValue);

    let newDescriptionInput = textInput.value;
    let newDescription = document.createElement('li');
    newDescription.classList.add('value__description');
    newDescription.innerHTML = newDescriptionInput;
    expensesList.append(newDescription);

    e.preventDefault()
}); */


/* submitButton.addEventListener('click', function() {
    let inputValue = numberInput.value;
    let newPlusValue = document.createElement('li');
    newPlusValue.innerHTML(inputValue);
    newPlusValue.classList.add('income__value');
    incomeList.append(newPlusValue);
}); */


