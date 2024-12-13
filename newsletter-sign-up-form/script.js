button.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("email-error").textContent = " ";

    const mainImage = document.getElementById("main-image");
    const messageContainer = document.getElementById("message-container");
    const container = document.getElementById("container");
    const messageButton = document.getElementById("message-container-button");
    const email = document.getElementById("email").value;

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("email-error").textContent = "Valid email required";
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("email").style.backgroundColor = "hsl(4, 79.40%, 86.70%)";

    } else {
        mainImage.style.display = "none";
        container.style.display = "none";
        messageContainer.classList.remove("hidden");
        document.getElementById("message-container-paragraph").textContent = `A confirmation email has been sent to ${email}. Please open it and click the
        button inside to confirm your subscription`
    }

    messageButton.addEventListener("click", function (e) {
        e.preventDefault();
        location.reload();
    });
}) 
