const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", handleLogin);

function handleLogin() {
    const username = document.getElementById("userInput").value.trim();
    const password = document.getElementById("userPin").value.trim();

    const validUser = "admin";
    const validPass = "admin123";

    if (username === validUser && password === validPass) {
        alert("Login successful");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
}