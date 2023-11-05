'use strict';

import { generateID } from './utils.js';

//DB Object
let /** {Object} */ notekeeperDB = {};

/**
 * Initializes a local database. If the date exists in local storage, it is loaded;
 * otherwise, a new empty database structure is created and stored
 */
const initDB = function () {
    const /** {JSON | undefined} */ db = localStorage.getItem('notekeeperDB');

    if(db){
        notekeeperDB = JSON.parse(db);
    }else {
        notekeeperDB.notebooks = [];
        localStorage.setItem('notekeeperDB', JSON.stringify(notekeeperDB));
    }
}

initDB();

/**
 * Reads and loads the localStorage data in to the global variable 'notekeeperDB'
 */
const readDB = function (){
    notekeeperDB = JSON.parse(localStorage.getItem('notekeeperDB'));
}

/**
 * Writes the current state of the global variable 'notekeeperDB' to local storage
 */
const writeDB = function (){
    localStorage.setItem('notekeeperDB', JSON.stringify(notekeeperDB));
}

/**
 * Collection of function for performing CRUD operation on database
 * The database state is managed using global variables and local storage
 *
 * @namespace
 * @property {Object} get - Function for retrieving data from the database
 * @property {Object} post - Function for adding data to the database
 * @property {Object} update - Function for updating data in the database
 * @property {Object} delete - Function for deleting data from the database
 */

export const db = {

    post: {
        /**
         * Adds a new notebook to the database
         *
         * @function
         * @param {string} name - The name of the new notebook
         * @returns {Object} The newly created notebook object
         */
        notebook(name){
            readDB();

            const /** {Object} */ notebookData = {
                id: generateID(),
                name,
                notes: []
            }

            notekeeperDB.notebooks.push(notebookData);

            writeDB();

            return notebookData;
        }
    },

    get: {
        /**
         * Retrieves all notebooks from the database
         * @function
         * @returns {Array<Object>} An array of notebook objects
         */
        notebook() {
            readDB();

            return notekeeperDB.notebooks;
        }
    }

};