const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function() {
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("userPin").value;

    // simple check
    if (username === "admin" && password === "admin123") {
        alert("Login successful");
        window.location.href = "home.html";
    } else {
        alert("Wrong username or password");
    }
});