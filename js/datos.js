var category = ['telefonia', 'ordenador', 'metaverso', 'la maia'];
let products =
    [
        {
            "id": 1,
            "category": "telefonia",
            "title": "Funda acuática CELLY para smartphone hasta 7' color Amarillo fluor",
            "price": 79.99,
            "iva": 21,
            "description": "Certificación IPX8 con su cierre hermético que permite su uso en entornos de polvo, agua (Máximo 1 Hora y 10 Metros de profundidad). La superficie táctil transparente permite el uso del teléfono en todo momento. Válido para la totalidad de teléfonos disponibles en el mercado hasta 7' de tamaño.",
            "images": [
                "img/productos/1_a.avif",
                "img/productos/1_b.avif",
                "img/productos/1_c.avif"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 2,
            "category": "ordenador",
            "title": "Funda teclado Apple Magic Keyboard Folio (10ª generación)",
            "price": 299.99,
            "iva": 21,
            "description": "El Magic Keyboard Folio es el compañero perfecto del iPad (10.ª generación). Te permite escribir con total comodidad, lleva un trackpad integrado para trabajar de forma precisa y 14 teclas de función. Su versátil diseño de dos piezas se compone de un teclado extraíble y una cubierta trasera de protección que se acoplan de forma magnética al iPad. Gracias al soporte ajustable, encontrarás el ángulo perfecto para verlo todo genial. Además tu iPad estará protegido vayas donde vayas.",
             "images": [
                "img/productos/2_a.webp",
                "img/productos/2_b.webp",
                "img/productos/2_c.avif",
                "img/productos/2_d.jpg"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 3,
            "category": "ordenador",
            "title": "Combo de teclado + ratón inalámbricos HP 230 blanco",
            "price": 31.99,
            "iva": 21,
            "description": "Disfruta de un combo de teclado y ratón que es cómodo, elegante y silencioso. Puedes rendir al máximo y ser silencioso al mismo tiempo. Además, gracias a los atajos de teclado y a las baterías de larga duración, podrás mantener la productividad durante todo el día. El teclado chiclet te permite disfrutar de una escritura más precisa y cómoda, además de más silenciosa. Afronta cualquier tarea con la durabilidad de este ratón que ha sido diseñado para brindar confort. Reduce el desorden y disfruta de la libertad de movimiento sin retardo que ofrece la conexión inalámbrica a 2,4 GHz",
            "images": [
                "img/productos/3_a.webp",
                "img/productos/3_b.webp"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 4,
            "category": "metaverso",
            "title": "AMVR Touch Controller Grip Accesorio de Correa antideslizamiento para Quest 2 con Apertura de batería, Correa de muñeca Ajustable (Gris)",
            "price": 17.99,
            "iva": 21,
            "description": "Establecido en 2015, AMVR ha estado con los entusiastas de los juegos de realidad virtual durante más de 7 años. Durante este período, nos hemos comprometido con la innovación de productos de realidad virtual, creando más de 200 patentes que cubren la utilidad, el diseño y la apariencia. Gracias por su continua confianza y apoyo. Continuaremos iterando en productos de realidad virtual que satisfagan a nuestros consumidores.",
            "images": [
                "img/productos/4_b.jpg",
                "img/productos/4_c.jpg",
                "img/productos/4_d.jpg"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 5,
            "category": "telefonia",
            "title": "Funda transparente de silicona con correa Samsung para Galaxy Z Flip4",
            "price": 20.93,
            "iva": 21,
            "description": "Esta funda transparente tiene una anilla en la parte trasera para evitar que se te caiga o escurra de las manos y permite lucir el color del teléfono que hayas elegido.",
            "images": [
                "img/productos/5_a.avif",
                "img/productos/5_b.avif",
                "img/productos/5_c.avif"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 6,
            "category": "telefonia",
            "title": "Funda transparente de silicona Celly para Samsung Galaxy A13 4G",
            "price": 5.20,
            "iva": 21,
            "description": "Funda de Silicona ligera y suave al tacto. La carcasa Gelskin de Celly es una funda flexible que permite una adherencia perfecta a los bordes de su smartphone protegiéndolo de caídas accidentales, golpes, arañazos y suciedad sin deformarse ni aflojarse. La carcasa deja un fácil acceso a los controles, conectores, altavoz y cámara permitiendo cargar el teléfono sin quitar la cubierta. Funda en suave y envolvente TPU anti-choque. La flexible y de forma especial se adhiere perfectamente a los bordes del smartphone protegiéndolo de caídas accidentales, golpes, arañazos y suciedad sin deformarse ni aflojarse. La carcasa deja un fácil acceso a los controles, conectores, altavoz y cámara y permite cargar el teléfono sin quitar la cubierta. La solución ergonómica ideal para proteger su dispositivo es la Gelskin de Celly.",
            "images": [
                "img/productos/6_a.webp",
                "img/productos/6_b.jpg",
                "img/productos/6_c.avif"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 7,
            "category": "telefonia",
            "title": "Música y llamadas nítidas y claras",
            "price": 7.64,
            "iva": 21,
            "description": "Ligeros para disfrutar de la experiencia definitiva de movilidad con música. Cómodos tapones de auricular de silicona de ajuste seguro.  Diafragmas de neodimio de 9 mm para un sonido potente y equilibrado",
            "images": [
                "img/productos/7_a.webp",
                "img/productos/7_b.webp"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 8,
            "category": "telefonia",
            "title": "Guantes táctiles TNB para smartphones",
            "price": 19.90,
            "iva": 21,
            "description": "TNB - Especiales para patinete o scooter.",
            "images": [
                "img/productos/8_a.webp"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 9,
            "category": "ordenador",
            "title": "Funda Samsung para el proyector The Freestyle",
            "price": 50.15,
            "iva": 21,
            "description": "Protege tu proyector The Freestyle estés donde estés. Tiene un grado de impermeabilidad IP55 diseñado para el uso diario",
            "images": [
                "img/productos/9_a.webp",
                "img/productos/9_b.avif",
                "img/productos/9_c.webp"

            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 10,
            "category": "ordenador",
            "title": "Blackfire Gaming sofa chair bfx-705 multi Ardistel",
            "price": 299.90,
            "iva": 21,
            "description": "Producto compatible con MULTI-SISTEMAS • Asiento y respaldo acolchados, fabricados en símil de piel  PU. Construcción sólida y diseño ergonómico especialmente concebido para largas sesiones de juego. Cómodos reposabrazos acolchados, incluyendo un posavasos y bolsillo lateral. • Respaldo ajustable hasta 135 grados y reposapiés  extensible. Cojines lumbar y cervical incluidos. Giro 360º. • Base circular de 60cm con soportes fabricados en material suave. Soporte de 180mm para un peso de hasta 140kg.",
            "images": [
                "img/productos/10_a.jpg",
                "img/productos/10_b.jpg",
                "img/productos/10_c.avif"
            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 11,
            "category": "metaverso",
            "title": "HTC VIVE Pro 2 Gafas de Realidad Virtual + Controladores + SteamVR Base Station 2.0",
            "price": 1299.90,
            "iva": 21,
            "description": "Producto compatible con MULTI-SISTEMAS • Asiento y respaldo acolchados, fabricados en símil de piel  PU. Construcción sólida y diseño ergonómico especialmente concebido para largas sesiones de juego. Cómodos reposabrazos acolchados, incluyendo un posavasos y bolsillo lateral. • Respaldo ajustable hasta 135 grados y reposapiés  extensible. Cojines lumbar y cervical incluidos. Giro 360º. • Base circular de 60cm con soportes fabricados en material suave. Soporte de 180mm para un peso de hasta 140kg.",
            "images": [
                "img/productos/11_a.webp",
                "img/productos/11_b.webp",
                "img/productos/11_c.webp"

            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 12,
            "category": "metaverso",
            "title": "HTC Vive Controlador",
            "price": 24.98,
            "iva": 21,
            "description": "Te presentamos el Controlador para HTC Vive. ¡Un espectacular controlador de alta tecnología con el que podrás interactuar y juega sin cables! Incluye 24 sensores, un trackpad multifunción, un gatillo, feedback háptico y batería recargable.",
            "images": [
                "img/productos/12_a.webp",
                "img/productos/12_b.webp",
                "img/productos/12_c.webp",
                "img/productos/12_d.webp"

            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 13,
            "category": "metaverso",
            "title": "HTC Controller 2.0 para Serie Vive Pro",
            "price": 76.98,
            "iva": 21,
            "description": "El HTC Controller VIVE Pro te permite interactuar y jugar con el mundo virtual de forma inalámbrica. Este dispositivo innovador y fácil de usar cuenta con nada menos que 24 sensores, un trackpad multifunción, un disparador doble, retroalimentación táctil de alta definición y una batería.",
            "images": [
                "img/productos/13_a.webp",
                "img/productos/13_b.webp"

            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 14,
            "category": "metaverso",
            "title": "Epson Moverio BT-35E Gafas Inteligentes",
            "price": 769.67,
            "iva": 21,
            "description": "Con las nuevas BT-35E, las smartglasses transparentes binoculares con tecnología Si-OLED inalámbrica, los usuarios podrán centrarse en tareas específicas con múltiples contenidos y poca latencia procedente de distintos dispositivos a través de conexiones HDMI o USB-C. Estas cómodas y duraderas smartglasses se han diseñado para que las utilice una gran variedad de usuarios o visitantes.",
            "images": [
                "img/productos/14_a.webp",
                "img/productos/14_b.webp",
                "img/productos/14_c.webp",
                "img/productos/14_d.webp"

            ],
            "fem":true,
            "ofert":true
        },
        {
            "id": 15,
            "category": "ordenador",
            "title": "PcCom Gold Élite Intel Core i5-11400F/16GB/500GBSSD/RTX3060",
            "price": 899.01,
            "iva": 21,
            "description": "Con las nuevas BT-35E, las smartglasses transparentes binoculares con tecnología Si-OLED inalámbrica, los usuarios podrán centrarse en tareas específicas con múltiples contenidos y poca latencia procedente de distintos dispositivos a través de conexiones HDMI o USB-C. Estas cómodas y duraderas smartglasses se han diseñado para que las utilice una gran variedad de usuarios o visitantes.",
            "images": [
                "img/productos/15_a.webp",
                "img/productos/15_b.webp",
                "img/productos/15_c.webp",
                "img/productos/15_d.webp"

            ],
            "fem":true,
            "ofert":true
        }
    ]

    ;