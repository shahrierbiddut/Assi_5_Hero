const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {
    const input = document.getElementById("searchInput").value.toLowerCase();

    if (input === "") {
        displayIssues(allIssues);
        return;
    }

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues`)
        .then(res => res.json())
        .then(data => {
            const issues = data.data;

            // Search filter
            const filtered = issues.filter(issue =>
                issue.title.toLowerCase().includes(input) ||
                issue.description.toLowerCase().includes(input)
            );

            displayIssues(filtered);
        })
        .catch(() => {
            alert("Search error");
        });
});