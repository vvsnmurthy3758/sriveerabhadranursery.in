// js/plants.js

document.addEventListener('DOMContentLoaded', function () {
  const plantsContainer = document.getElementById('plantsContainer');
  const searchInput = document.getElementById('search');
  const categoryButtons = document.querySelectorAll('.category-btn');

  // Sample plant data
  const plantsData = [
    {
      "name": "Apple Tree",
      "scientific_name": "Malus domestica",
      "common_name": "Apple",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "The apple tree produces delicious and nutritious apples, perfect for outdoor gardens."
    },
    {
      "name": "Banana Plant",
      "scientific_name": "Musa",
      "common_name": "Banana",
      "tags": ["FRUITS", "INDOOR"],
      "description": "The banana plant produces sweet and tropical bananas and can be grown indoors or in outdoor gardens."
    },
    {
      "name": "Orange Tree",
      "scientific_name": "Citrus sinensis",
      "common_name": "Orange",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "Orange trees bear sweet and juicy oranges, perfect for adding freshness to your garden."
    },
    {
      "name": "Strawberry Plant",
      "scientific_name": "Fragaria × ananassa",
      "common_name": "Strawberry",
      "tags": ["FRUITS", "INDOOR"],
      "description": "Strawberry plants produce tasty berries and are suitable for both indoor and outdoor cultivation."
    },
    {
      "name": "Grapevine",
      "scientific_name": "Vitis vinifera",
      "common_name": "Grapes",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "Grapevines produce clusters of grapes, making them a popular choice for outdoor gardens and vineyards."
    },
    {
      "name": "Peach Tree",
      "scientific_name": "Prunus persica",
      "common_name": "Peach",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "Peach trees bear sweet and succulent peaches, adding a delightful touch to your garden."
    },
    {
      "name": "Mango Tree",
      "scientific_name": "Mangifera indica",
      "common_name": "Mango",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "Mango trees produce tropical and flavorful mangoes, perfect for warm climates and gardens."
    },
    {
      "name": "Lemon Tree",
      "scientific_name": "Citrus limon",
      "common_name": "Lemon",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "Lemon trees bear tangy and aromatic lemons, ideal for adding zest to your garden."
    },
    {
      "name": "Cherry Tree",
      "scientific_name": "Prunus avium",
      "common_name": "Cherry",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "Cherry trees produce sweet and colorful cherries, enhancing the beauty of your outdoor space."
    },
    {
      "name": "Plum Tree",
      "scientific_name": "Prunus domestica",
      "common_name": "Plum",
      "tags": ["FRUITS", "OUTDOOR"],
      "description": "Plum trees bear delicious and juicy plums, adding variety to your garden orchard."
    },{
      "name": "Rose",
      "scientific_name": "Rosa",
      "common_name": "Rose",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "The rose is a classic and elegant flowering plant known for its beautiful and fragrant blooms."
    },
    {
      "name": "Lily",
      "scientific_name": "Lilium",
      "common_name": "Lily",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Lilies are graceful and vibrant flowering plants, available in various colors and types."
    },
    {
      "name": "Tulip",
      "scientific_name": "Tulipa",
      "common_name": "Tulip",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Tulips are spring-blooming flowers with a wide range of colors, bringing a burst of color to gardens."
    },
    {
      "name": "Daisy",
      "scientific_name": "Bellis perennis",
      "common_name": "Daisy",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Daisies are cheerful and simple flowers, perfect for adding a touch of innocence to gardens."
    },
    {
      "name": "Sunflower",
      "scientific_name": "Helianthus annuus",
      "common_name": "Sunflower",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Sunflowers are tall and bold flowers, symbolizing happiness and sunshine in gardens."
    },
    {
      "name": "Daffodil",
      "scientific_name": "Narcissus",
      "common_name": "Daffodil",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Daffodils are early spring flowers with trumpet-shaped blooms, heralding the arrival of spring."
    },
    {
      "name": "Hibiscus",
      "scientific_name": "Hibiscus",
      "common_name": "Hibiscus",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Hibiscus plants feature large, colorful flowers and are often associated with tropical landscapes."
    },
    {
      "name": "Carnation",
      "scientific_name": "Dianthus caryophyllus",
      "common_name": "Carnation",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Carnations are popular cut flowers with a wide range of colors, symbolizing love and admiration."
    },
    {
      "name": "Iris",
      "scientific_name": "Iris",
      "common_name": "Iris",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Irises are elegant flowers with distinctive, sword-shaped leaves and vibrant blooms."
    },
    {
      "name": "Chrysanthemum",
      "scientific_name": "Chrysanthemum",
      "common_name": "Chrysanthemum",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Chrysanthemums, or mums, are autumn-blooming flowers with a wide variety of shapes and colors."
    },
    {
      "name": "Peony",
      "scientific_name": "Paeonia",
      "common_name": "Peony",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Peonies are large and showy flowers, known for their lush petals and delightful fragrance."
    },
    {
      "name": "Dahlia",
      "scientific_name": "Dahlia",
      "common_name": "Dahlia",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Dahlias are diverse flowers with a wide range of shapes and sizes, creating stunning garden displays."
    },
    {
      "name": "Geranium",
      "scientific_name": "Pelargonium",
      "common_name": "Geranium",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Geraniums are versatile plants with vibrant blooms and aromatic foliage, suitable for gardens and containers."
    },
    {
      "name": "Lavender",
      "scientific_name": "Lavandula",
      "common_name": "Lavender",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Lavender is a fragrant herb with spikes of blue to purple flowers, popular for its aromatic and therapeutic properties."
    },
    {
      "name": "Poppy",
      "scientific_name": "Papaver",
      "common_name": "Poppy",
      "tags": ["FLOWERS", "OUTDOOR"],
      "description": "Poppies are bold and colorful flowers, often associated with wildflower meadows and remembrance."
    },
    {
      "name": "Maple Tree",
      "scientific_name": "Acer",
      "common_name": "Maple",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Maple trees are known for their distinctive lobed leaves and vibrant autumn foliage, making them popular choices for avenues."
    },
    {
      "name": "Oak Tree",
      "scientific_name": "Quercus",
      "common_name": "Oak",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Oak trees are large and majestic, known for their strong wood and broad canopies, providing shade along avenues."
    },
    {
      "name": "Cherry Blossom",
      "scientific_name": "Prunus",
      "common_name": "Cherry Blossom",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Cherry blossom trees feature beautiful pink or white blossoms in spring, creating a stunning visual display along avenues."
    },
    {
      "name": "Palm Tree",
      "scientific_name": "Arecaceae",
      "common_name": "Palm",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Palm trees add a tropical touch to avenues with their distinctive fronds and tall, slender trunks."
    },
    {
      "name": "Birch Tree",
      "scientific_name": "Betula",
      "common_name": "Birch",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Birch trees are known for their slender trunks and distinctive bark, adding elegance to avenues."
    },
    {
      "name": "Cypress Tree",
      "scientific_name": "Cupressus",
      "common_name": "Cypress",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Cypress trees are tall and conical, often used for creating formal and stately avenues."
    },
    {
      "name": "Dogwood Tree",
      "scientific_name": "Cornus",
      "common_name": "Dogwood",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Dogwood trees feature showy blooms and colorful foliage, enhancing the beauty of avenues."
    },
    {
      "name": "Linden Tree",
      "scientific_name": "Tilia",
      "common_name": "Linden",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Linden trees are known for their heart-shaped leaves and fragrant flowers, making them suitable for avenues."
    },
    {
      "name": "Magnolia Tree",
      "scientific_name": "Magnolia",
      "common_name": "Magnolia",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Magnolia trees feature large, fragrant flowers and glossy leaves, creating a stunning visual impact along avenues."
    },
    {
      "name": "Redbud Tree",
      "scientific_name": "Cercis",
      "common_name": "Redbud",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Redbud trees display vibrant pink or purple blooms in spring, adding a burst of color to avenues."
    },
    {
      "name": "Willow Tree",
      "scientific_name": "Salix",
      "common_name": "Willow",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Willow trees are known for their gracefully arching branches and slender leaves, creating a serene atmosphere along avenues."
    },
    {
      "name": "Fir Tree",
      "scientific_name": "Abies",
      "common_name": "Fir",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Fir trees are evergreen and conical, providing a classic and timeless look along avenues."
    },
    {
      "name": "Juniper Tree",
      "scientific_name": "Juniperus",
      "common_name": "Juniper",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Juniper trees are known for their aromatic foliage and are often used for creating formal avenues."
    },
    {
      "name": "Ginkgo Tree",
      "scientific_name": "Ginkgo biloba",
      "common_name": "Ginkgo",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Ginkgo trees are distinctive with fan-shaped leaves and are often planted along avenues for their unique appearance."
    },
    {
      "name": "Crape Myrtle",
      "scientific_name": "Lagerstroemia",
      "common_name": "Crape Myrtle",
      "tags": ["AVENUE", "OUTDOOR"],
      "description": "Crape myrtles feature colorful blooms and attractive bark, adding a touch of charm to avenues."
    },
    {
      "name": "Boxwood",
      "scientific_name": "Buxus",
      "common_name": "Boxwood",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Boxwood is a versatile evergreen shrub commonly used for hedges, borders, and topiary in landscaping."
    },
    {
      "name": "Lavender",
      "scientific_name": "Lavandula",
      "common_name": "Lavender",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Lavender is known for its fragrant spikes of purple flowers, adding beauty and aroma to landscaping designs."
    },
    {
      "name": "Hydrangea",
      "scientific_name": "Hydrangea",
      "common_name": "Hydrangea",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Hydrangeas feature large, showy blooms and are often used to enhance the aesthetics of gardens and landscapes."
    },
    {
      "name": "Japanese Maple",
      "scientific_name": "Acer palmatum",
      "common_name": "Japanese Maple",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Japanese maple trees are prized for their stunning foliage, adding vibrant colors and texture to landscaping."
    },
    {
      "name": "Hosta",
      "scientific_name": "Hosta",
      "common_name": "Hosta",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Hostas are shade-loving plants with attractive foliage, commonly used for landscaping in shaded areas."
    },
    {
      "name": "Azalea",
      "scientific_name": "Rhododendron",
      "common_name": "Azalea",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Azaleas are deciduous or evergreen shrubs known for their vibrant flowers, enhancing the beauty of landscapes."
    },
    {
      "name": "Bamboo",
      "scientific_name": "Bambusoideae",
      "common_name": "Bamboo",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Bamboo plants are fast-growing and can be used for creating privacy screens and adding an exotic touch to landscapes."
    },
    {
      "name": "Sedum",
      "scientific_name": "Sedum",
      "common_name": "Sedum",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Sedums, or stonecrops, are low-maintenance succulent plants suitable for ground cover and rock gardens in landscaping."
    },
    {
      "name": "Dwarf Fountain Grass",
      "scientific_name": "Pennisetum setaceum",
      "common_name": "Dwarf Fountain Grass",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Dwarf fountain grass adds ornamental value with its arching foliage and feathery flower heads, ideal for landscaping."
    },
    {
      "name": "Daylily",
      "scientific_name": "Hemerocallis",
      "common_name": "Daylily",
      "tags": ["LANDSCAPING", "OUTDOOR"],
      "description": "Daylilies are hardy perennials with colorful blooms, suitable for landscaping borders and flower beds."
    }
  ];
  

  // Function to display plants based on search input and category
  function displayPlants(searchTerm = '', category = '') {
    const filteredPlants = plantsData.filter(plant => {
      const nameMatches = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatches = category === '' || plant.tags.includes(category.toUpperCase());

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

      // Toggle active class for the selected category button
      this.classList.toggle('active');

      // Determine if the button is active after the toggle
      const isActive = this.classList.contains('active');

      // If the button is active, apply filtering; otherwise, reset filtering
      displayPlants(searchInput.value, isActive ? selectedCategory : '');
    });
  });
});