form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById('first-name-error').textContent = " ";
    document.getElementById('last-name-error').textContent = " ";
    document.getElementById('email-error').textContent = " ";
    document.getElementById('message-error').textContent = " ";
    document.getElementById('consent-error').textContent = " ";
    document.getElementById('query-error').textContent = " ";

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const alertCard = document.getElementById("alert-card");

    let valid = true;

    if (firstName === "") {
        document.getElementById("first-name-error").textContent = "This field is required";
        document.getElementById("first-name").style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("first-name").style.border = "2px solid hsl(169, 82%, 27%)";
    }

    if (lastName === "") {
        document.getElementById("last-name-error").textContent = "This field is required";
        document.getElementById("last-name").style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("last-name").style.border = "2px solid hsl(169, 82%, 27%)";
    }

    if (email === "") {
        document.getElementById("email-error").textContent = "Please enter a valid email address";
        document.getElementById("email").style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("email").style.border = "2px solid hsl(169, 82%, 27%)";
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "This field is required";
        document.getElementById("message").style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("message").style.border = "2px solid hsl(169, 82%, 27%)";
    }

    if (!consent) {
        document.getElementById("consent-error").textContent = "To submit this form, please consent to being contacted";
        valid = false;
    }

    if (!queryType) {
        document.getElementById("query-error").textContent = "Please select a query type";
        valid = false;
    }

    if (valid) {
        alertCard.classList.remove("hidden");
        setTimeout(function () {
            form.submit();
        }, 3000)
    }
});
