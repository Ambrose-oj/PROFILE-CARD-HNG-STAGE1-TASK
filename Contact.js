document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const successMsg = document.getElementById('success-msg');

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  /** Shows an error message below the input */
  const showError = (input, errorMessage) => {
    const errorDiv = input.nextElementSibling; 
    if (errorDiv && errorDiv.classList.contains('error-msg')) {
      errorDiv.textContent = errorMessage;
    }
  };

  /** Clears the error message for an input */
  const clearError = (input) => {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-msg')) {
      errorDiv.textContent = '';
    }
  };

  
  form.addEventListener('submit', (event) => {

    event.preventDefault(); 
    
    let isValid = true;

    [name, email, subject, message].forEach(clearError);
    successMsg.textContent = '';
    
    if (name.value.trim() === '') {
      showError(name, 'Full name is required.');
      isValid = false;
    }

    if (email.value.trim() === '') {
      showError(email, 'Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      showError(email, 'Please enter a valid email (e.g., name@example.com).');
      isValid = false;
    }
    
    if (subject.value.trim() === '') {
      showError(subject, 'Subject is required.');
      isValid = false;
    }
    
    if (message.value.trim() === '') {
      showError(message, 'Message is required.');
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, 'Message must be at least 10 characters long.');
      isValid = false;
    }
   

    if (isValid) {
      successMsg.textContent = 'Your message has been sent successfully!';
      form.reset(); 
      
      // Optional: Hide the success message after 5 seconds
      setTimeout(() => {
        successMsg.textContent = '';
      }, 5000);
    }
  });
  


  // Clear errors as the user types ---
  
  [name, email, subject, message].forEach(input => {
    input.addEventListener('input', () => {
      clearError(input);
    });
  });

});


