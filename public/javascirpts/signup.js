$(document).ready(function() {
    $("#signupForm").submit(function(event) {
        event.preventDefault();
        checkUserExists();
    });

    function checkUserExists() {
        var username = $("#username").val();

        // Make a GET request to check if user already exists
        fetch(`/api/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    alert("Username already exists. Please choose a different username.");
                } else {
                    // User doesn't exist, proceed with signup
                    signupUser();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while checking user existence.");
            });
    }

    function signupUser() {
        var formData = {
            username: $("#username").val(),
            email: $("#email").val(),
            password: $("#password").val()
        };

        // Make a POST request to the signup API endpoint
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error during signup');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert("Signup successful!");
                // Redirect to a success page or the login page
                window.location.href = '/dashboard';
            } else {
                alert("Signup failed.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred during signup.");
        });
    }
});
