
function DomUtilityManager() {
    const navbarScroll = () => {
        const navbar = document.querySelector('#main-navigation');

        window.addEventListener('scroll', () => {
            (window.pageYOffset > 100) ? navbar.classList.add('navbar-scroll')
                : navbar.classList.remove('navbar-scroll');
        });
    };

    return {
        navbarScroll
    };
}

export { DomUtilityManager };
