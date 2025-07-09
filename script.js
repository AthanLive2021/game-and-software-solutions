document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DEFINE AQUÍ TUS PRODUCTOS ---
    // Añade o quita productos de este array.
    // Categorías disponibles: 'computacion', 'hogar', 'libros' (o crea las tuyas).
    const products = [
        {
            name: "AMD Procesador de Escritorio Desbloqueado Ryzen 5 7600X de 6 núcleos y 12 hilos",
            image: "https://m.media-amazon.com/images/I/51m7L9bQI8L._AC_SL1080_.jpg", // URL de la imagen del producto
            price: "160,76$",
            originalPrice: "US$ 299,00", // Precio original (tachado)
            discount: "-46%",              // Porcentaje de descuento
            offerTag: "Oferta Prime Day",    // Etiqueta de la oferta (rectángulo rojo) //
            link: "https://amzn.to/4nVaGiP", // ¡IMPORTANTE! Reemplaza TU_ID_AQUI-21
            category: "gaming"
        },
        {
            name: "GIGABYTE B650 Gaming X AX - Tarjeta madre compatible con AM5/ LGA 1718/ AMD/ B650/ ATX/DDR5/PCIe 4.0 M.2/PCIe 4.0/USB 3.2 Gen2x2 Tipo-C/AMD Wi-Fi 6E/Realtek 2.5GbE LAN",
            image: "https://m.media-amazon.com/images/I/81vtcmUUsPL._AC_SL1500_.jpg",
            price: "159,99$",
            originalPrice: "US$ 199,99",
            discount: "-20%",
            offerTag: "",
            link: "https://www.amazon.com/-/es/GIGABYTE-B650-Gaming-AX-compatible/dp/B0BYBHW4SH/ref=sr_1_11?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=6ZNGK802573W&dib=eyJ2IjoiMSJ9.8Lw2SIwbt4yw1jw7QlBHZiVBOcNvkZwBHUZd_1-YsNzA24jTMDxpzelrj8OBeIxExL3Q0A3HR8QmqGCLfmTdelBtrbk61wIMTDL7kNrSMqc8uMZ9NM3uZDAr_hVD7qZYoCHaWyjKbGcH-YuiqD0bPdsmXLjMpaPddhEy3yWuQ0HAgPjo4bPTljheY-k33M0-yscM7Vjt0wOutQnOfoDJFwtC65j6XrAbzO5UY37zCGV_7WVvjmwcyRVj8K6BhqjOgpRcMgPjJFwEcPqEP_CO2X6psrdgy4W2KQOBsHlmDt8.YiVOMWZfSRm4vu3qcKiWugvRmgdTdjguyjADvNAA_qM&dib_tag=se&keywords=Tarjeta%2BMadre%2BB650&qid=1752086260&s=electronics&sprefix=tarjeta%2Bmadre%2Bb650%2Celectronics%2C129&sr=1-11&th=1&tag=gameandsof0ef-20",
            category: "gaming"
        },
        {
            name: "Memoria Ram DDR5 FURY Beast KF552C40BBK2-16 (16 GB 2 X 8) (5200MT/s, CL40 XMP 3.0, 5200MT/s)",
            image: "https://m.media-amazon.com/images/I/71Y-MK6-fsL._AC_SL1500_.jpg",
            price: "52,99$",
            originalPrice: "US$ 64,99",
            discount: "-18%",
            offerTag: "",
            link: "https://www.amazon.com/-/es/Kingston-FURY-Beast-KF552C40BBK2-16-computadora/dp/B09T97ZSVB/ref=sr_1_4?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YSAWKP7NG2I2&dib=eyJ2IjoiMSJ9.hZO0JlFSyQu7hFPGFAPNSQBL6AR2cjDJhm23ViuVLsa8SOqTgawy2HcGbYcVUZM5PGCuDDJ37bZn62jBQ2w70kT_xMzt0w8Y_Fm07kXja1pb0KuANP_EhJbsDUpuBhxasqf-APnAp8s-7J0YgT9Vh8cbcldOviCUSUdWheFowRzT9Qw1meq2TC7JBNX7FHGVadkTNwhgG0jMSmxcIXA7IZYzJ6dROskQA0FqZTyc4fnLLQ1EkANM4IcZKtPQRW_6pFXtolkdEwDpiaWlS5bMpvuYjX0bpKV7GMBJsXMnFDs.eDivdFoplIXhuGsChEI_mVa4PMDZlHIRjgYquD3MsAQ&dib_tag=se&keywords=Ram%2BDDR5%2B16GB&qid=1752090056&s=electronics&sprefix=ram%2Bddr5%2B16gb%2Celectronics%2C161&sr=1-4&th=1&tag=gameandsof0ef-20",
            category: "gaming"
        },
        {
            name: "AMD Procesador de escritorio desbloqueado Ryzen™ 7 5800XT de 8 núcleos y 16 hilos",
            image: "https://m.media-amazon.com/images/I/51kIHB4GNYL._AC_SL1200_.jpg",
            price: "141,00$",
            originalPrice: "US$ 249,00",
            discount: "-43%",
            offerTag: "Oferta Prime Day",
            link: "https://www.amazon.com/-/es/AMD-Procesador-desbloqueado-RyzenTM-5800XT/dp/B0D6NNDQ92/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TQGPQH0BGKRY&dib=eyJ2IjoiMSJ9.SebJKObsKZChTyAxsN2_tnRHV68c4cQhFhuzqtwPblgM9Tjmg9yO-1PTj_SZBYGw4jdGbzZ7ynGqnPpo_pDPFrzj6z7EWJ8iXa3unsJ7RXC0hh-77-ZxT2dD0WRPooEsjUCM428XRuh7yuLEUyghzK0jQiOhmFtzfl2UJUJqusckAdxbVlTs-O7IrPJBBcwm2plEih111gutMJi-1LuXiQRAT5yGuZANqi-Msrg4aDskoYjaqcuHCnlrI_E_-f44k8LUx95ciE7kB4pqPiDJKrp-O3Di1STXwiR3eeIiI1s.XlVV68syEkRWuankb6YK-alJfUTKoKlGTYwffzsUavM&dib_tag=se&keywords=Ryzen+7+5700X&qid=1752087281&s=electronics&sprefix=ryzen+7+5700x%2Celectronics%2C138&sr=1-1&tag=gameandsof0ef-20",
            category: "gaming"
        },
        {
            name: "GIGABYTE B550M K - Tarjeta Madre AM4/ AMD/ B550/ Micro-ATX/ Dual M.2/ USB 3.2 Gen 1/ Realtek GbE LAN/ PCIe 4.0",
            image: "https://m.media-amazon.com/images/I/71Gm7vworoL._AC_SL1500_.jpg",
            price: "69,49$",
            originalPrice: "US$ 99,99",
            discount: "-34%",
            offerTag: "Oferta Prime Day",
            link: "https://amzn.to/40JPdz4",
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
            price: "261,00$",
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