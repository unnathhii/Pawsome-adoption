// scripts.js

// Function to alert when the adopt button is clicked
document.addEventListener('DOMContentLoaded', () => {
  const adoptButtons = document.querySelectorAll('.adopt-button');

  adoptButtons.forEach(button => {
      button.addEventListener('click', () => {
          alert('Thank you for considering adoption!');
      });
  });
});

// Function to show alert when 'Contact' is clicked in the nav menu
document.querySelector('nav ul li a[href="#"]').addEventListener('click', (event) => {
  event.preventDefault();
  alert('Contact us at: contact@pawsomeadoption.org');
});

// Function to update date and time
function updateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById('currentDateTime').textContent = dateTimeString;
}

setInterval(updateTime, 1000); // Update every second
