document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check local storage for theme preference, default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = navLinks.style.display === 'flex';
        navLinks.style.display = isExpanded ? 'none' : 'flex';
        navActions.style.display = isExpanded ? 'none' : 'flex';
        
        if (!isExpanded) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--bg-primary)';
            navLinks.style.padding = '24px';
            navLinks.style.borderBottom = '1px solid var(--border-color)';
            
            navActions.style.position = 'absolute';
            navActions.style.top = 'calc(100% + 200px)'; // rough estimate
            navActions.style.left = '0';
            navActions.style.width = '100%';
            navActions.style.background = 'var(--bg-primary)';
            navActions.style.padding = '0 24px 24px';
            navActions.style.justifyContent = 'center';
        } else {
            // Reset styles when closing
            navLinks.removeAttribute('style');
            navActions.removeAttribute('style');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.section-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => revealObserver.observe(el));

    // --- Navbar Background on Scroll ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-sm)';
            navbar.style.padding = '8px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0';
        }
    });

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close others
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });

    // --- Screenshots Tabs ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const screenImgs = document.querySelectorAll('.screen-img');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');

            // Hide all images
            screenImgs.forEach(img => img.classList.remove('active'));
            // Show target image
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- Form Submission ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic simulation of form sending
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.classList.add('success-bg');
                btn.style.color = 'var(--success)';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.classList.remove('success-bg');
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth < 992) {
                    navLinks.style.display = 'none';
                    navActions.style.display = 'none';
                }
            }
        });
    });
});
