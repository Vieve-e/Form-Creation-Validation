document.addEventListener("DOMContentLoaded" , function(){
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");
    const passwordInput = document.getElementById("passwordInput");
    const passwordError = document.getElementById("passwordError");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit" , function(event){
        // Prevent the form from submitting by default
        event.preventDefault();

        // Input retrieval and Trimming
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validation Logic
        // Variable Declaration
        let isValid = true;

        // Array to store validation error messages
        const messages = [];

       // Using the IF condition
       if (username.length < 3){
        messages.push('User must be at least 3 characters long');
        return;
       } else {
        isValid = false;
       }

       if (!isValidEmail(email)){
        messages.push('Please check that email is valid');
        return;
       } else {
        isValid = false;
       }

       if (password.length < 8){
        messages.push('Password must be at least 8 characters long');
        return;
       } else {
        isValid = false;
       }

       // Displaying Feedback
       // Make feedbackDiv visible 
       feedbackDiv.style.display = "block";

       if (isValid){
        //Registration is successful
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
       } else {
        // Registration failed, display error messages
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545";
       }





       // Helper function to validate email format
       function isValidEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
       }
    }
)
});