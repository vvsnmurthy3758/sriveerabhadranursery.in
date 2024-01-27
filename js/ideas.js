// js/ideas.js

document.addEventListener('DOMContentLoaded', function () {
    const ideasContainer = document.getElementById('ideasContainer');
    const searchInput = document.getElementById('search');
    const tagsContainer = document.getElementById('tagsContainer');

    // Sample ideas data
    const ideasData = [
        { title: 'Corridor Garden', tags: ['corridor', 'garden'], description: 'Create a beautiful garden along your corridor.' },
        { title: 'Terrace Garden', tags: ['terrace', 'garden'], description: 'Transform your terrace into a vibrant garden space.' },
        { title: 'Indoor Garden', tags: ['indoor', 'garden'], description: 'Bring the outdoors inside with an indoor garden.' },
        { title: 'Aquarium Setup', tags: ['aquarium'], description: 'Set up a stunning aquarium with colorful fish and plants.' },
        { title: 'Vegetable Garden', tags: ['vegetables', 'garden'], description: 'Grow your own fresh vegetables in your backyard.' },
        // Add more ideas as needed
    ];

    // Function to display ideas based on search input and tags
    function displayIdeas(searchTerm = '', selectedTags = []) {
        const filteredIdeas = ideasData.filter(idea => {
            const titleMatches = idea.title.toLowerCase().includes(searchTerm.toLowerCase());
            const tagsMatch = selectedTags.length === 0 || selectedTags.every(tag => idea.tags.includes(tag));

            return titleMatches && tagsMatch;
        });

        // Clear existing content
        ideasContainer.innerHTML = '';

        // Display filtered ideas
        filteredIdeas.forEach(idea => {
            const card = document.createElement('div');
            card.className = 'box idea-card';
            card.innerHTML = `
                <h2>${idea.title}</h2>
                <p>${idea.description}</p>
            `;
            ideasContainer.appendChild(card);
        });
    }

    // Function to create tags dynamically
    function createTags() {
        const allTags = ideasData.reduce((tags, idea) => {
            return tags.concat(idea.tags);
        }, []);

        const uniqueTags = [...new Set(allTags)];

        // Clear existing tags
        tagsContainer.innerHTML = '';

        // Create tag elements
        uniqueTags.forEach(tag => {
            const tagButton = document.createElement('button');
            tagButton.textContent = tag;
            tagButton.className = 'tag-btn';
            tagsContainer.appendChild(tagButton);

            // Add click event listener to filter ideas by tag
            tagButton.addEventListener('click', function () {
                const selectedTags = [tag];
                displayIdeas(searchInput.value, selectedTags);
            });
        });
    }

    // Initial display of all ideas and tags
    displayIdeas();
    createTags();

    // Add event listener for search input
    searchInput.addEventListener('input', function () {
        const selectedTags = Array.from(tagsContainer.querySelectorAll('.tag-btn.active')).map(tagBtn => tagBtn.textContent);
        displayIdeas(this.value, selectedTags);
    });

    // Add event listener for tag buttons
    tagsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('tag-btn')) {
            event.target.classList.toggle('active');
           
