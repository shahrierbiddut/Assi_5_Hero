const detailModal = document.getElementById('detailModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

function showModal(issue) {
    modalContent.innerHTML = `
        <h2 class="text-xl font-bold mb-3">${issue.title}</h2>
        <p><strong>Status:</strong> ${issue.status}</p>
        <p><strong>Priority:</strong> ${issue.priority}</p>
        <p><strong>Author:</strong> ${issue.author}</p>
        <p><strong>Date:</strong> ${new Date(issue.date).toLocaleDateString()}</p>
        <p class="mt-4">${issue.description}</p>
        <p><strong>Assignee:</strong> ${issue.assignee || 'Unassigned'}</p>
    `;
    detailModal.classList.remove('hidden');
}

function closeModal() {
    detailModal.classList.add('hidden');
}

closeModalBtn.addEventListener('click', closeModal);
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal();
});