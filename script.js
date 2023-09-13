const signup = document.getElementById("signup");

signup.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    let user = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        };
    let json = JSON.stringify(user);
    localStorage.setItem("user", json); 
  
    signup.reset();
    
    alert("Sign up successful. Please sign in.");
});

document.addEventListener("DOMContentLoaded", function () {
    const signin = document.getElementById("signin");
    signin.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        let user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
          };
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


function showSignUpForm() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("signin-form").style.display = "none";
}

function showSignInForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("signin-form").style.display = "block";
}

