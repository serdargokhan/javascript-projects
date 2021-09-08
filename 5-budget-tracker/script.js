const budgetInput = document.querySelector(".budget-input-text");
const calcButton = document.querySelector(".calculate-btn");
const expenseType = document.querySelector(".expense-input-text");
const expenseInput = document.querySelector(".expense-amount-input-text");
const addExpenseButton = document.querySelector(".add-expense-btn");
const budgetValue = document.querySelector(".budget-value");
const expenseValue = document.querySelector(".expense-value");
const balanceValue = document.querySelector(".balance-value");
const sectionFour = document.querySelector(".section-4");
let budgetNumber = [""];
let expenseNumber = [0];
let expenseText, amountNumber, deleteButton;
let budgetUpdateValue = 0;
let expenseAmount = 0;
let count = 0;

budgetInput.addEventListener("change", getBudget);

function getBudget(e) {
    budgetNumber.push(e.target.value);
}

calcButton.addEventListener("click", calcBudget);

function calcBudget() {
    !budgetNumber[budgetNumber.length - 1].includes("-") ? budgetValue.innerHTML = `${budgetNumber[budgetNumber.length-1]}&#x20BA;` : budgetValue.innerHTML = "&#x20BA;";
    !budgetNumber[budgetNumber.length - 1].includes("-") ? balanceValue.innerHTML = `${budgetNumber[budgetNumber.length-1]}&#x20BA;` : balanceValue.innerHTML = "&#x20BA;";
    budgetInput.value = "";
    budgetUpdateValue = Number((budgetValue.innerText).slice(0, -1));
    updateBalance(expenseAmount);
}

expenseType.addEventListener("change", getExpense);

function getExpense(e) {
    expenseText = e.target.value;
}

expenseInput.addEventListener("change", getExpenseAmount);

function getExpenseAmount(e) {
    amountNumber = e.target.value;
}

addExpenseButton.addEventListener("click", addExpense);

function addExpense() {
    if (!expenseText == "" && amountNumber != 0 && expenseInput.value != "") {
        html = `
        <div class="new-item" data-index="${count}">
            <span>-${expenseText}</span>
            <span class="new-item-expense-value">${amountNumber}&#x20BA;</span>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>
        `;
        sectionFour.insertAdjacentHTML("beforeend", html);
        expenseNumber.push(Number(amountNumber));
        expenseAmount = expenseNumber.reduce((acc, cur) => acc + cur);
        expenseValue.innerHTML = `${expenseAmount}&#x20BA;`;
        updateBalance(expenseAmount);
        expenseInput.value = "";
        expenseType.value = "";
        expenseText = "";
        count++;
    }
}

function updateBalance(e) {
    const sum = budgetUpdateValue - e;
    balanceValue.innerHTML = `${sum}&#x20BA;`;
    if (sum < 0) balanceValue.style.color = "#F04143";
}

sectionFour.addEventListener("click", deleteItem);

//BUG

function deleteItem(e) {
    const deletedExpenseValue = document.querySelector(".new-item-expense-value");
    const newItem = document.querySelector(".new-item");
    if(e.target.className === "fas fa-trash") {
        expenseNumber.pop(Number((deletedExpenseValue.innerHTML).slice(0, -1)));
        console.log(expenseNumber);
        expenseAmount = expenseNumber.reduce((acc, cur) => acc + cur);
        expenseValue.innerHTML = `${expenseAmount}&#x20BA;`;
        updateBalance(expenseAmount);
        e.path[2].remove();
    }
}