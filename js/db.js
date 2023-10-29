'use strict';

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
 * Collection of function for performing CRUD operation on database
 * The database state is managed using global variables and local storage
 *
 * @namespace
 * @property {Object} get - Function for retrieving data from the database
 * @property {Object} post - Function for adding data to the database
 * @property {Object} update - Function for updating data in the database
 * @property {Object} delete - Function for deleting data from the database
 */

export const db = {};