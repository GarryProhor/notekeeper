'use strict';

/**
 * Attaches an event listener to a collection of DOM elements
 * @param {NodeListOf<Element>} $elements - An array of DOM elements
 * @param {string} eventType - The event type to listen for (e.g. 'click', 'mouseover')
 * @param {Function} callback - The callback function to execute when the event is triggered (e.g. function() { console.log('clicked') })
 */
const addEventOnElements = function ($elements, eventType, callback) {

    $elements.forEach($element => {
        $element.addEventListener(eventType, callback);
    });
}

/**
 *
 * @param {number} currentHour - the current hour 0-23 to determine the appropriate greeting
 * @param {string}  a greeting message with a salutation corresponding to the  time of day
 */
const getGreetingMsg = function (currentHour){
    const /** {string */ greeting =
        currentHour < 5 ? 'Night' :
        currentHour < 12 ? 'Morning' :
        currentHour < 15 ? 'Noon' :
        currentHour < 17 ? 'Afternoon' :
        currentHour < 20 ? 'Evening' :
        'Night';

    return `Good ${greeting}`;
}

let /** {HTMLElement} | undefined */ $lastActiveNavItem;

/**
 * Activates a navigation item by adding the 'active' class and deactivates the previously active item
 */

const activeNotebook = function () {
    $lastActiveNavItem?.classList.remove('active');
    this.classList.add('active'); //this $navItem
    $lastActiveNavItem = this; // $navItem
}

/**
 * Makes a DOM element editable by setting the 'contenteditable' attribute to true and focusing on it
 *
 * @param {HTMLElement} $element - The DOM element to make editable
 */
const makeElemEditable = function ($element) {
    $element.setAttribute('contenteditable', true);
    $element.focus();
}

/**
 * Generates a unique ID based on the current timestamp
 *
 * @returns {string} A string representation of the current timestamp
 */
const generateID = function (){
    return new Date().getTime().toString();
}

    export {
    addEventOnElements,
    getGreetingMsg,
    activeNotebook,
    makeElemEditable,
    generateID
}

