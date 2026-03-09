# GitHub Issues Tracker

## 📌 Project Overview

**GitHub Issues Tracker** is a web application designed to help developers and project managers **track, manage, and search issues** efficiently.  
The application fetches data from an API and presents it in a **clean, responsive card layout**. Users can filter issues by status, search by title, and click on any card to see detailed information in a modal popup.

This project demonstrates practical **JavaScript, API integration, and modern web design techniques**.

---

## 🚀 Features

- 🔐 **Login System** with demo credentials  
- 📋 **View Issues**: All issues are fetched from API and displayed dynamically  
- 🔍 **Search Functionality** to find issues by title  
- 📂 **Filter Issues**: All / Open / Closed  
- 🪟 **Modal Popup**: Shows detailed issue information  
- ⏳ **Loading Spinner** while data loads  
- 🎨 **Responsive Design** using TailwindCSS & DaisyUI  
- ✨ Hover animation on cards and buttons for better UI experience  

---

## 🛠 Technology Stack

- **HTML5**
- **CSS3 / Tailwind CSS / DaisyUI**
- **JavaScript (ES6)**
- **Font Awesome**
- **REST API**

---

## 🔑 Demo Login Credentials

```text
Username: admin
Password: admin123

project-folder/
│
├── index.html        # Login page
├── home.html         # Main dashboard
│
├── login.js          # Login functionality
├── script.js         # Load and display issues
├── modal.js          # Modal popup logic
├── search.js         # Search functionality
│
└── assets/           # Images, icons, and logos


⚙️ How to Run the Project

Clone or download the project repository.

Open the project folder.

Use Live Server or open index.html in a browser.

Login using the demo credentials.

Explore the dashboard, search, filter, and view issues.




📚 JavaScript Concepts Explained

Here are some key concepts used in the project, explained in plain language.

1️⃣ Difference Between var, let, and const

var: Declares a variable that is function-scoped. Can be re-declared and updated. Mostly used in older JavaScript code.

let: Declares a block-scoped variable. Can be updated but not re-declared in the same scope. Ideal for values that change.

const: Declares a block-scoped variable that cannot change. Used for constants or values that should remain the same.

Example:

var name = "Biddut";   
let age = 25;       
const country = "BD";

Human understanding:
Think of var like a public notice on a town board (anyone can update), let like a note on your desk (changes only in your area), and const like a fixed law (cannot change).

2️⃣ Spread Operator (...)

The spread operator expands elements from an array or object, making it easy to copy, merge, or manipulate data.

Example:

const numbers = [1,2,3];
const newNumbers = [...numbers, 4, 5];

Result: [1, 2, 3, 4, 5]

Human understanding:
Imagine you have a bag of apples [1,2,3] and want to add more. Instead of moving each apple one by one, you just spread them all into a new bag and add the new ones.

3️⃣ Difference Between map(), filter(), and forEach()

map() → Transforms each item and returns a new array.
Example: [1,2,3].map(n => n*2) → [2,4,6]

filter() → Selects items based on a condition. Returns a new array.
Example: [1,2,3,4].filter(n => n%2===0) → [2,4]

forEach() → Iterates over items without returning a new array.
Example: [1,2,3].forEach(n => console.log(n)) → prints 1 2 3

Human understanding:
map() = transform each item,
filter() = pick items you want,
forEach() = just do something with each item, no new list.

4️⃣ Arrow Functions

Arrow functions are a concise way to write functions in JavaScript. They are shorter, cleaner, and automatically bind this in some contexts.

Example:

const add = (a, b) => a + b;

Human understanding:
Instead of writing a full function block, it’s like writing a shortcut for a task that returns a value immediately.

5️⃣ Template Literals

Template literals allow you to create strings with embedded variables easily using backticks ` and ${}.

Example:

const name = "Biddut";
const message = `Hello ${name}, welcome to GitHub Tracker!`;

Output: Hello Biddut, welcome to GitHub Tracker!

Human understanding:
It’s like filling in a letter template with your name dynamically instead of rewriting the whole sentence.

👨‍💻 Author

This project was created as part of JavaScript practice to improve skills in API integration, DOM manipulation, and modern JS features.

📌 Notes

Hover animations are applied on buttons and cards for better UX.

Top border of issue cards indicates status: green for Open, purple for Closed.

Responsive design ensures the app works on mobile and desktop.


🎯 Conclusion

This project demonstrates a modern, clean, and functional dashboard for GitHub issue tracking. It incorporates best practices in JavaScript modularity, responsive design, and UI/UX interactions, making it an excellent base for further enhancement or integration with larger projects.
