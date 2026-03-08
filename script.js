const issuesContainer = document.getElementById("issuesContainer");
const issueCount = document.getElementById("issueCount");

let allIssues = [];

// Load Issues
async function loadIssues() {
    try {
        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const data = await res.json();
        allIssues = data.data;
        displayIssues(allIssues);
    } catch (err) {
        console.log("Error loading issues:", err);
    }
}

// Display Issues
function displayIssues(issues) {
    issuesContainer.innerHTML = "";
    issueCount.innerText = issues.length + " Issues";

    issues.forEach(issue => {
        const priority = (issue.priority || "").toUpperCase();
        const status = (issue.status || "").toUpperCase();

        let priorityColor = "",
            priorityTextColor = "";
        if (priority === "HIGH") {
            priorityColor = "bg-red-100";
            priorityTextColor = "text-red-500";
        } else if (priority === "MEDIUM") {
            priorityColor = "bg-yellow-100";
            priorityTextColor = "text-yellow-600";
        } else if (priority === "LOW") {
            priorityColor = "bg-gray-200";
            priorityTextColor = "text-gray-500";
        }

        let borderColor = "";
        if (status === "OPEN") borderColor = "border-green-500";
        else if (status === "CLOSED") borderColor = "border-purple-500";

        const card = document.createElement("div");
        card.className = `shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-md border-t-4 ${borderColor} hover:shadow-lg hover:scale-105 transition-transform duration-200`;

        card.innerHTML = `
        <div class="px-4 py-4">
            <div class="flex justify-between py-4">
                <i class="fa-regular fa-circle-check text-green-500 text-xl"></i>
                <h5 class="font-medium text-[12px] ${priorityColor} ${priorityTextColor} px-6 py-1 rounded-full">
                    ${priority}
                </h5>
            </div>
            <h3 class="font-semibold text-[14px] pb-2">${issue.title}</h3>
            <p class="text-[#64748B] text-[12px]">${issue.description}</p>
        </div>
        <div class="border-t-2 border-[#E4E4E7]">
            <p class="text-[#64748B] text-[12px] px-4 py-3">
                #${issue.id} by ${issue.author} <br>
                ${new Date(issue.date).toLocaleDateString()}
            </p>
        </div>
        `;

        // Click event for modal
        card.addEventListener("click", () => showModal(issue));

        issuesContainer.appendChild(card);
    });
}

// Filter Issues
const btnAll = document.getElementById('btnAll');
const btnOpen = document.getElementById('btnOpen');
const btnClosed = document.getElementById('btnClosed');

function setActiveButton(selected) {
    btnAll.classList.remove('btn-primary');
    btnOpen.classList.remove('btn-primary');
    btnClosed.classList.remove('btn-primary');

    if (selected === 'ALL') btnAll.classList.add('btn-primary');
    else if (selected === 'OPEN') btnOpen.classList.add('btn-primary');
    else if (selected === 'CLOSED') btnClosed.classList.add('btn-primary');
}

function filterIssues(type) {
    setActiveButton(type);
    if (type === "ALL") displayIssues(allIssues);
    else displayIssues(allIssues.filter(issue => issue.status.toUpperCase() === type));
}

// Load issues initially
loadIssues();