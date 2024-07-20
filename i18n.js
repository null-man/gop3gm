const i18n = {
    language: 'en',
    languages: {
        en: 'English',
        cn: '中文',
        es: 'Español',
        fr: 'Français'
    },
    translations: {
        en: {
            home: 'Home',
            about: 'About Us',
            products: 'Products',
            services: 'Services',
            cart: 'Cart'
        },
        cn: {
            home: '首页',
            about: '关于我们',
            products: '产品',
            services: '服务',
            cart: '购物车'
        },
        es: {
            home: 'Inicio',
            about: 'Sobre Nosotros',
            products: 'Productos',
            services: 'Servicios',
            cart: 'Carrito'
        },
        fr: {
            home: 'Accueil',
            about: 'À Propos',
            products: 'Produits',
            services: 'Services',
            cart: 'Panier'
        }
    },
    translate(key) {
        return this.translations[this.language][key];
    },
    changeLanguage(lang) {
        this.language = lang;
        this.updatePage();
    },
    updatePage() {
        document.querySelectorAll('[data-translate]').forEach((element) => {
            const key = element.getAttribute('data-translate');
            element.innerText = this.translate(key);
        });
    }
};

export default i18n;
