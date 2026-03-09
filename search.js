const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

let searchTimeout;
const SEARCH_DELAY = 300; // Debounce delay in ms

// Search with debouncing
function searchIssuesDebounced() {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        searchIssues();
    }, SEARCH_DELAY);
}

// Main search function
async function searchIssues() {
    const query = searchInput.value.trim();

    // Show all issues if search is empty
    if (!query) {
        displayIssues(allIssues);
        return;
    }

    try {
        // Show loader
        loader.classList.remove("hidden");

        // Search API call
        const res = await fetch(
            `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(query)}`
        );

        if (!res.ok) {
            throw new Error(`Search failed: ${res.status}`);
        }

        const data = await res.json();

        if (data.data && Array.isArray(data.data)) {
            displayIssues(data.data);
        } else {
            displayIssues([]);
        }

    } catch (err) {
        console.error("Search error:", err);
        issuesContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-red-500 font-semibold">❌ Search failed</p>
                <p class="text-gray-500 text-sm mt-2">${err.message}</p>
            </div>
        `;
    } finally {
        loader.classList.add("hidden");
    }
}

// Event listeners
searchBtn.addEventListener("click", searchIssues);
searchInput.addEventListener("input", searchIssuesDebounced);

// Allow Enter key for search
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        clearTimeout(searchTimeout);
        searchIssues();
    }
});