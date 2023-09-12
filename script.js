
// const signup = document.getElementById("signup");
// const signin = document.getElementById("signin");

// signup.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const firstname = document.getElementById("firstname").value;
//     const lastname = document.getElementById("lastname").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const phonenumber = document.getElementById("phonenumber").value;
    
//     let user = {
//           firstname: firstname,
//           lastname: lastname,
//           username: username,
//           email: email,
//           password: password,
//           phonenumber: phonenumber,
//         };
//         let json = JSON.stringify(user);
//         localStorage.setItem("user", json);
  
//     signup.reset();
    
//     alert("Sign up successful. Please sign in.");
// });

// // Handle signin form submission
// signin.addEventListener("submit", function (e) {
//     e.preventDefault();
    
//     const firstname = document.getElementById("firstname").value;
//     const lastname = document.getElementById("lastname").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const phonenumber = document.getElementById("phonenumber").value;
    
//     let user = {
//           firstname: firstname,
//           lastname: lastname,
//           username: username,
//           email: email,
//           password: password,
//           phonenumber: phonenumber,
//         };
//         let json = JSON.stringify(user);
    
//     if (localStorage.getItem(json)) {
//         alert("Sign in successful. Welcome, " + username + "!");
//     } else {
//         alert("Please try again.");
//     }
    
//     signin.reset();
// });

const signup = document.getElementById("signup");
const signin = document.getElementById("signin");

signup.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phonenumber = document.getElementById("phoneNumber").value; // Corrected ID
    
    let user = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          phonenumber: phonenumber,
        };
    let json = JSON.stringify(user);
    localStorage.setItem("user", json); // Use a string as the key
  
    signup.reset();
    
    alert("Sign up successful. Please sign in.");
});

// Handle signin form submission
signin.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Retrieve the user data from localStorage
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
