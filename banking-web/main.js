const balanceSpan = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");
const messageParagraph = document.getElementById("message");
let balance = 0;
function updateBalanceDisplay() {
    balanceSpan.textContent = balance.toFixed(2);
}
function showMessage(text, isError = false) {
    messageParagraph.textContent = text;
    messageParagraph.style.color = isError ? "red" : "black";
}
depositButton.addEventListener("click", () => {
    const rawValue = amountInput.value;
    const amount = Number(rawValue);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount to deposit.", true);
        return;
    }
    balance += amount;
    updateBalanceDisplay();
    showMessage(`Deposited $${amount.toFixed(2)}.`);
    amountInput.value = "";
});
withdrawButton.addEventListener("click", () => {
    const rawValue = amountInput.value;
    const amount = Number(rawValue);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount to withdraw.", true);
        return;
    }
    if (amount > balance) {
        showMessage("Insufficient Funds.", true);
        return;
    }
    balance -= amount;
    updateBalanceDisplay();
    showMessage(`Withdrawn $${amount.toFixed(2)}.`);
    amountInput.value = "";
});
updateBalanceDisplay();
showMessage("Welcome to Simple Bank.");
//npx tsc src/main.ts --target ES6 --outFile main.js
