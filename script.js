const signup = document.getElementById("signup");
const signin = document.getElementById("signin");

signup.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phonenumber = document.getElementById("phoneNumber").value; 
    
    let user = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          phonenumber: phonenumber,
        };
    let json = JSON.stringify(user);
    localStorage.setItem("user", json); 
  
    signup.reset();
    
    alert("Sign up successful. Please sign in.");
});

signin.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
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
