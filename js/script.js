welcomeMessage();

//Welcome Messsage Function
function welcomeMessage(){
    //Show Pop Up
    let name = prompt("Welcome to Dian Rahmat Yuneri Company! What is your name?");

    //Validation Input
    if (name===null || name.trim()==="") {
        //Jika user pencet cancel, maka jadi "Guest"
        name="Guest";
    }

    //Display Welcome Message
    document.getElementById('welcome-speech').innerHTML = `Hello, ${name}! Welcome to Dian Rahmat Yuneri Company!`;
}

const form = document.getElementById("messageForm");
form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop kirim form dulu

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Reset pesan error
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    //Validasi nama
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    // Validasi email (regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent = "Email cannot be empty";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Email is not valid";
        valid = false;
    }

    //Validasi pesan
    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty";
        valid = false;
    }

    //Jike semua benar
    if (valid) {
        alert("Your message has been sent successfully!");
    }
});