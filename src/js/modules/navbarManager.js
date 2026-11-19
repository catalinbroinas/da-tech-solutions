import { Collapse } from 'mdb-ui-kit';

function NavbarManager(navbar) {
  if (!navbar) {
    console.error('Navbar not found.');

    return {
      navbarScroll: () => { },
      collapseNavbar: () => { },
    };
  }

  const navbarScroll = () => {
    window.addEventListener('scroll', () => {
      (window.pageYOffset > 100) ? navbar.classList.add('navbar-scroll')
        : navbar.classList.remove('navbar-scroll');
    });
  };

  const collapseNavbar = () => {
    const navbarCollapse = navbar.querySelector('#main-navigation-content');
    if (!navbarCollapse) return;

    const MOBILE_BREAKPOINT = 992;
    const HIDE_DELAY = 300;

    const navbarLinks = navbarCollapse.querySelectorAll('.nav-link');
    const toggleButton = navbar.querySelector('.navbar-toggler');
    const collapseInstance = new Collapse(navbarCollapse, { toggle: false });

    const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
    const isOpen = () => navbarCollapse.classList.contains('show');

    // Tap on link
    navbarLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (!isMobile() || !isOpen()) return;
        setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
      });
    });

    // Scroll
    let scrollHandled = false;
    window.addEventListener('scroll', () => {
      if (!isMobile() || !isOpen() || scrollHandled) return;

      scrollHandled = true;
      setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
    });

    window.addEventListener('hide.mdb.collapse', () => {
      scrollHandled = false;
    });

    // Tap outside
    document.addEventListener('click', (e) => {
      if (!isMobile() || !isOpen()) return;

      const clickedInsideMenu = navbarCollapse.contains(e.target);
      const clickedToggle = toggleButton.contains(e.target);

      if (!clickedInsideMenu && !clickedToggle) {
        setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
      }
    });
  };

  return { navbarScroll, collapseNavbar };
}

export default NavbarManager;
