const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginButton = document.querySelector('.form-switch button:first-child');
const signupButton = document.querySelector('.form-switch button:last-child');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');

function showLogin() {
    loginForm.classList.remove('inactive');
    signupForm.classList.add('inactive');
    loginEmail.parentElement.style.display = 'flex';
    loginPassword.parentElement.style.display = 'flex';
    signupEmail.parentElement.style.display = 'none';
    signupPassword.parentElement.style.display = 'none';
}

function showSignup() {
    loginForm.classList.add('inactive');
    signupForm.classList.remove('inactive');
    loginEmail.parentElement.style.display = 'none';
    loginPassword.parentElement.style.display = 'none';
    signupEmail.parentElement.style.display = 'flex';
    signupPassword.parentElement.style.display = 'flex';
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    // Add your password validation logic here
    return password.length >= 6; // Example: Minimum length of 6 characters
}

// Event listeners for form switching buttons
loginButton.addEventListener('click', function() {
    showLogin();
});

signupButton.addEventListener('click', function() {
    showSignup();
});

// Form submission event listeners with validation
loginForm.addEventListener('submit', function(event) {
    if (!validateEmail(loginEmail.value)) {
        alert('Invalid email format');
        event.preventDefault();
    } else if (!validatePassword(loginPassword.value)) {
        alert('Password must be at least 6 characters long');
        event.preventDefault();
    } else {
        // Redirect to welcome page upon successful login
        window.location.href = 'welcome.html';
    }
});

// Form submission event listeners with validation
signupForm.addEventListener('submit', function(event) {
    if (!validateEmail(signupEmail.value)) {
        alert('Invalid email format');
        event.preventDefault();
    } else {
        const password = signupPassword.value;
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            event.preventDefault();
        } else if (!containsUpperCase(password)) {
            alert('Please include at least one capital letter in the password');
            event.preventDefault();
        } else if (!containsStrongCharacter(password)) {
            alert('Please include at least one special character in the password');
            event.preventDefault();
        } else {
            // Hide signup form and show login form
            showLogin(); // Hide signup form and show login form
            event.preventDefault(); // Prevent default form submission
        }
    }
});

function validatePassword(password) {
    // Regular expression to validate password
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{6,}$/;
    return regex.test(password);
}

function containsUpperCase(password) {
    return /[A-Z]/.test(password);
}

function containsStrongCharacter(password) {
    return /[!@#$%^&*]/.test(password);
}


function showLogin() {
    loginForm.classList.remove('inactive');
    signupForm.classList.add('inactive');
   loginButton.click();
}

// Event listener for the login button below the login form
const loginButtonBelow = document.getElementById('loginButton');
loginButtonBelow.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Redirect to welcome.html
    window.location.href = 'welcome.html';
});
