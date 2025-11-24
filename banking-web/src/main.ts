const balanceSpan = document.getElementById("balance") as HTMLSpanElement
const amountInput = document.getElementById("amount") as HTMLInputElement
const depositButton = document.getElementById("deposit-button") as HTMLButtonElement
const withdrawButton = document.getElementById("withdraw-button") as HTMLButtonElement
const messageParagraph = document.getElementById("message") as HTMLParagraphElement

let balance: number = 0;

function updateBalanceDisplay() {
  balanceSpan.textContent = balance.toFixed(2);
}