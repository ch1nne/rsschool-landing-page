const track = document.querySelector('.slider__track');

if (track) {
    const slides = document.querySelectorAll('.slider__slide');
    const prevBtn = document.querySelector('.slider__arrow--prev');
    const nextBtn = document.querySelector('.slider__arrow--next');
    const dots = document.querySelectorAll('.slider__dot');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('slider__dot--active', i === currentIndex);
        });
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    nextBtn.addEventListener('click', goToNext);
    prevBtn.addEventListener('click', goToPrev);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
        });
    });

    updateSlider();
}

const products = [
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-1.png',
        name: 'Irish coffee',
        description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
        price: '7.00',
    },
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-2.png',
        name: 'Kahlua coffee',
        description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        price: '7.00',
    },
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-3.png',
        name: 'Honey raf',
        description: 'Espresso with frothed milk, cream and aromatic honey',
        price: '5.50',
    },
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-4.png',
        name: 'Ice cappuccino',
        description: 'Cappuccino with soft thick foam in summer version with ice',
        price: '5.00',
    },
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-5.png',
        name: 'Espresso',
        description: 'Classic black coffee',
        price: '4.50',
    },
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-6.png',
        name: 'Latte',
        description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
        price: '5.50',
    },
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-7.png',
        name: 'Latte macchiato',
        description: 'Espresso with frothed milk and chocolate',
        price: '5.50',
    },
    {
        category: 'coffee',
        image: '/assets/img/menu/coffee/coffee-8.png',
        name: 'Coffee with cognac',
        description: 'Fragrant black coffee with cognac and whipped cream',
        price: '6.50',
    },
    {
        category: 'tea',
        image: '/assets/img/menu/tea/tea-1.png',
        name: 'Moroccan',
        description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
        price: '4.50',
    },
    {
        category: 'tea',
        image: '/assets/img/menu/tea/tea-2.png',
        name: 'Ginger',
        description: 'Original black tea with fresh ginger, lemon and honey',
        price: '5.00',
    },
    {
        category: 'tea',
        image: '/assets/img/menu/tea/tea-3.png',
        name: 'Cranberry',
        description: 'Invigorating black tea with cranberry and honey',
        price: '5.00',
    },
    {
        category: 'tea',
        image: '/assets/img/menu/tea/tea-4.png',
        name: 'Sea buckthorn',
        description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
        price: '5.50',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-1.png',
        name: 'Marble cheesecake',
        description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
        price: '3.50',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-2.png',
        name: 'Red velvet',
        description: 'Layer cake with cream cheese frosting',
        price: '4.00',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-3.png',
        name: 'Cheesecakes',
        description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
        price: '4.50',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-4.png',
        name: 'Creme brulee',
        description: 'Delicate creamy dessert in a caramel basket with wild berries',
        price: '4.00',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-5.png',
        name: 'Pancakes',
        description: 'Tender pancakes with strawberry jam and fresh strawberries',
        price: '4.50',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-6.png',
        name: 'Honey cake',
        description: 'Classic honey cake with delicate custard',
        price: '4.50',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-7.png',
        name: 'Chocolate cake',
        description: 'Cake with hot chocolate filling and nuts with dried apricots',
        price: '5.50',
    },
    {
        category: 'dessert',
        image: '/assets/img/menu/dessert/dessert-7.png',
        name: 'Black forest',
        description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
        price: '6.50',
    },
];

const cardTemplate = (product) => `
    <article class="menu__card">
        <img class="menu__card-image" src="${product.image}" alt="${product.name}" />
        <div class="menu__card-info">
            <h3 class="menu__card-name">${product.name}</h3>
            <p class="menu__card-description">${product.description}</p>
            <span class="menu__card-price">$${product.price}</span>
        </div>
    </article>
`;

const cardsContainer = document.getElementById('menu-cards');

function renderCards(category) {
    const filtered = products.filter((p) => p.category === category);
    cardsContainer.innerHTML = filtered.map(cardTemplate).join('');
}

const categoryButtons = document.querySelectorAll('.menu__category');

function updateCategory(activeButton) {
    categoryButtons.forEach((btn) => btn.classList.remove('menu__category--active'));
    activeButton.classList.add('menu__category--active');
    renderCards(activeButton.dataset.category);
}
categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => updateCategory(btn));
});

renderCards('coffee');