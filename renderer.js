const { ipcRenderer } = require('electron');

document.getElementById('homeButton').addEventListener('click', () => {
  // Replace with your local content or homepage
  document.getElementById('contentFrame').src = 'index.html';
});

document.getElementById('modsButton').addEventListener('click', () => {
  // Directly open Modrinth's website in the main window
  ipcRenderer.send('navigate', 'https://modrinth.com');
});

document.getElementById('settingsButton').addEventListener('click', () => {
  document.getElementById('contentFrame').src = 'settings.html'; // Local settings page
});
