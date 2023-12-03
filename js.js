function calculateLoan() {
    const loanAmount = document.getElementById("loan-amount").value;
    const interestRate = document.getElementById("interest-rate").value / 100 / 12; // convert annual interest rate to monthly rate
    const loanTerm = document.getElementById("loan-term").value;

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    const paymentScheduleTable = document.getElementById("payment-schedule-table");

    // Clear the table body
    paymentScheduleTable.innerHTML = "";

    let remainingBalance = loanAmount;

    for (let i = 1; i <= loanTerm; i++) {
        const interestAmount = remainingBalance * interestRate;
        const principalAmount = monthlyPayment - interestAmount;

        remainingBalance -= principalAmount;

        const paymentDueDate = new Date();
        paymentDueDate.setMonth(paymentDueDate.getMonth() + i);

        const tableRow = paymentScheduleTable.insertRow();
        tableRow.insertCell().innerHTML = i;
        tableRow.insertCell().innerHTML = paymentDueDate.toLocaleDateString();
        tableRow.insertCell().innerHTML = "$" + monthlyPayment.toFixed(2);
        tableRow.insertCell().innerHTML = "$" + principalAmount.toFixed(2);
        tableRow.insertCell().innerHTML = "$" + interestAmount.toFixed(2);
        tableRow.insertCell().innerHTML = "$" + remainingBalance.toFixed(2);
    }
}
