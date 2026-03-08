const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function searchIssues() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) { displayIssues(allIssues); return; }

    const filtered = allIssues.filter(issue => issue.title.toLowerCase().includes(query));
    displayIssues(filtered);
}

searchInput.addEventListener("input", searchIssues);
searchBtn.addEventListener("click", searchIssues);