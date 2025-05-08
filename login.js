document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Function to display error messages
    const displayError = (input, message) => {
        const parent = input.parentElement;
        parent.classList.add('error');
        const errorMessage = parent.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
        } else {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            parent.appendChild(errorElement);
        }
    };

    // Function to clear error messages
    const clearError = (input) => {
        const parent = input.parentElement;
        parent.classList.remove('error');
        const errorMessage = parent.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    };

    // Validate email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validate password (at least 6 characters)
    const validatePassword = (password) => password.length >= 6;

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        // Validate email
        if (!validateEmail(emailInput.value)) {
            displayError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate password
        if (!validatePassword(passwordInput.value)) {
            displayError(passwordInput, 'Password must be at least 6 characters long');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        // If valid, redirect or perform login action
        if (isValid) {
            // Simulate API call or login logic
            console.log('Logging in with:', {
                email: emailInput.value,
                password: passwordInput.value,
            });

            // Redirect to welcome page
            window.location.href = 'welcome.html';
        }
    });
});