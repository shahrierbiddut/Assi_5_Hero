# GitHub Issues Tracker

## 📌 Project Overview

**GitHub Issues Tracker** is a modern, fully-functional web application designed to help developers and project managers **track, manage, and search issues** efficiently.  

The application fetches real-time data from a REST API and presents it in a **clean, responsive card layout**. Users can securely log in, filter issues by status, search by keywords, and click on any issue card to view detailed information in an elegant modal popup.

This project demonstrates practical implementation of **JavaScript, REST API integration, modern web design, form validation, and state management**.

---

## 🚀 Features

### Authentication
- 🔐 **Secure Login System** with form validation
- 📝 **Input validation** for username and password
- 💾 **LocalStorage integration** to maintain session state
- ⌨️ **Enter key support** for faster login

### Issue Management
- 📋 **Dynamic Issue Display** - All issues fetched from live API
- 🔍 **Real-time Search** with debouncing for better performance
- 📂 **Filter Issues by Status** - All / Open / Closed
- 🎯 **Priority Indicators** - HIGH (🔴), MEDIUM (🟡), LOW (🟢)

### User Interface
- 🪟 **Beautiful Modal Popup** - Detailed issue information view
- ⏳ **Loading Spinner** - Visual feedback while fetching data
- 🎨 **Fully Responsive Design** - Works on desktop, tablet, mobile
- ✨ **Smooth Animations & Transitions** - Hover effects, fade-ins, slide animations
- 🌈 **Gradient Backgrounds** - Modern purple-blue gradient theme

### Technical Features
- 📡 **Error Handling** - Graceful error messages for API failures
- 🔄 **Debounced Search** - Optimized API calls (300ms delay)
- 🎭 **Copy to Clipboard** - Quick issue ID copying
- ⌨️ **Keyboard Support** - Escape key to close modal, Enter to search

---

## 🛠 Technology Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5, CSS3 |
| **Styling** | Tailwind CSS, DaisyUI |
| **Scripting** | JavaScript (ES6+) |
| **Icons** | Font Awesome 7.0.1 |
| **API** | REST API (phi-lab-server) |
| **Animations** | CSS Keyframes, Transitions |

---

## 📂 Project Structure

```
Assi_5_Hero/
│
├── index.html              # 🔑 Login page
├── home.html               # 📊 Main dashboard
│
├── login.js                # 🔐 Login logic & validation
├── script.js               # 📋 API integration & issue display
├── search.js               # 🔍 Search with debouncing
├── modal.js                # 🪟 Modal popup management
│
├── tailwind.config.js      # ⚙️ Tailwind configuration
├── README.md               # 📚 Documentation
│
└── assets/
    └── github-logo.png     # GitHub branding
```

---

## 🔑 Demo Login Credentials

```
Username: admin
Password: admin123
```

> **Note:** These are demo credentials for testing purposes. In production, implement proper authentication with a backend service.

---

## ⚡ Quick Start Guide

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API and CDN resources)

### Installation & Setup

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/shahrierbiddut/Assi_5_Hero.git
   cd Assi_5_Hero
   ```

2. **Open in Browser**
   - Option A: Double-click `index.html`
   - Option B: Use Live Server (VS Code Extension)
   - Option C: `python -m http.server` (Python simple server)

3. **Login**
   - Username: `admin`
   - Password: `admin123`

4. **Explore Features**
   - View all issues from the API
   - Use filters to sort by status
   - Search for specific issues
   - Click any issue to see details

---

## 🎯 Key Features Explained

### 1. **Login System**
- Form validation for both fields
- Error messages for invalid input
- Credentials stored in localStorage
- Keyboard support (Enter to submit)

### 2. **Issue Display**
- Fetches issues from API on page load
- Displays in responsive grid layout
- Color-coded priority badges
- Status indicators (Open/Closed)
- Hover animations for better interactivity

### 3. **Search Functionality**
- Real-time search as you type
- Debounced API calls (prevents excessive requests)
- Empty state handling
- Error handling for failed searches

### 4. **Modal Details View**
- Shows complete issue information
- Priority and status badges
- Author and assignee details
- Copy issue ID to clipboard
- Close with Escape key or click outside

### 5. **Responsive Design**
- Mobile-first approach
- Tailwind CSS utility classes
- DaisyUI components for consistency
- Works seamlessly on all screen sizes

---

## 📚 JavaScript Concepts Used

### **1. Async/Await & Fetch API**
Fetches issue data from REST API with proper error handling.

```javascript
async function loadIssues() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        displayIssues(data.data);
    } catch (err) {
        console.error("Error:", err);
    }
}
```

### **2. DOM Manipulation**
Dynamically creates and updates HTML elements.

```javascript
const card = document.createElement("div");
card.innerHTML = `<h3>${issue.title}</h3>`;
container.appendChild(card);
```

### **3. Event Listeners**
Handles user interactions (click, input, keypress).

```javascript
button.addEventListener("click", handleClick);
input.addEventListener("input", handleInput);
```

### **4. Array Methods**
Filters and processes issue data.

```javascript
const openIssues = allIssues.filter(issue => 
    issue.status === "OPEN"
);
```

### **5. LocalStorage**
Persists user login state across sessions.

```javascript
localStorage.setItem("isLoggedIn", "true");
const loggedIn = localStorage.getItem("isLoggedIn");
```

### **6. Debouncing**
Optimizes search performance by limiting API calls.

```javascript
let searchTimeout;
function debounce() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(searchIssues, 300);
}
```

### **7. Conditional Rendering**
Displays different UI based on data state.

```javascript
if (issues.length === 0) {
    container.innerHTML = "No issues found";
}
```

### **8. String Interpolation (Template Literals)**
Creates dynamic HTML with embedded variables.

```javascript
const message = `Hello, ${userName}!`;
```

---

## 🌐 API Integration

### Endpoint Used
```
GET https://phi-lab-server.vercel.app/api/v1/lab/issues
GET https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={query}
```

### Response Format
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "title": "Fix login bug",
            "description": "Users cannot login...",
            "status": "OPEN",
            "priority": "HIGH",
            "author": "John Doe",
            "assignee": "Jane Smith",
            "date": "2024-01-15"
        }
    ]
}
```

---

## 🎨 Design System

### Color Palette
- **Primary Gradient:** `#667eea` → `#764ba2` (Purple-Blue)
- **Success (Open):** `#00A96E` (Green)
- **Warning (Closed):** `#A855F7` (Purple)
- **Text Dark:** `#111827` (Gray-900)
- **Text Light:** `#64748B` (Gray-500)

### Typography
- **Font:** Geist (from Google Fonts)
- **Heading:** Bold, 24-32px
- **Body:** Regular, 14-16px

---

## ✅ Testing Checklist

- [ ] Login with valid credentials
- [ ] Attempt login with invalid credentials
- [ ] Display all issues from API
- [ ] Filter by "Open" status
- [ ] Filter by "Closed" status
- [ ] Search for a specific issue
- [ ] Click issue card to open modal
- [ ] Close modal with Escape key or outside click
- [ ] Copy issue ID from modal
- [ ] Responsive design on mobile (375px)
- [ ] Responsive design on tablet (768px)
- [ ] Responsive design on desktop (1920px)

---

## 🚀 Deployment

### Deploy on Netlify
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Set build command: (leave empty for static site)
4. Set publish directory: `/`
5. Deploy!

### Deploy on Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Click Deploy
4. Share live URL

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Shahriar Biddut**  
GitHub: [@shahrierbiddut](https://github.com/shahrierbiddut)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

---

## 📞 Support

For issues or questions, please open a GitHub issue or contact the maintainer.

---

**Last Updated:** March 2026  
**Version:** 1.0.0

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
