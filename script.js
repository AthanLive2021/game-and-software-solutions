document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DEFINE AQUÍ TUS PRODUCTOS ---
    // Añade o quita productos de este array.
    // Categorías disponibles: 'computacion', 'hogar', 'libros' (o crea las tuyas).
    const products = [
        {
            name: "AMD Procesador de Escritorio Desbloqueado Ryzen 5 7600X de 6 núcleos y 12 hilos",
            image: "https://m.media-amazon.com/images/I/51m7L9bQI8L._AC_SL1080_.jpg", // URL de la imagen del producto
            price: "160,76$",
            originalPrice: "US$ 299.00", // Precio original (tachado)
            discount: "-46%",              // Porcentaje de descuento
            offerTag: "Oferta Prime Day",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4nVaGiP", // ¡IMPORTANTE! Reemplaza TU_ID_AQUI-21
            category: "gaming"
        },
        {
            name: "GIGABYTE B550M K - Tarjeta Madre AM4/ AMD/ B550/ Micro-ATX/ Dual M.2/ USB 3.2 Gen 1/ Realtek GbE LAN/ PCIe 4.0",
            image: "https://m.media-amazon.com/images/I/71Gm7vworoL._AC_SL1500_.jpg",
            price: "69,49$",
            originalPrice: "US$ 99,99", // Precio original (tachado)
            discount: "-34%",              // Porcentaje de descuento
            offerTag: "Oferta Prime Day",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/40JPdz4",
            category: "gaming"
        },
        {
            name: "Memoria RAM PC de Escritorio DDR4 32GB (2 x 16GB) 3600 MHZ CL18 1.35V XMP2.0 Overclocking con Disipador de Calor",
            image: "https://m.media-amazon.com/images/I/61jSWw3xpyL._AC_SL1280_.jpg",
            price: "53,99$",
            originalPrice: "", // Precio original (tachado)
            discount: "",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4klYdRX",
            category: "productividad"
        },
        {
            name: "Memoria RAM PC de Escritorio DDR4 16GB (2 x 8GB) 3600 MHZ CL18 1.35V XMP2.0 Overclocking con Disipador de Calor",
            image: "https://m.media-amazon.com/images/I/61jSWw3xpyL._AC_SL1280_.jpg",
            price: "30,99$",
            originalPrice: "", // Precio original (tachado)
            discount: "",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/44l2RLu",
            category: "gaming"
        },
        {
            name: "Crucial P310 500GB 2280 PCIe Gen4 3D NAND NVMe M.2 SSD - 6,600MB/s - Unidad interna de estado sólido (PC, Laptop, PS4)",
            image: "https://m.media-amazon.com/images/I/41-GwINeIhL._AC_SL1047_.jpg",
            price: "38,99$",
            originalPrice: "US$ 59,99", // Precio original (tachado)
            discount: "-35%",              // Porcentaje de descuento
            offerTag: "Oferta Relampago",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4lMwdZ5",
            category: "gaming"
        },
        {
            name: "GIGABYTE GeForce RTX 5060 WINDFORCE OC 8G, 128 bits GDDR7, PCIe 5.0, Sistema de Refrigeración WINDFORCE",
            image: "https://m.media-amazon.com/images/I/71ii5ow8slL._AC_SL1500_.jpg",
            price: "299,99",
            originalPrice: "", // Precio original (tachado)
            discount: "",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/3TtIhlS",
            category: "gaming"
        },
        {
            name: "MSI MAG A650BN Fuente de alimentación ATX para Juegos - 80 Plus Bronze Certified 650W",
            image: "https://m.media-amazon.com/images/I/81w+rLDTExL._AC_SL1500_.jpg",
            price: "49,99$",
            originalPrice: "US$ 74,99", // Precio original (tachado)
            discount: "-33%",              // Porcentaje de descuento
            offerTag: "El precio mas bajo en 30 dias",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4nDVEgU",
            category: "gaming"
        },
        {
            name: "GIGABYTE B550 Gaming X V2 - Tarjeta Madre Para AMD Ryzen 5000/ B550/ ATX/ M.2/ HDMI/ DVI/ USB 3.1 Gen 2/ DDR4/ ATX",
            image: "https://m.media-amazon.com/images/I/81A2DlnZuBL._AC_SL1500_.jpg",
            price: "85,49$",
            originalPrice: "US$ 129,99", // Precio original (tachado)
            discount: "-34%",              // Porcentaje de descuento
            offerTag: "Oferta Prime Day",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4lkQu8c",
            category: "gaming"
        },
        {
            name: "ASUS Tarjeta Gráfica NVIDIA GeForce RTX 3060V2 OC Edition 12 GB GDDR6, PCIe 4.0, Memoria GDDR6 de 12 GB, HDMI 2.1, DisplayPort 1.4a",
            image: "https://m.media-amazon.com/images/I/81TRGFVP0xL._AC_SL1500_.jpg",
            price: "329,97$",
            originalPrice: "", // Precio original (tachado)
            discount: "",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/45UVuLS",
            category: "productividad"
        },
        {
            name: "AMD Procesador de Escritorio Desbloqueado Ryzen™ 9 5900XT de 16 núcleos y 32 hilos",
            image: "https://m.media-amazon.com/images/I/51cCp1eCm5L._AC_SL1333_.jpg",
            price: "261$",
            originalPrice: "US$ 349,00", // Precio original (tachado)
            discount: "-25%",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/44lhAGg",
            category: "productividad"
        },
        {
            name: "MSI MAG B550 TOMAHAWK - AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, HDMI/DP, ATX, Procesadores AMD Ryzen serie 5000)",
            image: "https://m.media-amazon.com/images/I/71qy+HEM9NL._AC_SL1200_.jpg",
            price: "159,99$",
            originalPrice: "US$ 195,99", // Precio original (tachado)
            discount: "-18%",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/409do9Z",
            category: "productividad"
        },
        {
            name: "AMSI MAG A750BN PCIE 5 Fuente de Alimentación - PCIE 5.1 Ready - 80 Plus BronzeCertified 750w - Tamaño compacto - ATX",
            image: "https://m.media-amazon.com/images/I/71NjTAXgapL._AC_SL1500_.jpg",
            price: "64,99$",
            originalPrice: "US$ 94,99", // Precio original (tachado)
            discount: "-32%",              // Porcentaje de descuento
            offerTag: "El precio mas bajo en 30 dias",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/3Ijdfuv",
            category: "productividad"
        },
        {
            name: "Kingston NV3 1TB M.2 2280 NVMe SSD | PCIe 4.0 Gen 4x4 | Hasta 6000 MB/s",
            image: "https://m.media-amazon.com/images/I/71ZnK38jZzL._AC_SL1500_.jpg",
            price: "58,00$",
            originalPrice: "US$ 79,99", // Precio original (tachado)
            discount: "-27%",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4lnFjM2",
            category: "productividad"
        },
        {
            name: "Thermalright Frozen Notte 360 Black ARGB V2 Enfriador de CPU de refrigeración por agua",
            image: "https://m.media-amazon.com/images/I/611BpsempAL._SL1500_.jpg",
            price: "55,39$",
            originalPrice: "", // Precio original (tachado)
            discount: "",              // Porcentaje de descuento
            offerTag: "",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4lKt4ce",
            category: "gaming"
        },
        {
            name: "Cooler Master MasterLiquid 360L Core 360L - Enfriador líquido AIO de bucle cerrado de 14.173 in, sincronización ARGB, bomba de placa fría Gen S, AMD Ryzen AM5/AM4, Intel LGA 1200/1700/1851,",
            image: "https://m.media-amazon.com/images/I/61BIqo6-ZTL._SL1500_.jpg",
            price: "84,99$",
            originalPrice: "US$ 99,99", // Precio original (tachado)
            discount: "-15%",              // Porcentaje de descuento
            offerTag: "Oferta Relampago",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4lcVTOs",
            category: "productividad"
        },
    ];

    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // --- 2. FUNCIÓN PARA MOSTRAR LOS PRODUCTOS (con la nueva estructura) ---
const displayProducts = (filteredProducts) => {
    productGrid.innerHTML = ''; // Limpiar la cuadrícula
    filteredProducts.forEach(product => {
        // --- HTML DE LA TARJETA ACTUALIZADO ---
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">

                    <h3>${product.name}</h3>

                    ${product.offerTag ? `<div class="offer-tag">${product.offerTag}</div>` : ''}
                    
                    <div class="price-container">
                        ${product.discount ? `<span class="discount-percentage">${product.discount}</span>` : ''}
                        <span class="final-price">${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">Precio: <s>${product.originalPrice}</s></span>` : ''}
                    </div>

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