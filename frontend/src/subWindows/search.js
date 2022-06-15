const api = require('../methods/fatch.js');

const navbar = require('../methods/loadNavbar.js');
// Load and prepend the navbar
var res = navbar.loadElements("Navbar", ["../index.html", "./search.html", "./options.html"])
const nav = document.createElement('Navbar');
nav.innerHTML = res;
document.body.prepend(nav);

searchButton = document.getElementById("searchButton");

searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", async event => {
    await api.fatch("search", searchInput.value);
})