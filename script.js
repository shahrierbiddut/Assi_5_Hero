const issuesContainer = document.getElementById("issuesContainer");
const issueCount = document.getElementById("issueCount");
const loader = document.getElementById("loader");

let allIssues = [];
const API_URL = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

// Load Issues from API
async function loadIssues() {
    loader.classList.remove("hidden");
    issuesContainer.innerHTML = "";

    try {
        const res = await fetch(API_URL);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data.data && Array.isArray(data.data)) {
            allIssues = data.data;
            displayIssues(allIssues);
        } else {
            throw new Error("Invalid data format");
        }

    } catch (err) {
        console.error("Error loading issues:", err);
        issuesContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-red-500 font-semibold">❌ Failed to load issues</p>
                <p class="text-gray-500 text-sm mt-2">${err.message}</p>
            </div>
        `;
    } finally {
        loader.classList.add("hidden");
    }
}

// Display Issues in Grid
function displayIssues(issues) {
    issuesContainer.innerHTML = "";

    if (issues.length === 0) {
        issuesContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-gray-500 font-semibold">No issues found</p>
            </div>
        `;
        issueCount.innerText = "0 Issues";
        return;
    }

    issueCount.innerText = issues.length + " Issues";

    issues.forEach(issue => {
        const priority = (issue.priority || "LOW").toUpperCase();
        const status = (issue.status || "OPEN").toUpperCase();

        // Priority Styling
        let priorityColor = "",
            priorityTextColor = "",
            priorityBadge = "";
        if (priority === "HIGH") {
            priorityColor = "bg-red-100";
            priorityTextColor = "text-red-600";
            priorityBadge = "🔴";
        } else if (priority === "MEDIUM") {
            priorityColor = "bg-yellow-100";
            priorityTextColor = "text-yellow-600";
            priorityBadge = "🟡";
        } else if (priority === "LOW") {
            priorityColor = "bg-green-100";
            priorityTextColor = "text-green-600";
            priorityBadge = "🟢";
        }

        // Status Styling
        let borderColor = "";
        let statusBadge = "";
        if (status === "OPEN") {
            borderColor = "border-green-500";
            statusBadge = "✅ Open";
        } else if (status === "CLOSED") {
            borderColor = "border-purple-500";
            statusBadge = "❌ Closed";
        }

        // Create Card
        const card = document.createElement("div");
        card.className = `shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg border-t-4 ${borderColor} hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer bg-white`;

        card.innerHTML = `
            <div class="px-4 py-4">
                <!-- Header -->
                <div class="flex justify-between items-start pb-4">
                    <span class="text-xs font-bold text-gray-400">#${issue.id}</span>
                    <h5 class="font-bold text-[11px] ${priorityColor} ${priorityTextColor} px-3 py-1 rounded-full">
                        ${priorityBadge} ${priority}
                    </h5>
                </div>

                <!-- Title -->
                <h3 class="font-bold text-[15px] pb-2 text-gray-800 line-clamp-2">${issue.title}</h3>

                <!-- Description -->
                <p class="text-[#64748B] text-[13px] line-clamp-2">${issue.description || "No description provided"}</p>
            </div>

            <!-- Footer -->
            <div class="border-t border-gray-200 px-4 py-3 bg-gray-50">
                <p class="text-[#64748B] text-[12px] mb-2">
                    <strong>Author:</strong> ${issue.author || "Unknown"}
                </p>
                <p class="text-[#64748B] text-[12px]">
                    <strong>Date:</strong> ${new Date(issue.date).toLocaleDateString()}
                </p>
            </div>
        `;

        // Click event to show modal
        card.addEventListener("click", () => showModal(issue));

        issuesContainer.appendChild(card);
    });
}

// Filter Issues by Status
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

    if (type === "ALL") {
        displayIssues(allIssues);
    } else {
        const filtered = allIssues.filter(issue =>
            issue.status.toUpperCase() === type
        );
        displayIssues(filtered);
    }
}

// Load issues on page load
document.addEventListener('DOMContentLoaded', loadIssues);