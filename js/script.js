// Heade Scroll

function headerScroll() {

    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop < 1) {
            header.classList.remove('fixed');
            header.classList.remove('glassify');
        } else if (scrollTop > 40) {
            header.classList.remove('fixed');
            header.classList.add('glassify');
        } else {
            header.classList.add('fixed');
        }
        
    });

}
headerScroll();


// Theme Menu Setting Menu open

function themeMenuNavMenu() {

    const themeMenuSettingBtn = document.querySelector("[data-theme-setting-btn]");
    const themeMenu = document.querySelector("[data-theme-menu]");
    const navMenu = document.querySelector("[data-nav-menu]");
    const navMenuBtn = document.querySelector("[data-nav-menu-btn]");

    themeMenuSettingBtn.addEventListener("click", function () { 
        themeMenu.classList.toggle("active");

        if (themeMenu.classList.contains("active")) {
            
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }

        } 
    });

    navMenuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            
            if (themeMenu.classList.contains("active")) {
                themeMenu.classList.remove("active");
            }
        } 
    });

}
themeMenuNavMenu();


// Theme Changer

function toggleTheme() {

    const setTheme = function (theme) {

        if (theme === 'auto') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', systemTheme);
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
    
        localStorage.setItem('theme', theme);
        updateButtonState(theme);
    };
    
    const storedTheme = localStorage.getItem('theme') || 'auto';
    setTheme(storedTheme);
    
    function updateButtonState(selectedTheme) {
        document.querySelectorAll('.item-list').forEach(btn => {
            const isActive = 
                (selectedTheme === 'dark' && btn.hasAttribute('data-dark-theme-btn')) ||
                (selectedTheme === 'light' && btn.hasAttribute('data-light-theme-btn')) ||
                (selectedTheme === 'auto' && btn.hasAttribute('data-auto-theme-btn'));
            btn.classList.toggle('active', isActive);
        });
    }
    
    
    window.addEventListener('DOMContentLoaded', function () {
        
        const darkTheme = document.querySelector('[data-dark-theme-btn]');
        darkTheme.addEventListener('click', function () {
            setTheme('dark');
            themeMenu.classList.remove("active");
        });
    
        const lightTheme = document.querySelector('[data-light-theme-btn]');
        lightTheme.addEventListener('click', function () {
            setTheme('light');
            themeMenu.classList.remove("active");
        });
    
    
        const autoTheme = document.querySelector('[data-auto-theme-btn]');
        autoTheme.addEventListener('click', function () {
            setTheme('auto');
            themeMenu.classList.remove("active");
        });
    });
    
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'auto') {
            setTheme('auto');
        }
    });

}
toggleTheme();