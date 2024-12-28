document.addEventListener('DOMContentLoaded', function() {
    // Add animation delay to cards
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    // Add animation classes to home page elements
    const presentation = document.querySelector('.presentation');
    const tagline = document.querySelector('.tagline');
    const contactInfo = document.querySelector('.contact-info');
    const socialBar = document.querySelector('.social-bar');

    if (presentation && tagline) {  // Check if we're on the home page
        // Reset animations if needed
        presentation.style.animation = 'none';
        tagline.style.animation = 'none';
        
        // Force reflow
        void presentation.offsetWidth;
        
        // Start animations
        presentation.style.animation = '';
        tagline.style.animation = '';
    }

    // Mobile Menu Setup
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create menu button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    nav.appendChild(menuBtn);

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Handle navigation with proper paths
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the href and ensure it works with GitHub Pages
            let href = this.getAttribute('href');
            
            // Handle root path for index.html
            if (href === 'index.html') {
                href = './';
            }
            
            // Add trailing slash for GitHub Pages if needed
            if (!href.endsWith('/') && !href.endsWith('.html')) {
                href += '/';
            }
            
            // Get the base URL for GitHub Pages
            const baseUrl = window.location.pathname.split('/').slice(0, -1).join('/');
            const fullPath = baseUrl + '/' + href;
            
            // Close mobile menu
            navLinks.classList.remove('show');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Smooth transition
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = fullPath;
            }, 300);
        });
    });
}); 