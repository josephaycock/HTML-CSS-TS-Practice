import promptSync from "prompt-sync";

const prompt = promptSync();

let choice: string;
let balance: number = 0;

do {
  console.log("=== Banking CLI ===");
  console.log("1. View Balance");
  console.log("2. Deposit Funds");
  console.log("3. Withdraw Funds");
  console.log("4. Exit\n");

  choice = prompt("Select an option: ") || "";

  switch (choice) {
    case "1":
      console.log(`\nCurrent Balance: $${balance}\n`);
      break;
    case "2":
      const depositAmount = Number(prompt("Enter amount to deposit: "));
      if (depositAmount < 0) {
        console.log("Invalid Deposit.");
      } else {
        balance += depositAmount;
      }
      console.log(`Deposited: $${balance}`);
      break;
    case "3":
      const withdrawAmount = Number(prompt("Enter amount to withdraw: "));

      if (withdrawAmount <= 0) {
        console.log("Invalid amount. Must be greater than 0.");
      } else if (withdrawAmount > balance) {
        console.log("Insufficient funds.");
      } else {
        balance -= withdrawAmount;
        console.log(`Withdrew: $${withdrawAmount}`);
      }

      console.log(`Current Balance: $${balance}\n`);
      break;
    case "4":
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid option. Please try again.\n");
  }
} while (choice !== "4");
