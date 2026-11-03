const welcomeButton = document.getElementById("welcome-button");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function () {
    message.textContent =
        "Hello, Jaswanth! Welcome to your Jenkins learning project.";
});
