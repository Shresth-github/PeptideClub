document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.className = "h-20 rounded-none border-b border-white/10 fixed top-0 w-full z-50 bg-[#0d1017]/60 backdrop-blur-lg";
    header.innerHTML = `
        <div class="flex items-center justify-between px-12 w-full max-w-screen-2xl mx-auto h-full">
            <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">science</span>
                <span class="font-hero-h1 text-[32px] tracking-tighter text-primary-container leading-none pt-1">PEPTIDE CLUB</span>
            </div>
            <nav class="hidden lg:flex flex-1 justify-between items-center px-12">
                <a href="index.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">HOME</a>
                <a href="#" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">RESEARCH PRODUCTS</a>
                <a href="#" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">PURITY ANALYSIS</a>
                <a href="order-tracking.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">ORDER TRACKING</a>
                <a href="dosage-calculator.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">DOSAGE CALCULATOR</a>
                <a href="contact-us.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">CONTACT US</a>
                <a href="about-us.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">ABOUT US</a>
            </nav>
            <div class="hidden lg:flex items-center gap-4 shrink-0">
                <button class="text-white/60 hover:text-primary-container transition-colors flex items-center justify-center p-1" title="User Profile">
                    <span class="material-symbols-outlined text-[22px]">person</span>
                </button>
                <button class="flex items-center gap-2 px-4 py-2 border border-primary-container text-primary-container font-button-text text-button-text hover:bg-primary-container/10 transition-colors">
                    CART
                    <span class="material-symbols-outlined text-sm">login</span>
                </button>
            </div>
            <button class="lg:hidden text-white/80 p-2">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    `;
    
    // Inject the header at the top of the body
    document.body.prepend(header);

    // Set active state based on current filename
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-item').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('text-primary-container', 'border-b-2', 'border-primary-container', 'pb-1');
            link.classList.remove('text-white/60');
        }
    });
});
