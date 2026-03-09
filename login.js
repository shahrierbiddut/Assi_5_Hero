const loginBtn = document.getElementById("loginBtn");
const userInput = document.getElementById("userInput");
const userPin = document.getElementById("userPin");

loginBtn.addEventListener("click", handleLogin);

// Allow Enter key to submit
userPin.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleLogin();
});

function handleLogin() {
    const username = userInput.value.trim();
    const password = userPin.value.trim();

    const validUser = "admin";
    const validPass = "admin123";

    // Validation
    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    if (username.length < 5) {
        alert("Username must be at least 5 characters");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    // Check credentials
    if (username === validUser && password === validPass) {
        // Store login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);

        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("❌ Invalid username or password!\n\nDemo Credentials:\nUsername: admin\nPassword: admin123");
        // Clear fields
        userInput.value = "";
        userPin.value = "";
    }
}