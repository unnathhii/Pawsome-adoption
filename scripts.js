document.addEventListener('DOMContentLoaded', function() {
    // Get all adopt buttons
    const adoptButtons = document.querySelectorAll('.adopt-button');
  
    // Add click event listener to each adopt button
    adoptButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        // Prevent default behavior (i.e., following the link)
        event.preventDefault();
        
        // Redirect to the login page
        window.location.href = 'file:///C:/Users/unnat/OneDrive/Desktop/all%20projects/webd%20project/pawsome-adoption/login.html'; // Replace '/login' with the actual URL of your login page
      });
    });
  });
  