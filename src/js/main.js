// MDBootstrap 5
import { Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit';

// Styles
import '../scss/main.scss';

// Modules
import NavbarManager from './modules/navbarManager';

function AppManager() {
  const addEvents = () => {
    const navbar = document.querySelector('#main-navigation');
    const navbarManager = NavbarManager(navbar);

    navbarManager.navbarScroll();
    navbarManager.collapseNavbar();
  };

  const initApp = () => {
    initMDB({ Ripple, Dropdown, Collapse });
    addEvents();
  };

  return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
  AppManager().initApp();
});
