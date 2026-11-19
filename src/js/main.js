// Style
import '../scss/main.scss';

// Modules
import NavbarManager from './modules/navbarManager';

// MDBootstrap 5
import { Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit';

function MainDomManager() {
  const navbar = document.querySelector('#main-navigation');
  const navbarManager = NavbarManager(navbar);

  const initApp = () => {
    initMDB({ Ripple, Dropdown, Collapse });
    navbarManager.navbarScroll();
    navbarManager.collapseNavbar();
  };

  return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
  const domManager = MainDomManager();
  domManager.initApp();
});
