const detailModal = document.getElementById('detailModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

// Show modal with issue details
function showModal(issue) {
    const priority = (issue.priority || "LOW").toUpperCase();
    const status = (issue.status || "OPEN").toUpperCase();

    // Priority styling
    let priorityStyle = "badge-error";
    let statusStyle = "badge-success";

    if (priority === "MEDIUM") priorityStyle = "badge-warning";
    if (priority === "LOW") priorityStyle = "badge-info";

    if (status === "CLOSED") statusStyle = "badge-error";

    // Format date
    const formattedDate = new Date(issue.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Modal content
    modalContent.innerHTML = `
        <div class="space-y-4">
            <!-- Header -->
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <span class="badge ${priorityStyle}">${priority}</span>
                    <span class="badge ${statusStyle}">${status}</span>
                </div>
                <h2 class="text-2xl font-bold text-gray-900">${issue.title}</h2>
            </div>

            <!-- Issue ID and Date -->
            <div class="bg-gray-100 rounded-lg p-3">
                <p class="text-sm text-gray-600">
                    <strong>Issue ID:</strong> #${issue.id}
                </p>
                <p class="text-sm text-gray-600 mt-1">
                    <strong>Date Created:</strong> ${formattedDate}
                </p>
            </div>

            <!-- Author and Assignee -->
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-blue-50 rounded-lg p-3">
                    <p class="text-xs text-gray-500 font-semibold">AUTHOR</p>
                    <p class="font-semibold text-gray-900 mt-1">${issue.author || "Unknown"}</p>
                </div>
                <div class="bg-purple-50 rounded-lg p-3">
                    <p class="text-xs text-gray-500 font-semibold">ASSIGNEE</p>
                    <p class="font-semibold text-gray-900 mt-1">${issue.assignee || "Unassigned"}</p>
                </div>
            </div>

            <!-- Description -->
            <div>
                <p class="text-xs font-semibold text-gray-500 uppercase mb-2">Description</p>
                <p class="text-gray-700 text-sm leading-relaxed">
                    ${issue.description || "No description provided"}
                </p>
            </div>

            <!-- Metadata -->
            <div class="border-t pt-4 grid grid-cols-2 gap-3">
                <div>
                    <p class="text-xs text-gray-500 uppercase font-semibold">Status</p>
                    <p class="text-sm font-semibold text-gray-900 mt-1">${status}</p>
                </div>
                <div>
                    <p class="text-xs text-gray-500 uppercase font-semibold">Priority</p>
                    <p class="text-sm font-semibold text-gray-900 mt-1">${priority}</p>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-2 pt-4">
                <button class="btn btn-sm btn-primary flex-1" onclick="copyIssueId(${issue.id})">
                    Copy Issue ID
                </button>
                <button class="btn btn-sm btn-outline flex-1" onclick="closeModal()">
                    Close
                </button>
            </div>
        </div>
    `;

    detailModal.classList.remove('hidden');
}

// Close modal
function closeModal() {
    detailModal.classList.add('hidden');
}

// Copy issue ID to clipboard
function copyIssueId(issueId) {
    const textToCopy = `#${issueId}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert(`✅ ${textToCopy} copied to clipboard!`);
    }).catch(() => {
        alert("Failed to copy");
    });
}

// Event listeners
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !detailModal.classList.contains('hidden')) {
        closeModal();
    }
});