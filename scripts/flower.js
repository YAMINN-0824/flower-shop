// Close mobile nav menu after a link is tapped
const navToggler = document.getElementById('toggler');
document.querySelectorAll('header .navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navToggler.checked = false;
    });
});

// Store product descriptions
const descriptions = {
    'red_tulip': 'A vibrant red tulip pot featuring stunning blooms. Perfect for adding a pop of color to any space. These tulips are carefully grown to ensure the highest quality and longest lasting blooms. Ideal for both indoor and outdoor settings.',
    'pink_rose': 'Beautiful pink roses in a decorative pot. These roses symbolize grace, gentility, and happiness. Each bloom is carefully cultivated to ensure perfect form and maximum longevity.',
    'geranium': 'Colorful geraniums that bloom throughout the season. These hardy plants are perfect for both indoor and outdoor spaces. Their vibrant blooms and attractive foliage make them a popular choice for any garden.',
    'croton': 'Vibrant croton plant with multicolored leaves. These tropical beauties add a splash of color with their variegated foliage. Perfect for bringing a touch of exotic beauty to your home.',
    'dahlia': 'Stunning dahlia flowers with intricate petals. Known for their impressive blooms and wide range of colors. These show-stopping flowers will be the centerpiece of any garden or room.',
    'moth_orchid': 'Elegant moth orchid with long-lasting blooms. These sophisticated flowers are perfect for both home and office environments. Their graceful appearance adds a touch of luxury to any space.',
    'yellow_moth_orchid': 'Bright yellow moth orchid that brings sunshine indoors. These cheerful blooms last for months with proper care. A perfect choice for adding a warm, sunny glow to your indoor space.',
    'marigold': 'Cheerful marigolds with bright orange and yellow flowers. These hardy annuals are excellent for borders and containers. Known for their pest-repelling properties and long blooming season.',
    'hydrangea': 'Large, showy hydrangea blooms that change color based on soil pH. These classic garden favorites provide months of color and can be dried for indoor arrangements.',
    'boat_orchid': 'Unique boat orchid with distinctive flowers. These conversation-starting plants feature unusual blooms that resemble tiny boats. Perfect for collectors and orchid enthusiasts.',
    'black_rose': 'Dramatic black roses for a gothic aesthetic. These rare and exotic blooms create a stunning visual impact. Perfect for those seeking something truly unique.',
    'sunflower': 'Bright and cheerful sunflowers that track the sun. These beloved flowers bring joy with their large, sunny faces. Great for gardens and cut flower arrangements.',
    'marguerite_daisy': 'Charming marguerite daisies with crisp white petals. These cheerful flowers bloom abundantly throughout the season. Perfect for borders and container gardens.',
    'regal_pelargonium': 'Regal pelargonium with beautiful blooms in rich colors. These stunning plants feature large, showy flowers and attractive foliage. Excellent for containers and window boxes.',
    'primrose': 'Delicate primrose flowers in soft, enchanting colors. These early spring bloomers bring the first touch of color to your garden. Perfect for borders and woodland gardens.',
    'barberton_daisy': 'Colorful Barberton daisies with long-lasting blooms. These South African natives provide brilliant color and are excellent for cut flowers. Great for containers and borders.',
    'petunia': 'Wave petunias in a stunning array of colors. These prolific bloomers provide endless waves of color all season long. Perfect for hanging baskets and garden beds.',
    'primula_obconica': 'Delicate primula with clusters of charming flowers. These long-blooming plants provide color during the cooler months. Perfect for shaded gardens and indoor displays.',
    'cereus_jamacaru': 'Striking columnar cactus with architectural presence. This impressive specimen adds dramatic vertical interest. Perfect for modern and desert-themed gardens.',
    'blue_rose': 'Rare and enchanting blue roses. These unique blooms symbolize mystery and the attainment of the impossible. A truly special addition to any collection.'
};

// Get dialog element
const dialog = document.getElementById('itemDialog');
const dialogImage = dialog.querySelector('#itemImageWrapper img');
const dialogName = dialog.querySelector('#itemDialogName');
const dialogDescription = dialog.querySelector('#itemDialogDescription');
// const dialogPrice = dialog.querySelector('#itemDialogPrice');

// Get all product boxes
const productBoxes = document.querySelectorAll('.products .box');

// Add click event to each product
productBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get product details
        const name = box.querySelector('.content h3 a')?.getAttribute('href')?.replace('.html', '').replace('/', '') || 
                     box.querySelector('.content h3')?.textContent || 'Unnamed Product';
        const image = box.querySelector('.image img')?.src || '';
        const price = box.querySelector('.price')?.textContent || '';
        
        // Clean up name for display
        const cleanName = name
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        // Update dialog content
        dialogImage.src = image;
        dialogImage.alt = cleanName;
        dialogName.textContent = cleanName;
        dialogDescription.textContent = descriptions[name] || 'A beautiful flower pot to brighten your space.';
        // dialogPrice.textContent = price;
        
        // Show dialog
        dialog.showModal();
    });
});

// Close dialog when clicking close button
const closeButton = dialog.querySelector('.fa-xmark');
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close dialog when clicking outside
dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
});