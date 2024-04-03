import { productAds, icons, logos, productImages, homeImages } from "src/assets/images/image-routes";

/**
 * Objeto con data cableada para toda la plantilla
 */
export const mainData = {
    /**
     * navbar
     */
    navBar: {
        texts: ['fragancias', 'regalos'],
        mainLogo: logos.antonioBanderas,
        icons: [icons.person, icons.kart]
    },
    /**
     * Sección con las marcas
     */
    brandsBanner: [logos.dior, logos.paco_rabanne, logos.antonioBanderas],
    /**
     * Módulo de home
     */
    homeModule: {
        /**
         * Publicidad superior izquierda
         */
        mainLeftAd: {
            text: 'for her',
            button: 'descubrir',
            image: homeImages.her
        },
        /**
         * Publicidad superior derecha
         */
        mainRightAd: {
            text: 'for him',
            button: 'descubrir',
            image: homeImages.him
        },
        /**
         * Sección del carrusel
         */
        carouselSection: {
            text: 'todas tus fragancias favoritas',
            strongText: 'en un solo lugar',
            button: 'descubrir',
            carouselItems: [
                {
                    image: productImages.product1
                },
                {
                    image: productImages.product2
                },
                {
                    image: productImages.product3
                },
                {
                    image: productImages.product4
                },
                {
                    image: productImages.product5
                },
                {
                    image: productImages.product6
                },
                {
                    image: productImages.product7
                },
                {
                    image: productImages.product8
                },
            ]
        },
        /**
         * Sección con publicidades de 4x4
         */
        squareAdsSection: {
            images: [
                productAds.productAd2,
                productAds.productAd3,
                productAds.productAd10,
                productAds.productAd4,
            ]
        },
        /**
         * Sección baja con publicidad y artículo al lado
         */
        lowerSection: {
            productAd: productAds.productAd10,
            article: {
                title: 'SOBREPASA LOS LÍMITES DE LA EXPRESIVIDAD Y CREA TU PROPIO ESTILO.',
                text: 'Redescubre nuestras atrevidas y seductoras fragancias de la mano de los íconos y de las novedades de Rabanne.',
                button: 'descubrir'
            }
        }
    },
    /**
     * Módulo de productos
     */
    productsModule: {
        mainAd: productAds.productAd1,
        lowerAd: homeImages.footer_lady,
        products: {
            count: 30,
            items: [
                {
                    img: productImages.product1,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product2,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product3,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product4,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product5,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product6,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product7,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product8,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product9,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product10,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product1,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
                {
                    img: productImages.product8,
                    productName: 'OLYMPEA',
                    brandName: 'PACO RABANNE'
                },
            ]
        },
        productsOverview: {
            productsInkart: [
                {
                    image: productImages.product1,
                    name: 'lady million',
                    brandName: 'paco rabanne',
                    sku: 'krogm93746917',
                    quantity: 1,
                    price: 175,
                    currency: 'us$'
                },
                {
                    image: productImages.product1,
                    name: 'lady million',
                    brandName: 'paco rabanne',
                    sku: 'krogm93746917',
                    quantity: 1,
                    price: 175,
                    currency: 'us$'
                },
                {
                    image: productImages.product1,
                    name: 'lady million',
                    brandName: 'paco rabanne',
                    sku: 'krogm93746917',
                    quantity: 1,
                    price: 175,
                    currency: 'us$'
                },
            ],
            preBill: {
                basePrice: 175,
                delivery: 175,
                totalPrice: 175,
                discount: '_ US$',
                currency: 'US$'
            }

        }
    },
}