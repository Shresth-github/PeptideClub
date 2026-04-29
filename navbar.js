document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.className = "h-20 rounded-none border-b border-white/10 fixed top-0 w-full z-50 bg-[#0d1017]/60 backdrop-blur-lg";
    header.innerHTML = `
        <div class="flex items-center justify-between px-12 w-full max-w-screen-2xl mx-auto h-full">
            <a href="index.html" class="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">science</span>
                <span class="font-hero-h1 text-[32px] tracking-tighter text-primary-container leading-none pt-1">PEPTIDE CLUB</span>
            </a>
            <nav class="hidden lg:flex flex-1 justify-between items-center px-12">
                <a href="index.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">HOME</a>
                <a href="research-products.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">RESEARCH PRODUCTS</a>
                <a href="purity-analysis.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">PURITY ANALYSIS</a>
                <a href="order-tracking.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">ORDER TRACKING</a>
                <a href="dosage-calculator.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">DOSAGE CALCULATOR</a>
                <a href="contact-us.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">CONTACT US</a>
                <a href="about-us.html" class="nav-item font-nav-link text-nav-link text-white/60 hover:bg-sky-200/10 hover:text-sky-200 transition-all duration-300 whitespace-nowrap">ABOUT US</a>
            </nav>
            <div class="hidden lg:flex items-center gap-4 shrink-0">
                <button class="text-white/60 hover:text-primary-container transition-colors flex items-center justify-center p-1" title="User Profile">
                    <span class="material-symbols-outlined text-[22px]">person</span>
                </button>
                <button onclick="toggleCartSidebar()" class="relative flex items-center gap-2 px-4 py-2 border border-primary-container text-primary-container font-button-text text-button-text hover:bg-primary-container/10 transition-colors">
                    CART
                    <span class="material-symbols-outlined text-sm">shopping_cart</span>
                    <span id="cart-counter" class="absolute -top-2 -right-2 bg-primary-container text-[#08090D] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center border-2 border-[#0d1017]">0</span>
                </button>
            </div>
            <button class="lg:hidden text-white/80 p-2">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    `;
    
    // Inject the header at the top of the body
    document.body.prepend(header);

    // Inject the Sidebar Cart
    const cartSidebar = document.createElement('div');
    cartSidebar.id = "cart-sidebar-container";
    cartSidebar.className = "relative z-[100]";
    cartSidebar.innerHTML = `
        <div id="cart-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm hidden transition-opacity opacity-0 z-[100]" onclick="toggleCartSidebar()"></div>
        <div id="cart-sidebar" class="fixed top-0 right-0 h-full w-full max-w-md bg-[#08090D] border-l border-white/10 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col shadow-2xl z-[101]">
            <!-- Sidebar Header -->
            <div class="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                <h2 class="font-hero-h1 text-[32px] text-white uppercase leading-none mt-2">YOUR CART</h2>
                <button onclick="toggleCartSidebar()" class="text-white/40 hover:text-white transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <!-- Cart Items Container -->
            <div id="sidebar-cart-items" class="flex-grow overflow-y-auto p-6 space-y-4">
                <!-- Items injected here -->
            </div>
            <!-- Sidebar Footer -->
            <div id="sidebar-cart-footer" class="p-6 border-t border-white/10 shrink-0 bg-black/20">
                <div class="flex justify-between items-center mb-6">
                    <span class="font-hero-h1 text-[24px] text-white uppercase mt-1">SUBTOTAL</span>
                    <span id="sidebar-cart-total" class="font-hero-h1 text-[28px] text-primary-container leading-none">₹0</span>
                </div>
                <button onclick="openGlobalCheckout()" class="w-full bg-primary-container text-[#08090D] font-button-text text-[13px] py-4 uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2">
                    PROCEED TO CHECKOUT
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(cartSidebar);

    // Inject Global Checkout Modal
    const checkoutModal = document.createElement('div');
    checkoutModal.id = "global-checkout-modal";
    checkoutModal.className = "fixed inset-0 z-[1000] bg-black/85 backdrop-blur-sm hidden flex-col items-center justify-center p-5";
    checkoutModal.innerHTML = `
        <div class="bg-[#0d1017]/90 backdrop-blur-xl border border-white/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl">
            <button onclick="closeGlobalCheckout()" class="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
                <span class="material-symbols-outlined">close</span>
            </button>

            <h2 class="font-hero-h1 text-[40px] text-white mb-8 uppercase leading-none">CHECKOUT</h2>

            <form onsubmit="handleGlobalOrder(event)" class="space-y-10">
                <!-- Contact -->
                <div>
                    <h3 class="font-hero-h1 text-[24px] text-white mb-4 uppercase border-l-2 border-primary-container pl-4">Contact</h3>
                    <div class="space-y-4">
                        <input type="email" placeholder="Email" required class="w-full bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none transition-all rounded-sm">
                        <label class="flex items-center gap-3 text-white/60 text-sm cursor-pointer select-none">
                            <input type="checkbox" checked class="w-4 h-4 rounded-sm bg-white/10 border-white/20 text-primary-container focus:ring-0">
                            Email me with news and offers
                        </label>
                    </div>
                </div>

                <!-- Delivery -->
                <div>
                    <h3 class="font-hero-h1 text-[24px] text-white mb-4 uppercase border-l-2 border-primary-container pl-4">Delivery</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="md:col-span-2">
                            <label class="block text-[10px] text-white/40 uppercase mb-1 font-mono tracking-widest pl-1">Country/Region</label>
                            <input type="text" value="India" readonly class="w-full bg-white/5 border border-white/20 text-white p-4 outline-none rounded-sm">
                        </div>
                        <input type="text" placeholder="First name" required class="bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm">
                        <input type="text" placeholder="Last name" required class="bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm">
                        <input type="text" placeholder="Address" required class="md:col-span-2 bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm">
                        <input type="text" placeholder="Apartment, suite, etc. (optional)" class="md:col-span-2 bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm">
                        <input type="text" placeholder="City" required class="bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm">
                        <select required class="bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm appearance-none">
                            <option value="" disabled selected class="bg-[#08090D]">State</option>
                            <option value="Delhi" class="bg-[#08090D]">Delhi</option>
                            <option value="Maharashtra" class="bg-[#08090D]">Maharashtra</option>
                            <option value="Karnataka" class="bg-[#08090D]">Karnataka</option>
                        </select>
                        <input type="text" placeholder="PIN code" required class="bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm">
                        <input type="tel" placeholder="Phone" required class="bg-white/5 border border-white/20 text-white p-4 focus:border-primary-container outline-none rounded-sm md:col-span-2">
                    </div>
                </div>

                <!-- Legal Box -->
                <div class="bg-primary-container/5 border border-primary-container/20 p-6 rounded-sm">
                    <label class="flex items-start gap-4 cursor-pointer group">
                        <input type="checkbox" required class="mt-1 w-5 h-5 rounded-sm bg-white/10 border-white/20 text-primary-container focus:ring-0">
                        <div class="text-sm">
                            <span class="text-white font-bold group-hover:text-primary-container transition-colors uppercase tracking-tight">Research Purposes Only <span class="text-red-500">*</span></span>
                            <p class="text-white/60 leading-relaxed mt-2 text-[12px]">I agree that all products are intended strictly for laboratory research purposes only and are not intended for human consumption, medical use, or diagnostic purposes. I have read and agree to the <a href="#" class="text-primary-container underline">FDA Disclosure</a>.</p>
                        </div>
                    </label>
                </div>

                <div class="space-y-4 pt-4 border-t border-white/10">
                    <label class="flex items-center gap-3 text-white/60 text-sm cursor-pointer">
                        <input type="checkbox" class="w-4 h-4 rounded-sm bg-white/10 border-white/20 text-primary-container focus:ring-0">
                        Save this information for next time
                    </label>
                    <label class="flex items-center gap-3 text-white/60 text-sm cursor-pointer">
                        <input type="checkbox" class="w-4 h-4 rounded-sm bg-white/10 border-white/20 text-primary-container focus:ring-0">
                        Text me with news and offers
                    </label>
                </div>

                <button type="submit" class="w-full bg-primary-container text-[#08090D] font-button-text text-button-text py-5 uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(173,216,230,0.2)]">
                    PLACE RESEARCH ORDER
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(checkoutModal);

    // Close on outside click
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            closeGlobalCheckout();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('global-checkout-modal');
            if (modal && !modal.classList.contains('hidden')) {
                closeGlobalCheckout();
            }
            const sidebar = document.getElementById('cart-sidebar');
            if (sidebar && !sidebar.classList.contains('translate-x-full')) {
                toggleCartSidebar();
            }
        }
    });
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
    
    window.openGlobalCheckout = function() {
        const sidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('cart-overlay');
        
        // Hide sidebar
        if (!sidebar.classList.contains('translate-x-full')) {
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }

        const modal = document.getElementById('global-checkout-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.closeGlobalCheckout = function() {
        const modal = document.getElementById('global-checkout-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    window.handleGlobalOrder = function(e) {
        e.preventDefault();
        alert('Research Order Request Submitted. An analyst will verify your credentials shortly.');
        localStorage.removeItem('peptide_cart');
        window.dispatchEvent(new Event('storage'));
        closeGlobalCheckout();
        // If we happen to be on the cart page, try to re-render it
        if (typeof renderCart === 'function' && typeof loadCart === 'function') {
            loadCart();
        } else {
            // Optional: Reload the page or just let the cart be empty
            location.reload();
        }
    };

    window.showToast = function(message) {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'fixed bottom-6 right-6 z-[2000] flex flex-col gap-3 pointer-events-none';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'bg-primary-container text-[#08090D] px-6 py-4 font-mono text-sm tracking-wide shadow-2xl transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-3 border border-white/20';
        toast.innerHTML = `<span class="material-symbols-outlined text-[18px]">check_circle</span> <span>${message}</span>`;
        
        container.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        });

        setTimeout(() => {
            toast.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    window.addToCart = function(product) {
        let cart = JSON.parse(localStorage.getItem('peptide_cart') || '[]');
        // Clean up any corrupted items
        cart = cart.filter(item => item && item.id && item.name);
        
        const existingIndex = cart.findIndex(item => item.id === product.id);

        if (existingIndex !== -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem('peptide_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));
        
        // Show toast instead of opening sidebar
        showToast(`${product.name} added to cart`);
    };

    // Cart Sidebar Logic
    window.toggleCartSidebar = function() {
        const sidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('cart-overlay');
        
        if (sidebar.classList.contains('translate-x-full')) {
            // Open
            sidebar.classList.remove('translate-x-full');
            overlay.classList.remove('hidden');
            // small delay for transition
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            renderSidebarCart();
        } else {
            // Close
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }
    };

    window.renderSidebarCart = function() {
        const itemsContainer = document.getElementById('sidebar-cart-items');
        const totalDisplay = document.getElementById('sidebar-cart-total');
        const footer = document.getElementById('sidebar-cart-footer');
        
        const cartItems = JSON.parse(localStorage.getItem('peptide_cart') || '[]');
        
        if (cartItems.length === 0) {
            itemsContainer.innerHTML = `
                <div class="h-full flex flex-col items-center justify-center text-center py-10 opacity-60">
                    <span class="material-symbols-outlined text-[48px] mb-4">shopping_cart</span>
                    <p class="font-mono text-sm uppercase tracking-widest">Cart is empty</p>
                </div>
            `;
            footer.style.display = 'none';
        } else {
            itemsContainer.innerHTML = cartItems.map((item, idx) => `
                <div class="bg-white/5 border border-white/10 p-4 flex gap-4 relative group hover:border-primary-container/30 transition-colors">
                    <div class="w-16 h-16 bg-black/40 flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-white/30 text-[24px]">science</span>
                    </div>
                    <div class="flex-grow">
                        <h3 class="font-hero-h1 text-[20px] text-white uppercase leading-none mb-1">${item.name}</h3>
                        <div class="font-label-mono text-[10px] text-primary-container mb-3 tracking-widest">₹${item.price.toLocaleString('en-IN')}</div>
                        
                        <div class="flex items-center gap-3">
                            <div class="flex items-center border border-white/20 h-8 rounded-sm bg-black/40">
                                <button onclick="updateSidebarQty(${idx}, -1)" class="px-2 text-white/60 hover:text-white">-</button>
                                <span class="px-3 text-white font-mono text-xs">${item.quantity}</span>
                                <button onclick="updateSidebarQty(${idx}, 1)" class="px-2 text-white/60 hover:text-white">+</button>
                            </div>
                        </div>
                    </div>
                    <button onclick="removeSidebarItem(${idx})" class="absolute top-4 right-4 text-white/20 hover:text-red-400 transition-colors">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </div>
            `).join('');
            
            const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            totalDisplay.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
            footer.style.display = 'block';
        }
    };

    window.updateSidebarQty = function(idx, delta) {
        let cartItems = JSON.parse(localStorage.getItem('peptide_cart') || '[]');
        cartItems[idx].quantity = Math.max(1, cartItems[idx].quantity + delta);
        localStorage.setItem('peptide_cart', JSON.stringify(cartItems));
        window.dispatchEvent(new Event('storage'));
        renderSidebarCart();
        
        // If we happen to be on the cart page, try to re-render it too
        if (typeof renderCart === 'function') {
            renderCart();
        }
    };

    window.removeSidebarItem = function(idx) {
        let cartItems = JSON.parse(localStorage.getItem('peptide_cart') || '[]');
        cartItems.splice(idx, 1);
        localStorage.setItem('peptide_cart', JSON.stringify(cartItems));
        window.dispatchEvent(new Event('storage'));
        renderSidebarCart();
        
        // If we happen to be on the cart page, try to re-render it too
        if (typeof renderCart === 'function') {
            // Need to reload cart items in cart.html context
            if (typeof loadCart === 'function') loadCart();
        }
    };

    // Cart Counter Logic
    const updateGlobalCartCounter = () => {
        const counter = document.getElementById('cart-counter');
        if (!counter) return;
        const cartItems = JSON.parse(localStorage.getItem('peptide_cart') || '[]');
        const totalQty = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
        counter.innerText = totalQty;
        counter.style.display = totalQty > 0 ? 'block' : 'none';
        
        // If sidebar is open, update it
        const sidebar = document.getElementById('cart-sidebar');
        if (sidebar && !sidebar.classList.contains('translate-x-full')) {
            renderSidebarCart();
        }

        // Update individual product badges
        document.querySelectorAll('[id^="qty-badge-"]').forEach(badge => {
            badge.classList.add('hidden');
            badge.innerText = '0';
        });
        cartItems.forEach(item => {
            const badge = document.getElementById(`qty-badge-${item.id}`);
            if (badge) {
                badge.innerText = item.quantity;
                badge.classList.remove('hidden');
            }
        });
    };
    updateGlobalCartCounter();
    window.addEventListener('storage', updateGlobalCartCounter);
});
