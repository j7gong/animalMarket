$(document).ready(function() {
    // Event listener for form submission
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        loginUser();
    });

    // Event listener for click on submit button (alternative approach)
    $("#submitBtn").click(function(event) {
        event.preventDefault();
        loginUser();
    });

    function loginUser() {
        var formData = {
            username: $("#username").val(),
            password: $("#password").val()
        };

        // Make a POST request to the login API endpoint
        fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error during login');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert("Login successful!");
                window.location.href = '/dashboard';
            } else {
                alert("Invalid login credentials.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred during login.");
        });
    }
});