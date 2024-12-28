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