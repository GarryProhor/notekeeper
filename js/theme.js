'use strict';

/*
* Initialize the theme
 */

const /** {string | null} */ storedTheme = localStorage.getItem('theme');
const /** {Boolean} */ systemThemeIsDark = window.matchMedia('prefers-color-scheme: dark');
const /** {string} */ initialTheme = storedTheme ?? (systemThemeIsDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', initialTheme);


