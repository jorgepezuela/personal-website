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

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Add smooth page transitions
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            document.body.style.opacity = 0;
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}); 