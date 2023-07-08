// Import sections from content.py
const sections = require('./content.py');

// Function to load content
function loadContent() {
    sections.forEach(section => {
        updateDOM(section);
    });
    document.dispatchEvent(new Event('contentLoaded'));
}

// Function to update DOM
function updateDOM(section) {
    const sectionDiv = document.getElementById(section.name.toLowerCase());
    sectionDiv.innerHTML = section.content;
}

// Function to generate navigation links
function generateNavLinks() {
    const navbar = document.getElementById('navbar');
    sections.forEach(section => {
        const navLink = document.createElement('a');
        navLink.href = `#${section.name.toLowerCase()}`;
        navLink.innerText = section.name;
        navbar.appendChild(navLink);
    });
}

// Call functions on window load
window.onload = () => {
    loadContent();
    generateNavLinks();
};