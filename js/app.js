'use strict';

/*module import*/
import { addEventOnElements, getGreetingMsg } from './utils.js';
import { Tooltip } from './components/Tooltip.js';

/*toggle sidebar in small*/

const /*{HTMLElement*/ $sidebar = document.querySelector('[data-sidebar]');
const /*{Array<HTMLElement>*/ $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const /*{HTMLElement*/ $overlay = document.querySelector('[data-sidebar-overlay]');

addEventOnElements($sidebarTogglers, 'click', function ()  {
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});

/**
 * Initialize tooltip behavior for all DOM elements with 'data-tooltip' attribute
 */
const /** {Array<HTMLElement>} */ $tooltipElems = document.querySelectorAll('[data-tooltip]');
$tooltipElems.forEach($elem => Tooltip($elem));

/**
 * Show greeting message on homepage
 */

const /** {HTMLElement} */ $greetElem = document.querySelector('[data-greeting]');
const /** {number} */ currentHour = new Date().getHours();
$greetElem.textContent = getGreetingMsg(currentHour);


/**
 * Show current date on homepage
 */
const /** {HTMLElement} */ $currentDateElem = document.querySelector('[data-current-date]');
$currentDateElem.textContent = new Date().toDateString().replace(' ', ', ');

/**
 * Notebook create field
 */
const /** {HTMLElement} */ $sidebarList = document.querySelector('[data-sidebar-list]');
const /** {HTMLElement} */ $addNotebookBtn = document.querySelector('[data-add-notebook]');

/**
 * Shows a notebook creation field in the sidebar when the "Add Notebook" button is clicked
 * The function dynamically adds a new notebook field element, makes it editable, and listens for
 * the "Enter" key to create a new notebook when pressed
 */

const showNotebookFiend = function () {
    console.log("show notebook field")
}

$addNotebookBtn.addEventListener('click', showNotebookFiend);

