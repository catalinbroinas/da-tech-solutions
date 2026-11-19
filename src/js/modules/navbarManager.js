
function NavbarManager(navbar) {
  if (!navbar) {
    console.error('Navbar not found.');

    return {
      navbarScroll: () => { },
    };
  }

  const navbarScroll = () => {
    window.addEventListener('scroll', () => {
      (window.pageYOffset > 100) ? navbar.classList.add('navbar-scroll')
        : navbar.classList.remove('navbar-scroll');
    });
  };

  return { navbarScroll };
}

export default NavbarManager;
