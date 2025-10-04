// Perfume Selling Platform - Main JavaScript
// Luxury fragrance e-commerce with advanced interactions

// Global state management
const PerfumeApp = {
    cart: JSON.parse(localStorage.getItem('perfumeCart')) || [],
    wishlist: JSON.parse(localStorage.getItem('perfumeWishlist')) || [],
    currentQuizStep: 0,
    quizAnswers: {},
    filters: {
        search: '',
        category: 'all',
        brand: 'all',
        priceRange: [0, 500],
        gender: 'all'
    },
    
    // Product database with authentic luxury fragrances
    products: [
        {
            id: 1,
            name: "Lost Cherry",
            brand: "Tom Ford",
            category: "oriental",
            gender: "unisex",
            price: 285,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/dimg.dillards.com/cedbbfd0f37adb3056487289ebf92eae675a055f.jpg",
            description: "Black cherry and cherry liquor with almond, rose, and sandalwood.",
            notes: { top: "Black Cherry", middle: "Cherry Liquor, Almond", base: "Sandalwood, Vetiver" },
            rating: 4.8,
            reviews: 1247
        },
        {
            id: 2,
            name: "Mojave Ghost",
            brand: "Byredo",
            category: "woody",
            gender: "unisex",
            price: 195,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/cdn.cliqueinc.com/f3b5c4ed62b9ecfe1c8a5145379cb227b8df9302.jpg",
            description: "Woody notes inspired by the Mojave Desert with musk and cedarwood.",
            notes: { top: "Musk", middle: "Ambrette, Violet", base: "Cedarwood, Sandalwood" },
            rating: 4.6,
            reviews: 892
        },
        {
            id: 3,
            name: "Bergamote 22",
            brand: "Le Labo",
            category: "fresh",
            gender: "unisex",
            price: 215,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "resources/product-collection.jpg",
            description: "Bright bergamot with petitgrain, amber, and cedar for a luminous aura.",
            notes: { top: "Bergamot", middle: "Petitgrain, Orange Blossom", base: "Amber, Cedar, Musk" },
            rating: 4.7,
            reviews: 1056
        },
        {
            id: 4,
            name: "Coco Mademoiselle",
            brand: "Chanel",
            category: "floral",
            gender: "women",
            price: 165,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/beautyinsider.my/9224d72c01769eedd9c199b75a949a957424dab1.jpg",
            description: "Fresh and sparkling with jasmine, rose, and warm amber base.",
            notes: { top: "Orange", middle: "Jasmine, Rose", base: "Patchouli, Vanilla" },
            rating: 4.9,
            reviews: 2341
        },
        {
            id: 5,
            name: "Sauvage",
            brand: "Dior",
            category: "fresh",
            gender: "men",
            price: 135,
            size: "60ml",
            concentration: "Eau de Toilette",
            image: "https://kimi-web-img.moonshot.cn/img/torange.biz/ed26c1ed2a9bc6b0ec916971984198f930a21ec9.jpg",
            description: "Fresh and powerful with bergamot, Sichuan pepper, and ambroxan.",
            notes: { top: "Bergamot", middle: "Sichuan Pepper", base: "Ambroxan, Vanilla" },
            rating: 4.5,
            reviews: 1876
        },
        {
            id: 6,
            name: "Black Orchid",
            brand: "Tom Ford",
            category: "oriental",
            gender: "unisex",
            price: 320,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/f64f827422764dbad033d97c927ee4523eb73aa3.jpg",
            description: "Luxurious and sensual with black orchid, spices, and dark accords.",
            notes: { top: "Black Truffle", middle: "Black Orchid", base: "Patchouli, Vanilla" },
            rating: 4.4,
            reviews: 743
        },
        {
            id: 7,
            name: "Replica Jazz Club",
            brand: "Maison Margiela",
            category: "woody",
            gender: "men",
            price: 155,
            size: "50ml",
            concentration: "Eau de Toilette",
            image: "https://kimi-web-img.moonshot.cn/img/assets.puxiang.com/12eb940e7cfafb731c0aa45053f140472470fbb1.jpeg",
            description: "Evokes the atmosphere of a Brooklyn jazz club with tobacco and rum.",
            notes: { top: "Pink Pepper", middle: "Rum, Tobacco", base: "Vanilla, Styrax" },
            rating: 4.3,
            reviews: 567
        },
        {
            id: 8,
            name: "Philosykos",
            brand: "Diptyque",
            category: "woody",
            gender: "unisex",
            price: 185,
            size: "50ml",
            concentration: "Eau de Toilette",
            image: "https://kimi-web-img.moonshot.cn/img/media.karousell.com/3e4154854a4a358901b90a9d0c4940392f5d7f87.jpg",
            description: "Inspired by Greek fig trees with green, woody, and slightly fruity notes.",
            notes: { top: "Fig Leaves", middle: "Fig Tree", base: "Cedar, Coconut" },
            rating: 4.6,
            reviews: 823
        },
        {
            id: 9,
            name: "Flowerbomb",
            brand: "Viktor & Rolf",
            category: "floral",
            gender: "women",
            price: 175,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/www.viktor-rolf.com/bab3159c206a34658206cd979a2c89abdb272ca4.jpg",
            description: "Explosive bouquet of flowers with bergamot, tea, and patchouli.",
            notes: { top: "Bergamot, Tea", middle: "Jasmine, Orange Blossom", base: "Patchouli" },
            rating: 4.7,
            reviews: 1456
        },
        {
            id: 10,
            name: "Acqua di Gio",
            brand: "Giorgio Armani",
            category: "fresh",
            gender: "men",
            price: 125,
            size: "50ml",
            concentration: "Eau de Toilette",
            image: "https://kimi-web-img.moonshot.cn/img/theperfumeclub.pk/dc68a9b2c7464fb4365f28d1475aa12dfafe3f9f.png",
            description: "Fresh and aquatic with marine notes, bergamot, and cedar.",
            notes: { top: "Marine Notes", middle: "Bergamot", base: "Cedar, Musk" },
            rating: 4.5,
            reviews: 2134
        },
        {
            id: 11,
            name: "La Vie Est Belle",
            brand: "Lancôme",
            category: "floral",
            gender: "women",
            price: 145,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/i5.walmartimages.com/0b457a3791af8e35e429dd6a43e753d2e6f3a665.jpeg",
            description: "Sweet and sophisticated with iris, patchouli, and vanilla.",
            notes: { top: "Blackcurrant", middle: "Iris, Orange Blossom", base: "Patchouli, Vanilla" },
            rating: 4.8,
            reviews: 1876
        },
        {
            id: 12,
            name: "Bleu de Chanel",
            brand: "Chanel",
            category: "woody",
            gender: "men",
            price: 155,
            size: "50ml",
            concentration: "Eau de Toilette",
            image: "https://kimi-web-img.moonshot.cn/img/pic3.qiqiyg.com/c92ee259b578507b45a9580b86e24f55ca2b9213.jpg",
            description: "Sophisticated and masculine with citrus, cedar, and sandalwood.",
            notes: { top: "Lemon, Mint", middle: "Ginger, Jasmine", base: "Cedar, Sandalwood" },
            rating: 4.7,
            reviews: 1654
        },
        {
            id: 13,
            name: "Delina",
            brand: "Parfums de Marly",
            category: "floral",
            gender: "women",
            price: 325,
            size: "75ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/creedboutique.com/c14dd4a28acf06f15d9e56a991c443c8353f48f2.jpg",
            description: "Elegant and feminine with bergamot, rose, and vanilla.",
            notes: { top: "Bergamot", middle: "Rose, Peony", base: "Vanilla, Musk" },
            rating: 4.9,
            reviews: 934
        },
        {
            id: 14,
            name: "Oud Wood",
            brand: "Tom Ford",
            category: "oriental",
            gender: "unisex",
            price: 385,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/creedboutique.com/564a610182810ac0bf98afe311978117ff0a0029.jpg",
            description: "Exotic and mysterious with oud, rosewood, and sandalwood.",
            notes: { top: "Rosewood", middle: "Oud, Sandalwood", base: "Vanilla, Tonka Bean" },
            rating: 4.6,
            reviews: 678
        },
        {
            id: 15,
            name: "Aventus",
            brand: "Creed",
            category: "fresh",
            gender: "men",
            price: 445,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/www.viktor-rolf.com/e5d78b6acac5486e33cf00313da2e15fdcaca387.jpg",
            description: "Iconic and bold with pineapple, birch, and oakmoss.",
            notes: { top: "Pineapple", middle: "Birch, Jasmine", base: "Oakmoss, Musk" },
            rating: 4.8,
            reviews: 1234
        },
        {
            id: 16,
            name: "Gypsy Water",
            brand: "Byredo",
            category: "woody",
            gender: "unisex",
            price: 205,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/pic.yupoo.com/c19a928dabb52247a01019e2d387272095afba6f.jpg",
            description: "Earthy and mystical with pine needle, sandalwood, and vanilla.",
            notes: { top: "Pine Needle", middle: "Sandalwood", base: "Vanilla, Amber" },
            rating: 4.4,
            reviews: 456
        },
        {
            id: 17,
            name: "Layton",
            brand: "Parfums de Marly",
            category: "oriental",
            gender: "men",
            price: 295,
            size: "75ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/p1.liveauctioneers.com/d743e7a561aa18f6321a9db30f58fe525637418c.jpg",
            description: "Sophisticated and warm with grapefruit, cardamom, and amber.",
            notes: { top: "Grapefruit", middle: "Cardamom, Lavender", base: "Amber, Vanilla" },
            rating: 4.7,
            reviews: 789
        },
        {
            id: 18,
            name: "Neroli Portofino",
            brand: "Tom Ford",
            category: "fresh",
            gender: "unisex",
            price: 275,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/www.scentbox.com/8be68081ba184450d0e9377dd1ee821850a2cafa.jpg",
            description: "Bright and refreshing with neroli, bergamot, and amber.",
            notes: { top: "Neroli", middle: "Bergamot, Mandarin", base: "Amber, Musk" },
            rating: 4.5,
            reviews: 567
        },
        {
            id: 19,
            name: "Black Opium",
            brand: "Yves Saint Laurent",
            category: "oriental",
            gender: "women",
            price: 165,
            size: "50ml",
            concentration: "Eau de Parfum",
            image: "https://kimi-web-img.moonshot.cn/img/f.fcdn.app/40d7214ad4bb9afe751fdeeab7c7654625e541aa.jpg",
            description: "Addictive and seductive with coffee, vanilla, and white flowers.",
            notes: { top: "Pear", middle: "Coffee, Jasmine", base: "Vanilla, Cedar" },
            rating: 4.6,
            reviews: 1456
        },
        {
            id: 20,
            name: "Light Blue",
            brand: "Dolce & Gabbana",
            category: "fresh",
            gender: "women",
            price: 115,
            size: "50ml",
            concentration: "Eau de Toilette",
            image: "https://kimi-web-img.moonshot.cn/img/cdn.saksfifthavenue.com/8380cdf70a9145ca13327d0fc7ed6ae535dd8846",
            description: "Mediterranean freshness with Sicilian lemon, apple, and cedar.",
            notes: { top: "Sicilian Lemon", middle: "Apple, Bellflower", base: "Cedar, Musk" },
            rating: 4.4,
            reviews: 1789
        }
    ],

    // Quiz questions for perfume finder
    quizQuestions: [
        {
            question: "What type of scents naturally attract you?",
            answers: [
                { text: "Fresh and clean like citrus or ocean breeze", value: "fresh", image: "🍋" },
                { text: "Warm and spicy like cinnamon or vanilla", value: "oriental", image: "🌶️" },
                { text: "Floral and romantic like roses or jasmine", value: "floral", image: "🌹" },
                { text: "Earthy and natural like wood or moss", value: "woody", image: "🌲" }
            ]
        },
        {
            question: "When do you plan to wear your fragrance most?",
            answers: [
                { text: "Every day to work or casual outings", value: "daily", image: "💼" },
                { text: "Special evenings and romantic dates", value: "evening", image: "🌙" },
                { text: "Weekend adventures and social events", value: "social", image: "🎉" },
                { text: "Seasonal occasions and holidays", value: "seasonal", image: "🎄" }
            ]
        },
        {
            question: "How bold do you want your fragrance to be?",
            answers: [
                { text: "Subtle and intimate - only noticed up close", value: "subtle", image: "🤫" },
                { text: "Moderate - pleasant trail without overwhelming", value: "moderate", image: "🌸" },
                { text: "Confident - noticeable but not overpowering", value: "confident", image: "💫" },
                { text: "Bold and distinctive - makes a statement", value: "bold", image: "⭐" }
            ]
        },
        {
            question: "Which season resonates with your personality?",
            answers: [
                { text: "Spring - fresh blooms and new beginnings", value: "spring", image: "🌱" },
                { text: "Summer - bright, energetic, and adventurous", value: "summer", image: "☀️" },
                { text: "Autumn - warm, cozy, and sophisticated", value: "autumn", image: "🍂" },
                { text: "Winter - elegant, mysterious, and refined", value: "winter", image: "❄️" }
            ]
        },
        {
            question: "What's your preferred fragrance concentration?",
            answers: [
                { text: "Eau de Toilette - light and refreshing", value: "edt", image: "💧" },
                { text: "Eau de Parfum - balanced and long-lasting", value: "edp", image: "🌟" },
                { text: "Parfum - intense and luxurious", value: "parfum", image: "💎" },
                { text: "No preference - scent matters most", value: "any", image: "🎭" }
            ]
        },
        {
            question: "Which luxury brand aesthetic appeals to you?",
            answers: [
                { text: "Classic and timeless like Chanel or Dior", value: "classic", image: "👑" },
                { text: "Modern and minimalist like Le Labo or Byredo", value: "modern", image: "⚡" },
                { text: "Bold and artistic like Tom Ford or Maison Margiela", value: "bold", image: "🎨" },
                { text: "Niche and exclusive like Parfums de Marly or Creed", value: "niche", image: "🔮" }
            ]
        }
    ],

    // Initialize the application
    init() {
        this.setupEventListeners();
        this.updateCartCount();
        this.initializeAnimations();
        this.setupScrollAnimations();
    },

    // Event listeners setup
    setupEventListeners() {
        // Cart functionality
        document.addEventListener('click', (e) => {
            if (e.target.matches('.add-to-cart')) {
                const productId = parseInt(e.target.dataset.productId);
                this.addToCart(productId);
            }
            
            if (e.target.matches('.add-to-wishlist')) {
                const productId = parseInt(e.target.dataset.productId);
                this.toggleWishlist(productId);
            }
            
            if (e.target.matches('.remove-from-cart')) {
                const productId = parseInt(e.target.dataset.productId);
                this.removeFromCart(productId);
            }
            
            if (e.target.matches('.quantity-btn')) {
                const productId = parseInt(e.target.dataset.productId);
                const action = e.target.dataset.action;
                this.updateQuantity(productId, action);
            }
        });

        // Quiz navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('.quiz-answer')) {
                this.selectQuizAnswer(e.target);
            }
            
            if (e.target.matches('.quiz-next')) {
                this.nextQuizStep();
            }
            
            if (e.target.matches('.quiz-prev')) {
                this.prevQuizStep();
            }
            
            if (e.target.matches('.quiz-restart')) {
                this.restartQuiz();
            }
        });

        // Filter functionality
        document.addEventListener('input', (e) => {
            if (e.target.matches('#search-input')) {
                this.filters.search = e.target.value.toLowerCase();
                this.applyFilters();
            }
        });

        document.addEventListener('change', (e) => {
            if (e.target.matches('.filter-select')) {
                const filterType = e.target.dataset.filter;
                this.filters[filterType] = e.target.value;
                this.applyFilters();
            }
        });

        // Modal functionality
        document.addEventListener('click', (e) => {
            if (e.target.matches('.product-card') || e.target.closest('.product-card')) {
                const productId = parseInt(e.target.dataset.productId || e.target.closest('.product-card').dataset.productId);
                this.openProductModal(productId);
            }
            
            if (e.target.matches('.modal-close') || e.target.matches('.modal-overlay')) {
                this.closeModal();
            }
        });
    },

    // Cart management
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }

        this.saveCart();
        this.updateCartCount();
        this.showCartAnimation();
        this.showNotification(`${product.name} added to cart!`);
    },

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.updateCartDisplay();
    },

    updateQuantity(productId, action) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity -= 1;
        }

        this.saveCart();
        this.updateCartDisplay();
    },

    toggleWishlist(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const index = this.wishlist.findIndex(item => item.id === productId);
        if (index > -1) {
            this.wishlist.splice(index, 1);
            this.showNotification(`${product.name} removed from wishlist`);
        } else {
            this.wishlist.push(product);
            this.showNotification(`${product.name} added to wishlist!`);
        }

        this.saveWishlist();
        this.updateWishlistDisplay();
    },

    saveCart() {
        localStorage.setItem('perfumeCart', JSON.stringify(this.cart));
    },

    saveWishlist() {
        localStorage.setItem('perfumeWishlist', JSON.stringify(this.wishlist));
    },

    updateCartCount() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartBadges = document.querySelectorAll('.cart-count');
        cartBadges.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'block' : 'none';
        });
    },

    // Quiz functionality
    selectQuizAnswer(answerElement) {
        const questionContainer = answerElement.closest('.quiz-question');
        const questionIndex = parseInt(questionContainer.dataset.questionIndex);
        
        // Remove previous selection
        questionContainer.querySelectorAll('.quiz-answer').forEach(ans => {
            ans.classList.remove('selected');
        });
        
        // Add selection to clicked answer
        answerElement.classList.add('selected');
        
        // Store answer
        this.quizAnswers[questionIndex] = answerElement.dataset.value;
    },

    nextQuizStep() {
        if (this.currentQuizStep < this.quizQuestions.length - 1) {
            this.currentQuizStep++;
            this.renderQuizStep();
        } else {
            this.showQuizResults();
        }
    },

    prevQuizStep() {
        if (this.currentQuizStep > 0) {
            this.currentQuizStep--;
            this.renderQuizStep();
        }
    },

    renderQuizStep() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer) return;

        const question = this.quizQuestions[this.currentQuizStep];
        
        quizContainer.innerHTML = `
            <div class="quiz-question" data-question-index="${this.currentQuizStep}">
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((this.currentQuizStep + 1) / this.quizQuestions.length) * 100}%"></div>
                    </div>
                    <span class="progress-text">${this.currentQuizStep + 1} of ${this.quizQuestions.length}</span>
                </div>
                
                <h3 class="quiz-question-text">${question.question}</h3>
                
                <div class="quiz-answers">
                    ${question.answers.map(answer => `
                        <button class="quiz-answer" data-value="${answer.value}">
                            <span class="answer-icon">${answer.image}</span>
                            <span class="answer-text">${answer.text}</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="quiz-navigation">
                    <button class="quiz-prev ${this.currentQuizStep === 0 ? 'disabled' : ''}" ${this.currentQuizStep === 0 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <button class="quiz-next ${!this.quizAnswers[this.currentQuizStep] ? 'disabled' : ''}" ${!this.quizAnswers[this.currentQuizStep] ? 'disabled' : ''}>
                        ${this.currentQuizStep === this.quizQuestions.length - 1 ? 'Get Results' : 'Next'}
                    </button>
                </div>
            </div>
        `;
    },

    showQuizResults() {
        const recommendations = this.calculateRecommendations();
        const quizContainer = document.getElementById('quiz-container');
        
        quizContainer.innerHTML = `
            <div class="quiz-results">
                <h3>Your Perfect Fragrances</h3>
                <p class="results-description">Based on your preferences, we've curated these recommendations:</p>
                
                <div class="recommendations-grid">
                    ${recommendations.map(product => `
                        <div class="recommendation-card">
                            <img src="${product.image}" alt="${product.name}" class="recommendation-image">
                            <div class="recommendation-info">
                                <h4>${product.name}</h4>
                                <p class="brand">${product.brand}</p>
                                <p class="description">${product.description}</p>
                                <div class="recommendation-actions">
                                    <span class="price">$${product.price}</span>
                                    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <button class="quiz-restart">Take Quiz Again</button>
            </div>
        `;
    },

    restartQuiz() {
        this.currentQuizStep = 0;
        this.quizAnswers = {};
        this.renderQuizStep();
    },

    calculateRecommendations() {
        const answers = this.quizAnswers;
        let recommendations = [];
        
        // Filter by scent family preference
        if (answers[0]) {
            const familyProducts = this.products.filter(p => p.category === answers[0]);
            recommendations = [...recommendations, ...familyProducts];
        }
        
        // Filter by brand preference
        if (answers[5]) {
            let brandProducts = [];
            switch (answers[5]) {
                case 'classic':
                    brandProducts = this.products.filter(p => ['Chanel', 'Dior'].includes(p.brand));
                    break;
                case 'modern':
                    brandProducts = this.products.filter(p => ['Le Labo', 'Byredo'].includes(p.brand));
                    break;
                case 'bold':
                    brandProducts = this.products.filter(p => ['Tom Ford', 'Maison Margiela'].includes(p.brand));
                    break;
                case 'niche':
                    brandProducts = this.products.filter(p => ['Parfums de Marly', 'Creed'].includes(p.brand));
                    break;
            }
            recommendations = [...recommendations, ...brandProducts];
        }
        
        // Remove duplicates and sort by rating
        const uniqueRecommendations = [...new Set(recommendations)];
        return uniqueRecommendations
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4);
    },

    // Filter functionality
    applyFilters() {
        const productGrid = document.getElementById('product-grid');
        if (!productGrid) return;

        let filteredProducts = this.products;

        // Apply search filter
        if (this.filters.search) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(this.filters.search) ||
                product.brand.toLowerCase().includes(this.filters.search) ||
                product.description.toLowerCase().includes(this.filters.search)
            );
        }

        // Apply category filter
        if (this.filters.category !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
                product.category === this.filters.category
            );
        }

        // Apply brand filter
        if (this.filters.brand !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
                product.brand === this.filters.brand
            );
        }

        // Apply gender filter
        if (this.filters.gender !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
                product.gender === this.filters.gender || product.gender === 'unisex'
            );
        }

        // Apply price filter
        filteredProducts = filteredProducts.filter(product =>
            product.price >= this.filters.priceRange[0] &&
            product.price <= this.filters.priceRange[1]
        );

        this.renderProducts(filteredProducts);
        this.updateResultsCount(filteredProducts.length);
    },

    renderProducts(products) {
        const productGrid = document.getElementById('product-grid');
        if (!productGrid) return;

        productGrid.innerHTML = products.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <button class="wishlist-btn ${this.wishlist.some(item => item.id === product.id) ? 'active' : ''}" data-product-id="${product.id}">
                        <span class="heart-icon">♡</span>
                    </button>
                </div>
                
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-rating">
                        <div class="stars">
                            ${this.renderStars(product.rating)}
                        </div>
                        <span class="rating-text">${product.rating} (${product.reviews})</span>
                    </div>
                    
                    <div class="product-footer">
                        <span class="product-price">$${product.price}</span>
                        <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Add hover animations
        this.addProductHoverEffects();
    },

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star filled">★</span>';
        }

        if (hasHalfStar) {
            stars += '<span class="star half">★</span>';
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<span class="star empty">★</span>';
        }

        return stars;
    },

    // Animations and effects
    initializeAnimations() {
        // Initialize Typed.js for hero text
        if (document.getElementById('hero-typed')) {
            new Typed('#hero-typed', {
                strings: ['Discover Your Signature Scent', 'Find Your Perfect Fragrance', 'Experience Luxury Perfumery'],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }

        // Initialize particle system for hero background
        this.initParticleSystem();
    },

    initParticleSystem() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();
    },

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    },

    addProductHoverEffects() {
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 2,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });

            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    scale: 1,
                    rotateY: 0,
                    rotateX: 0,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });
        });
    },

    showCartAnimation() {
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            anime({
                targets: cartIcon,
                scale: [1, 1.2, 1],
                duration: 400,
                easing: 'easeOutElastic(1, .8)'
            });
        }
    },

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        anime({
            targets: notification,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic',
            complete: () => {
                setTimeout(() => {
                    anime({
                        targets: notification,
                        translateY: [0, -50],
                        opacity: [1, 0],
                        duration: 300,
                        easing: 'easeOutCubic',
                        complete: () => notification.remove()
                    });
                }, 3000);
            }
        });
    },

    // Modal functionality
    openProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="product-modal">
                    <div class="modal-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="modal-details">
                        <h2>${product.name}</h2>
                        <p class="modal-brand">${product.brand}</p>
                        <p class="modal-description">${product.description}</p>
                        
                        <div class="fragrance-notes">
                            <h4>Fragrance Notes</h4>
                            <div class="notes-pyramid">
                                <div class="note-level">
                                    <span class="note-label">Top:</span>
                                    <span class="note-text">${product.notes.top}</span>
                                </div>
                                <div class="note-level">
                                    <span class="note-label">Middle:</span>
                                    <span class="note-text">${product.notes.middle}</span>
                                </div>
                                <div class="note-level">
                                    <span class="note-label">Base:</span>
                                    <span class="note-text">${product.notes.base}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal-footer">
                            <span class="modal-price">$${product.price}</span>
                            <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        anime({
            targets: modal,
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    },

    closeModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            anime({
                targets: modal,
                opacity: [1, 0],
                duration: 300,
                easing: 'easeOutCubic',
                complete: () => {
                    modal.remove();
                    document.body.style.overflow = '';
                }
            });
        }
    },

    // Utility functions
    updateResultsCount(count) {
        const resultsCount = document.getElementById('results-count');
        if (resultsCount) {
            resultsCount.textContent = `${count} fragrance${count !== 1 ? 's' : ''} found`;
        }
    },

    updateCartDisplay() {
        const cartContainer = document.getElementById('cart-items');
        if (!cartContainer) return;

        if (this.cart.length === 0) {
            cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            return;
        }

        cartContainer.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.brand}</p>
                    <p class="cart-item-price">$${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-product-id="${item.id}" data-action="decrease">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-product-id="${item.id}" data-action="increase">+</button>
                </div>
                <button class="remove-from-cart" data-product-id="${item.id}">Remove</button>
            </div>
        `).join('');

        this.updateCartTotal();
    },

    updateCartTotal() {
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalElement = document.getElementById('cart-total');
        if (totalElement) {
            totalElement.textContent = `$${total.toFixed(2)}`;
        }
    },

    updateWishlistDisplay() {
        const wishlistButtons = document.querySelectorAll('.wishlist-btn');
        wishlistButtons.forEach(btn => {
            const productId = parseInt(btn.dataset.productId);
            btn.classList.toggle('active', this.wishlist.some(item => item.id === productId));
        });
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    PerfumeApp.init();
});

// Export for use in other modules
window.PerfumeApp = PerfumeApp;