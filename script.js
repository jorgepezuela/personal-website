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

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create and add hamburger menu button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.style.display = 'none';
    nav.appendChild(hamburger);

    // Show/hide hamburger based on screen size
    const updateMenuVisibility = () => {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
            navLinks.classList.remove('active');
        }
    };

    // Initial check
    updateMenuVisibility();

    // Update on window resize
    window.addEventListener('resize', updateMenuVisibility);

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}); 