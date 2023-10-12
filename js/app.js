'use strict';

/*module import*/
import { addEventOnElements } from './utils.js';

/*toggle sidebar in small*/

const /*{HTMLElement*/ $sidebar = document.querySelector('[data-sidebar]');
const /*{Array<HTMLElement>*/ $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const /*{HTMLElement*/ $overlay = document.querySelector('[data-sidebar-overlay]');

addEventOnElements($sidebarTogglers, 'click', function ()  {
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});
