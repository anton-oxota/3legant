function openCloseMobileMenu() {
    const openMenuButton = document.querySelector('.header-mobile__open-menu-button');
    const closeMenuButton = document.querySelector('.aside-menu__close-menu-button');
    const menu = document.querySelector('.aside-menu');


    function openMenu() {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.classList.remove('active');
        document.body.style.overflow = 'unset';
    }

    openMenuButton.addEventListener('click', openMenu)
    closeMenuButton.addEventListener('click', closeMenu)
    menu.addEventListener('click', ({target}) => {
        if (target.matches('.aside-menu')) {
            closeMenu();
        }
    })
    
}

export default openCloseMobileMenu;