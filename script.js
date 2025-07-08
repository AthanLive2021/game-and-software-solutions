document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DEFINE AQUÍ TUS PRODUCTOS ---
    // Añade o quita productos de este array.
    // Categorías disponibles: 'electronica', 'hogar', 'libros' (o crea las tuyas).
    const products = [
        {
            name: "AMD Procesador de Escritorio Desbloqueado Ryzen 5 7600X de 6 núcleos y 12 hilos",
            image: "https://m.media-amazon.com/images/I/51m7L9bQI8L._AC_SL1080_.jpg", // URL de la imagen del producto
            price: "160,76$",
            link: "https://amzn.to/4nVaGiP", // ¡IMPORTANTE! Reemplaza TU_ID_AQUI-21
            category: "electronica"
        },
        {
            name: "GIGABYTE B550M K - Tarjeta Madre AM4/ AMD/ B550/ Micro-ATX/ Dual M.2/ USB 3.2 Gen 1/ Realtek GbE LAN/ PCIe 4.0",
            image: "https://m.media-amazon.com/images/I/71Gm7vworoL._AC_SL1500_.jpg",
            price: "69,99$",
            link: "https://amzn.to/40JPdz4",
            category: "electronica"
        },
        {
            name: "Memoria RAM PC de Escritorio DDR4 32GB (2 x 16GB) 3600 MHZ CL18 1.35V XMP2.0 Overclocking con Disipador de Calor",
            image: "https://m.media-amazon.com/images/I/61jSWw3xpyL._AC_SL1280_.jpg",
            price: "51,99$",
            link: "https://amzn.to/4klYdRX",
            category: "electronica"
        },
        {
            name: "Memoria RAM PC de Escritorio DDR4 16GB (2 x 8GB) 3600 MHZ CL18 1.35V XMP2.0 Overclocking con Disipador de Calor",
            image: "https://m.media-amazon.com/images/I/61jSWw3xpyL._AC_SL1280_.jpg",
            price: "30,99$",
            link: "https://amzn.to/44l2RLu",
            category: "electronica"
        },
        {
            name: "Crucial P310 500GB 2280 PCIe Gen4 3D NAND NVMe M.2 SSD - 6,600MB/s - Unidad interna de estado sólido (PC, Laptop, PS4)",
            image: "https://m.media-amazon.com/images/I/41-GwINeIhL._AC_SL1047_.jpg",
            price: "38,99$",
            link: "https://amzn.to/4lMwdZ5",
            category: "electronica"
        },
        {
            name: "GIGABYTE GeForce RTX 5060 WINDFORCE OC 8G, 128 bits GDDR7, PCIe 5.0, Sistema de Refrigeración WINDFORCE",
            image: "https://m.media-amazon.com/images/I/71ii5ow8slL._AC_SL1500_.jpg",
            price: "299,99",
            link: "https://amzn.to/3TtIhlS",
            category: "electronica"
        },
        {
            name: "MSI MAG A650BN Fuente de alimentación ATX para Juegos - 80 Plus Bronze Certified 650W",
            image: "https://m.media-amazon.com/images/I/81w+rLDTExL._AC_SL1500_.jpg",
            price: "53,99$",
            link: "https://amzn.to/4nDVEgU",
            category: "electronica"
        }
    ];

    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // --- 2. FUNCIÓN PARA MOSTRAR LOS PRODUCTOS ---
    const displayProducts = (filteredProducts) => {
        productGrid.innerHTML = ''; // Limpiar la cuadrícula
        filteredProducts.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price}</p>
                        <a href="${product.link}" class="amazon-button" target="_blank" rel="noopener noreferrer">
                            Ver en Amazon <i class="fab fa-amazon"></i>
                        </a>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productCard;
        });
    };

    // --- 3. LÓGICA DE FILTRADO ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Marcar el botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filtered = products.filter(product => product.category === category);
                displayProducts(filtered);
            }
        });
    });

    // Mostrar todos los productos al cargar la página
    displayProducts(products);

    // --- 4. FUNCIONALIDADES DE PROTECCIÓN BÁSICA ---
    // Advertencia: Estas medidas son disuasorias, no una seguridad real.
    // Un usuario avanzado puede saltárselas.

    // Desactivar clic derecho
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Bloquear teclas de inspección (F12, Ctrl+Shift+I, etc.)
    document.addEventListener('keydown', event => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && event.key === 'U')) {
            event.preventDefault();
        }
    });

    // Intento de bloquear el debugger (fácil de eludir)
    (function() {
        function blockDebugger() {
            try {
                (function a(i) {
                    return ('' + (i/i)).length !== 1 || i % 20 === 0 ? (function() {}).constructor('debugger')() : a(++i);
                })(0);
            } catch(e) {
                setTimeout(blockDebugger, 500);
            }
        }
        // Descomenta la siguiente línea si quieres activar esta "protección".
        // blockDebugger();
    })();

});