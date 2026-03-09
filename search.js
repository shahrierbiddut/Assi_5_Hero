const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

async function searchIssues() {

    const query = searchInput.value.trim();

    if (!query) {
        displayIssues(allIssues);
        return;
    }

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${query}`);
    const data = await res.json();

    displayIssues(data.data);
}

searchBtn.addEventListener("click", searchIssues);