var sections = [
  { name: 'home', content: 'Welcome to our home page.' },
  { name: 'artists', content: 'Meet our talented artists.' },
  { name: 'podcasts', content: 'Check out our latest podcasts.' },
  { name: 'music', content: 'Explore our music collection.' },
  { name: 'events', content: 'Stay updated with our events.' },
  { name: 'contact', content: 'Get in touch with us.' }
];

function loadSections() {
  sections.forEach(function(section) {
    document.getElementById(section.name + '-section').innerHTML = section.content;
  });
}

function updateSection(name, content) {
  var section = sections.find(function(section) {
    return section.name === name;
  });

  if (section) {
    section.content = content;
    document.getElementById(name + '-section').innerHTML = content;
  }
}

window.onload = loadSections;