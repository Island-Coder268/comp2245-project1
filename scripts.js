/* Add your JavaScript to this file */

// Select the form, email input field, and the message div
const form = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('emailInput');
const messageDiv = document.querySelector('.message');

// Event listener for the form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting & refreshing the page
    event.preventDefault();

    // Check if the email input field has a value
    if(emailInput.value) {
        // Display the success message
        messageDiv.textContent = `Thank you! Your email address ${emailInput.value} has been added to our mailing list!`;
        messageDiv.style.color = 'green'; 
    } else {
        // Display the error message
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red'; 
    }

    // Clear the email input field after form submission
    emailInput.value = '';
});
