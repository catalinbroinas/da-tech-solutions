// Style
import '../scss/main.scss';

// Modules
import { DomUtilityManager } from './modules/utility';

// MDBootstrap 5
import { Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const utilityDomManager = DomUtilityManager();

    const initApp = () => {
        initMDB({ Ripple, Dropdown, Collapse });
        utilityDomManager.navbarScroll();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
