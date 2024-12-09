button.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById('mortgage-amount-error').textContent = " ";
    document.getElementById('mortgage-term-error').textContent = " ";
    document.getElementById('interest-rate-error').textContent = " ";
    document.getElementById('repayment-container-error').textContent = " ";

    const mortgageAmount = document.getElementById("mortgage-amount");
    const mortgageTerm = document.getElementById("mortgage-term");
    const interestRate = document.getElementById("interest-rate");
    const monthlyRepayment = document.getElementById("monthly-repayment");
    const totalRepayment = document.getElementById("total-repayment");
    const repayment = document.getElementById("repayment");
    const interestOnly = document.getElementById("interest-only");
    const resultContainer = document.getElementById("result-container");
    const cardContainer = document.getElementById("card-container");
    const clearForm = document.getElementById("clear-all");
    const queryType = document.querySelector('input[name="queryType"]:checked');

    let valid = true;

    if (mortgageAmount.value === "") {
        document.getElementById("mortgage-amount-error").textContent = "This field is required";
        document.getElementById("mortgage-amount").style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("mortgage-amount").style.border = "1px solid gray";
    }

    if (mortgageTerm.value === "") {
        document.getElementById("mortgage-term-error").textContent = "This field is required";
        document.getElementById("mortgage-term").style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("mortgage-term").style.border = "1px solid gray";
    }

    if (interestRate.value === "") {
        document.getElementById("interest-rate-error").textContent = "This field is required";
        document.getElementById("interest-rate").style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("interest-rate").style.border = "1px solid gray";
    }

    if (!queryType) {
        document.getElementById("repayment-container-error").textContent = "This field is required";
        valid = false;
    } else if (queryType === repayment) {
        const monthlyInterestRate = interestRate.value / 12 / 100;
        const numberOfPayments = mortgageTerm.value * 12;
        const monthlyRepayments = mortgageAmount.value * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        monthlyRepayment.textContent = monthlyRepayments.toFixed(2);

        const totalRepayments = monthlyRepayments * mortgageTerm.value * 12;

        totalRepayment.textContent = totalRepayments.toFixed(2);

        cardContainer.style.display = "none";
        resultContainer.classList.remove("hidden");
        valid = true;
    } else if (queryType === interestOnly) {
        const monthlyInterestRate = interestRate.value / 12 / 100;
        const numberOfPayments = mortgageTerm.value * 12;

        const monthlyRepayments = mortgageAmount.value * monthlyInterestRate;

        monthlyRepayment.textContent = monthlyRepayments.toFixed(2);

        const totalRepayments = monthlyRepayments * numberOfPayments;

        totalRepayment.textContent = totalRepayments.toFixed(2);

        cardContainer.style.display = "none";
        resultContainer.classList.remove("hidden");
        valid = true;
    }

    clearForm.addEventListener("click", function (e) {
        e.preventDefault();
        location.reload();
    });
});
