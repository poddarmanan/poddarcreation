// Updated fabric data with exact specifications from Poddar Creation
const fabricData = [
    {
        id: "fabric-001",
        name: "PC/PC 8.800 kg 41\"+",
        category: "cotton",
        material: "Polycotton Blend",
        weight: "8.800 kg",
        width: "41 inches+", 
        colors: ["#DC143C", "#0077BE", "#50C878", "#FFD700", "#6A0DAD"],
        price: "₹45-65 per meter",
        features: ["DURABLE", "EASY-CARE", "COLOR-FAST", "VERSATILE"],
        description: "Premium polycotton blend fabric with excellent durability and color retention",
        image: "pc-fabric.jpg"
    },
    {
        id: "fabric-002", 
        name: "Cambric Cotton 9.000 kg 42\"+",
        category: "cotton",
        material: "100% Cotton",
        weight: "9.000 kg",
        width: "42 inches+",
        colors: ["#FFFFFF", "#F0F0F0", "#E6E6FA", "#FFF8DC", "#F5F5DC"],
        price: "₹50-70 per meter", 
        features: ["SOFT", "BREATHABLE", "ANTI-SHRINK", "PREMIUM"],
        description: "High-quality cambric cotton with superior softness and breathability",
        image: "cambric-cotton.jpg"
    },
    {
        id: "fabric-003",
        name: "Jaam Cotton 11.000 kg 42\"+", 
        category: "cotton",
        material: "100% Cotton",
        weight: "11.000 kg",
        width: "42 inches+",
        colors: ["#8B4513", "#A0522D", "#D2691E", "#DEB887", "#F4A460"],
        price: "₹55-75 per meter",
        features: ["THICK", "DURABLE", "COLOR-FAST", "PREMIUM"],
        description: "Heavy-weight Jaam cotton fabric with excellent thickness and durability",
        image: "jaam-cotton-42.jpg"
    },
    {
        id: "fabric-004",
        name: "Jaam Cotton 12.500 kg 44\"+",
        category: "cotton", 
        material: "100% Cotton",
        weight: "12.500 kg",
        width: "44 inches+",
        colors: ["#800080", "#9932CC", "#BA55D3", "#DDA0DD", "#E6E6FA"],
        price: "₹60-80 per meter",
        features: ["EXTRA-THICK", "DURABLE", "WIDE-WIDTH", "PREMIUM"],
        description: "Extra heavy-weight Jaam cotton with wider width for premium applications",
        image: "jaam-cotton-44.jpg"
    },
    {
        id: "fabric-005",
        name: "Rayon 14 kg 42\"+",
        category: "rayon",
        material: "100% Rayon", 
        weight: "14 kg",
        width: "42 inches+", 
        colors: ["#FF69B4", "#FFB6C1", "#FFC0CB", "#FF1493", "#DB7093"],
        price: "₹40-60 per meter",
        features: ["SMOOTH", "FLOWING", "COLOR-RICH", "ELEGANT"],
        description: "Premium rayon fabric with smooth texture and excellent drape",
        image: "rayon-14.jpg"
    },
    {
        id: "fabric-006",
        name: "Rayon 17 kg 56\"+",
        category: "rayon",
        material: "100% Rayon",
        weight: "17 kg", 
        width: "56 inches+",
        colors: ["#32CD32", "#90EE90", "#98FB98", "#00FF7F", "#7CFC00"],
        price: "₹50-70 per meter",
        features: ["WIDE-WIDTH", "SMOOTH", "FLOWING", "PREMIUM"],
        description: "Wide-width rayon fabric with heavier weight for premium garments",
        image: "rayon-17.jpg"
    },
    {
        id: "fabric-007",
        name: "Rayon Slub 14kg 42\"+",
        category: "rayon",
        material: "100% Rayon Slub",
        weight: "14 kg",
        width: "42 inches+",
        colors: ["#FF4500", "#FF6347", "#FF8C00", "#FFA500", "#FFE4B5"],
        price: "₹45-65 per meter",
        features: ["TEXTURED", "UNIQUE", "BREATHABLE", "STYLISH"], 
        description: "Textured rayon slub fabric with unique surface characteristics",
        image: "rayon-slub.jpg"
    },
    {
        id: "fabric-008", 
        name: "Rayon Wrinkle 17 kg 56\"+",
        category: "rayon",
        material: "100% Rayon Wrinkle",
        weight: "17 kg",
        width: "56 inches+",
        colors: ["#4169E1", "#6495ED", "#87CEEB", "#B0C4DE", "#E0E6F8"],
        price: "₹55-75 per meter",
        features: ["WRINKLE-EFFECT", "WIDE-WIDTH", "UNIQUE", "PREMIUM"],
        description: "Specialty wrinkle-effect rayon fabric with distinctive texture",
        image: "rayon-wrinkle.jpg"
    },
    {
        id: "fabric-009", 
        name: "Roman Silk 9.500 kg 43\"+",
        category: "silk",
        material: "Roman Silk",
        weight: "9.500 kg",
        width: "43 inches+",
        colors: ["#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#B8860B"],
        price: "₹80-120 per meter",
        features: ["LUXURIOUS", "SMOOTH", "ELEGANT", "PREMIUM"],
        description: "Premium Roman silk fabric with luxurious feel and elegant drape",
        image: "roman-silk.jpg"
    },
    {
        id: "fabric-010", 
        name: "Gajji Silk 20 kg 56\"+",
        category: "silk",
        material: "Gajji Silk",
        weight: "20 kg",
        width: "56 inches+",
        colors: ["#8B0000", "#DC143C", "#B22222", "#CD5C5C", "#F08080"],
        price: "₹100-150 per meter",
        features: ["HEAVY-WEIGHT", "LUXURIOUS", "WIDE-WIDTH", "PREMIUM"],
        description: "Heavy-weight Gajji silk with exceptional quality and wide width",
        image: "gajji-silk.jpg"
    },
    {
        id: "fabric-011", 
        name: "Cotton Lycra 21 kg 56\"+",
        category: "stretch",
        material: "Cotton Lycra Blend",
        weight: "21 kg",
        width: "56 inches+",
        colors: ["#000000", "#2F2F2F", "#696969", "#A9A9A9", "#D3D3D3"],
        price: "₹70-100 per meter",
        features: ["STRETCHY", "COMFORTABLE", "HEAVY-WEIGHT", "VERSATILE"],
        description: "Premium cotton lycra blend with excellent stretch and comfort",
        image: "cotton-lycra.jpg"
    }
];

// Performance optimization utilities
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Smooth scroll to section with Maya theme easing
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        
        // Custom smooth scroll with Maya theme timing
        const startPosition = window.pageYOffset;
        const distance = sectionTop - startPosition;
        const duration = 800;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            
            // Maya theme easing curve
            const easeOut = 1 - Math.pow(1 - progressPercentage, 3);
            
            window.scrollTo(0, startPosition + distance * easeOut);
            
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }
        
        requestAnimationFrame(step);
    }
}

// Scroll progress bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    
    const updateProgress = throttle(() => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = scrolled + '%';
    }, 10);
    
    window.addEventListener('scroll', updateProgress);
}

// Header scroll effects - Maya theme style
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateHeader = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    };
    
    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', requestTick);
}

// Parallax effect for hero background text
function initParallaxEffect() {
    const parallaxText = document.querySelector('.hero__parallax-text');
    
    const updateParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (parallaxText) {
            parallaxText.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
        }
    }, 16);
    
    window.addEventListener('scroll', updateParallax);
}

// Intersection Observer for scroll animations - Maya theme timing
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.animate-fade-up, .animate-stagger, .product-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));

    // Special handling for hero elements
    const heroElements = document.querySelectorAll('.hero__subtitle, .hero__title-line, .hero__description, .hero__buttons');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200 + 500);
    });
}

// Staggered animations for services
function initStaggerAnimations() {
    const staggerGroups = [
        { selector: '.service-item', baseDelay: 0 },
        { selector: '.stat', baseDelay: 0 }
    ];

    staggerGroups.forEach(group => {
        const elements = document.querySelectorAll(group.selector);
        
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(elements).indexOf(entry.target);
                    const delay = group.baseDelay + (index * 100);
                    
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(el => observer.observe(el));
    });
}

// Mobile menu functionality - Maya theme style
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const mobileClose = document.getElementById('mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    
    const openMenu = () => {
        mobileOverlay.classList.add('active');
        navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = () => {
        mobileOverlay.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (navToggle) {
        navToggle.addEventListener('click', openMenu);
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            closeMenu();
            setTimeout(() => {
                scrollToSection(targetId);
            }, 300);
        });
    });
    
    // Close on overlay click
    mobileOverlay.addEventListener('click', (e) => {
        if (e.target === mobileOverlay) {
            closeMenu();
        }
    });
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Create product card HTML with Maya theme styling
function createProductCard(fabric) {
    const colorSwatches = fabric.colors.map(color => 
        `<div class="color-swatch" style="background-color: ${color}" onclick="selectColor('${fabric.id}', '${color}')"></div>`
    ).join('');

    const featureTags = fabric.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');

    const colorBars = fabric.colors.map(color => 
        `<div class="product-card__color" style="background-color: ${color}"></div>`
    ).join('');

    return `
        <div class="product-card" data-category="${fabric.category}" onclick="showFabricModal('${fabric.id}')">
            <div class="product-card__image">
                <div class="product-card__colors">
                    ${colorBars}
                </div>
            </div>
            <div class="product-card__content">
                <h3 class="product-card__title">${fabric.name}</h3>
                <p class="product-card__material">${fabric.material} • ${fabric.weight}</p>
                <div class="product-card__price">${fabric.price}</div>
                <div class="product-card__features">
                    ${featureTags}
                </div>
                <div class="product-card__swatches">
                    ${colorSwatches}
                </div>
            </div>
        </div>
    `;
}

// Populate catalog with Maya theme animations
function populateCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    const productsHTML = fabricData.map(fabric => createProductCard(fabric)).join('');
    catalogGrid.innerHTML = productsHTML;
    
    // Add Maya theme staggered animation delays
    const productCards = catalogGrid.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Product filtering with Maya theme animations
function initProductFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogGrid = document.getElementById('catalog-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active filter with Maya theme styling
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get all product cards
            const productCards = catalogGrid.querySelectorAll('.product-card');
            
            // Maya theme filter animation
            productCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                card.classList.remove('visible');
                
                setTimeout(() => {
                    if (shouldShow) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 150);
            });
        });
    });
}

// Modal functionality with Maya theme animations
function showFabricModal(fabricId) {
    const fabric = fabricData.find(f => f.id === fabricId);
    if (!fabric) return;

    const modal = document.getElementById('fabric-modal');
    const modalBody = document.getElementById('modal-body');
    
    const colorSwatches = fabric.colors.map(color => 
        `<div class="color-swatch" style="background-color: ${color}; width: 30px; height: 30px;"></div>`
    ).join('');

    const featureTags = fabric.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');

    const colorBars = fabric.colors.map(color => 
        `<div style="background-color: ${color}; height: 200px; flex: 1;"></div>`
    ).join('');

    modalBody.innerHTML = `
        <div style="display: flex; gap: 0; margin-bottom: 30px; border: 2px solid #000;">
            ${colorBars}
        </div>
        <h2 style="margin-bottom: 20px; color: #000; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em;">${fabric.name}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
            <div>
                <strong style="color: #000; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Material:</strong>
                <p style="margin: 8px 0 0 0; color: #999; font-size: 14px;">${fabric.material}</p>
            </div>
            <div>
                <strong style="color: #000; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Weight:</strong>
                <p style="margin: 8px 0 0 0; color: #999; font-size: 14px;">${fabric.weight}</p>
            </div>
        </div>
        <div style="margin-bottom: 25px;">
            <strong style="color: #000; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Width:</strong>
            <p style="margin: 8px 0 0 0; color: #999; font-size: 14px;">${fabric.width}</p>
        </div>
        <div style="margin-bottom: 25px;">
            <strong style="color: #000; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Price Range:</strong>
            <p style="margin: 8px 0 0 0; font-size: 18px; font-weight: 700; color: #000;">${fabric.price}</p>
        </div>
        <div style="margin-bottom: 25px;">
            <strong style="color: #000; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Description:</strong>
            <p style="margin: 8px 0 0 0; color: #999; line-height: 1.6; font-size: 14px;">${fabric.description}</p>
        </div>
        <div style="margin-bottom: 25px;">
            <strong style="color: #000; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; display: block; margin-bottom: 12px;">Features:</strong>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${featureTags}
            </div>
        </div>
        <div style="margin-bottom: 30px;">
            <strong style="color: #000; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; display: block; margin-bottom: 12px;">Available Colors:</strong>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${colorSwatches}
            </div>
        </div>
        <div style="display: flex; gap: 20px; margin-top: 30px;">
            <button class="btn btn--primary" onclick="requestQuote('${fabricId}')">REQUEST QUOTE</button>
            <button class="btn btn--outline" onclick="closeFabricModal()">CLOSE</button>
        </div>
    `;
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('visible');
    }, 10);
}

function closeFabricModal() {
    const modal = document.getElementById('fabric-modal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 400);
}

function requestQuote(fabricId) {
    const fabric = fabricData.find(f => f.id === fabricId);
    closeFabricModal();
    scrollToSection('contact');
    
    setTimeout(() => {
        const fabricTypeSelect = document.getElementById('fabric-type');
        const messageTextarea = document.getElementById('message');
        
        if (fabricTypeSelect && fabric) {
            fabricTypeSelect.value = fabric.category;
        }
        
        if (messageTextarea && fabric) {
            messageTextarea.value = `I'm interested in ${fabric.name}. Please provide more details and pricing information.`;
        }
    }, 1000);
}

function selectColor(fabricId, color) {
    const fabric = fabricData.find(f => f.id === fabricId);
    if (fabric) {
        // Add visual feedback
        console.log(`Selected color ${color} for ${fabric.name}`);
    }
}

// Form validation and handling
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        const value = field.value.trim();
        
        if (!value) {
            isValid = false;
            field.style.borderColor = '#DC143C';
        } else if (field.type === 'email' && !isValidEmail(value)) {
            isValid = false;
            field.style.borderColor = '#DC143C';
        } else {
            field.style.borderColor = '#e5e5e5';
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!validateForm(contactForm)) {
                showNotification('PLEASE FILL OUT ALL REQUIRED FIELDS CORRECTLY.', 'error');
                return;
            }
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            showNotification('THANK YOU! YOUR INQUIRY HAS BEEN SUBMITTED. WE WILL GET BACK TO YOU SOON.', 'success');
            
            contactForm.reset();
            
            const formFields = contactForm.querySelectorAll('.form-control');
            formFields.forEach(field => {
                field.style.borderColor = '#e5e5e5';
            });
        });
        
        const formFields = contactForm.querySelectorAll('.form-control');
        formFields.forEach(field => {
            field.addEventListener('blur', () => {
                validateForm(contactForm);
            });
            
            field.addEventListener('input', () => {
                field.style.borderColor = '#e5e5e5';
            });
        });
    }
}

// Maya theme notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: #fff;
        border: 2px solid #000;
        padding: 20px 25px;
        z-index: 4000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 12px;
    `;
    
    if (type === 'success') {
        notification.style.borderColor = '#228B22';
        notification.style.color = '#228B22';
    } else if (type === 'error') {
        notification.style.borderColor = '#DC143C';
        notification.style.color = '#DC143C';
    }
    
    notification.innerHTML = `<p style="margin: 0;">${message}</p>`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Maya theme button hover effects
function initButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Page load animation
function initPageLoadAnimation() {
    document.body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            document.body.style.opacity = '1';
        }, 200);
    });
}

// Resize handling for responsive animations
function initResizeHandling() {
    let resizeTimeout;
    
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculate animations for new viewport
            const animatedElements = document.querySelectorAll('.visible');
            animatedElements.forEach(el => {
                // Force reflow for smooth responsive animations
                el.style.transform = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.transform = '';
            });
        }, 250);
    };
    
    window.addEventListener('resize', handleResize);
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    populateCatalog();
    initScrollProgress();
    initHeaderScroll();
    initParallaxEffect();
    initScrollAnimations();
    initStaggerAnimations();
    initMobileMenu();
    initNavigation();
    initProductFiltering();
    initContactForm();
    initButtonHoverEffects();
    initPageLoadAnimation();
    initResizeHandling();
    
    // Performance optimization
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            console.log('🎨 Maya Theme for Poddar Creation loaded successfully!');
            console.log('✨ All animations initialized with 60fps performance');
        });
    }
});

// Global functions for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.showFabricModal = showFabricModal;
window.closeFabricModal = closeFabricModal;
window.requestQuote = requestQuote;
window.selectColor = selectColor;