function showSignUpForm() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("signin-form").style.display = "none";
}

function showSignInForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("signin-form").style.display = "block";
}


document.addEventListener("DOMContentLoaded", function () {
    const signup = document.getElementById("signup");
    const signin = document.getElementById("signin");
    
    signup.addEventListener("submit", function (e) {
        e.preventDefault();
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        
        let user = {
              firstname: firstname,
              lastname: lastname,
              username: username,
              email: email,
              password: password,
            };
        let json = JSON.stringify(user);
        localStorage.setItem("user", json); 

        // localStorage.setItem(email, password);
        alert("Sign up successful. Please sign in.");
        signup.reset();
        
        
    });

    signin.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;
        
        const storedUser = localStorage.getItem("user");
        
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.email === email && user.password === password) {
                alert("Sign in successful. Welcome, " + user.firstname + "!");
            } else {
                alert("Incorrect email or password. Please try again.");
            }
        } else {
            alert("User not found. Please sign up first.");
        }
        
        signin.reset();
    });
     
});  




