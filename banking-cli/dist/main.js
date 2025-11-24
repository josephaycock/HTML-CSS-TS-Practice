import promptSync from "prompt-sync";
const prompt = promptSync();
let choice;
do {
    console.log("=== Banking CLI ===");
    console.log("1. View Balance");
    console.log("2. Deposit Funds");
    console.log("3. Withdraw Funds");
    console.log("4. Exit");
    choice = prompt("Select an option: ") || "";
    switch (choice) {
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid option. Please try again.");
    }
} while (choice !== "4");
