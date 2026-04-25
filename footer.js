document.addEventListener('DOMContentLoaded', () => {
    const footer = document.createElement('footer');
    footer.className = "bg-[#08090D] rounded-none border-t border-white/10 py-12 w-full flex flex-col items-center gap-8 px-12 mt-auto z-10 relative";
    footer.innerHTML = `
        <div class="text-xl text-white font-hero-h1 tracking-wider">PEPTIDE CLUB</div>
        <nav class="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto">
            <a href="index.html" class="footer-link text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-primary-container transition-colors">HOME</a>
            <a href="#" class="footer-link text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-primary-container transition-colors">RESEARCH PRODUCTS</a>
            <a href="#" class="footer-link text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-primary-container transition-colors">PURITY ANALYSIS</a>
            <a href="order-tracking.html" class="footer-link text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-primary-container transition-colors">ORDER TRACKING</a>
            <a href="dosage-calculator.html" class="footer-link text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-primary-container transition-colors">DOSAGE CALCULATOR</a>
            <a href="contact-us.html" class="footer-link text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-primary-container transition-colors">CONTACT US</a>
            <a href="about-us.html" class="footer-link text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-primary-container transition-colors">ABOUT US</a>
        </nav>
        <div class="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 text-center">
            © 2024 PEPTIDE CLUB. LABORATORY GRADE RESEARCH ONLY.
        </div>
    `;
    
    // Inject the footer at the bottom of the body
    document.body.appendChild(footer);

    // Set active state based on current filename
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.footer-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('text-primary-container');
            link.classList.remove('text-white/30');
        }
    });
});
