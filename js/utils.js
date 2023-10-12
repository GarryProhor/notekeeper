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

export {
    addEventOnElements
}

