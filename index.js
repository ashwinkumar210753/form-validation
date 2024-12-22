function validateSignup() {
    
    // let errorMessages = document.getElementsByClassName('error');
    // while (errorMessages.length > 0) {
    // errorMessages[0].remove();
    // }

    let isValid = true; 
    let username = document.getElementById("username").value.trim();

    if (username === "") {
        displayError('username', "Username is required");
        isValid = false;
    }

    let email = document.getElementById('email').value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (email.trim() === "") {
        displayError('email', "Email is required");
        isValid = false;
      } 
      else if (!emailPattern.test(email)) {
        displayError('email', "Please enter a valid email address");
        isValid = false;
      }
      let password = document.getElementById('password').value;
      if (password.trim() === "") {
        displayError('password', "Password is required");
        isValid = false;
      } else if (password.length < 6) {
        displayError('password', "Password must be at least 6 characters");
        isValid = false;
      }
      let confirmPassword = document.getElementById('confirmPassword').value;
      if (confirmPassword.trim() === "") {
        displayError('confirmPassword', "Confirm password is required");
        isValid = false;
      } else if (confirmPassword !== password) {
        displayError('confirmPassword', "Passwords do not match");
        isValid = false;
      }

    return isValid; 

    function displayError(fieldId, message) {
        let field = document.getElementById(fieldId); 
        let error = document.createElement('div');
        error.classList.add('error');
        error.innerText = message;
        field.parentElement.appendChild(error);
    }
}