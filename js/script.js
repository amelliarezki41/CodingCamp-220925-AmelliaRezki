console.log("Script loaded successfully.");
welcomeMessage();
function welcomeMessage() {
    let name = prompt("Siapa namamu? :");
    if (name) {
        document.getElementById("name").innerHTML = name;
    } else {
        alert("Welcome to my portfolio!");
    }
}

function validateForm() {
    let sender = document.getElementById("sender").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(sender, email, message);

    if (!sender || !email || !message) {
        alert("Tolong diisi semua ya form-nya!");
        return false;
    }

    alert("Thanks " + sender + "! Pesanmu sudah kekirim! 📧.");
    return true;
}