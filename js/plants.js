// js/plants.js

document.addEventListener('DOMContentLoaded', function () {
  const plantsContainer = document.getElementById('plantsContainer');
  const searchInput = document.getElementById('search');
  const categoryButtons = document.querySelectorAll('.category-btn');

  // Sample plant data
  const plantsData = [
    {
        "name": "Rose",
        "scientific_name": "Rosa",
        "common_name": "Rose",
        "category": "Flowering Plants",
        "suitability": "Indoor/Outdoor",
        "season": "Year-round",
        "watering": "Regular",
        "description": "The rose is a woody perennial flowering plant."
    },
    {
        "name": "Ficus elastica",
        "scientific_name": "Ficus elastica",
        "common_name": "Rubber Plant",
        "category": "Indoor Plants",
        "suitability": "Indoor",
        "season": "Year-round",
        "watering": "Moderate",
        "description": "The rubber plant is a popular indoor plant known for its glossy leaves."
    },
    {
        "name": "Lavandula",
        "scientific_name": "Lavandula",
        "common_name": "Lavender",
        "category": "Flowering Plants",
        "suitability": "Outdoor",
        "season": "Spring to Summer",
        "watering": "Low",
        "description": "Lavender is a fragrant herb with beautiful purple flowers."
    },
    {
        "name": "Citrus sinensis",
        "scientific_name": "Citrus sinensis",
        "common_name": "Orange Tree",
        "category": "Fruits Plants",
        "suitability": "Outdoor",
        "season": "Year-round",
        "watering": "Regular",
        "description": "The orange tree produces sweet and juicy oranges."
    },
    {
        "name": "Monstera deliciosa",
        "scientific_name": "Monstera deliciosa",
        "common_name": "Swiss Cheese Plant",
        "category": "Indoor Plants",
        "suitability": "Indoor",
        "season": "Year-round",
        "watering": "Moderate",
        "description": "The Monstera deliciosa, also known as the Swiss Cheese Plant, is a popular indoor plant with unique leaves."
    },
    {
        "name": "Prunus serrulata",
        "scientific_name": "Prunus serrulata",
        "common_name": "Cherry Blossom",
        "category": "Flowering Plants",
        "suitability": "Outdoor",
        "season": "Spring",
        "watering": "Regular",
        "description": "Cherry Blossom trees are known for their beautiful pink blossoms in spring."
    },
    {
        "name": "Morus alba",
        "scientific_name": "Morus alba",
        "common_name": "Mulberry Tree",
        "category": "Fruits Plants",
        "suitability": "Outdoor",
        "season": "Summer",
        "watering": "Regular",
        "description": "The Mulberry tree produces sweet and nutritious mulberries."
    }
];
// Function to display plants based on search input and category
function displayPlants(searchTerm = '', category = '') {
  const filteredPlants = plantsData.filter(plant => {
      const nameMatches = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatches = category === '' || plant.category.toLowerCase() === category.toLowerCase();

      return nameMatches && categoryMatches;
  });

  // Clear existing content
  plantsContainer.innerHTML = '';

  // Display filtered plants
  filteredPlants.forEach(plant => {
      const box = document.createElement('div');
      box.className = 'box';

      box.innerHTML = `
          <img src="images/${plant.name.toLowerCase()}-plants.jpg" alt="${plant.name}">
          <h2>${plant.name}</h2>
          <p>${plant.description}</p>
      `;

      plantsContainer.appendChild(box);
  });

  console.log('Filtered Plants:', filteredPlants);
}

// Initial display of all plants
displayPlants();

// Add event listener for search input
searchInput.addEventListener('input', function () {
  displayPlants(this.value);
});

// Add event listener for category buttons
categoryButtons.forEach(button => {
  button.addEventListener('click', function () {
      const selectedCategory = this.dataset.category;
      console.log('Selected Category:', selectedCategory);
      displayPlants(searchInput.value, selectedCategory);
  });
});
});