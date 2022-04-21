const users = [
  {"id":"1", "firstName":"David", "lastName":"Lopez", "username":"dlopez", "password":"Welcome1"},
];

// Create a function for register
function login() {

  // Change Dyamic Message to welcome
  document.getElementById('dynamicMessage').innerHTML = "Enter Your Credentials!";
  displayLoginForm();

}
// Create a function for Login
function register() {
  
  // Change Dyamic Message to welcome
  document.getElementById('dynamicMessage').innerHTML = "Please register your account!";
  displayRegisterForm();

}

// Register Form
function displayRegisterForm() {
  // Display register message.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');
  
  registerForm.style.display = "block";
  loginForm.style.display = "none";

}

// Display Login Form
function displayLoginForm() {

  // Save form IDs to a variable.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');
  
  registerForm.style.display = "none";
  loginForm.style.display = "block";

}

// Submit Button for JSON
function submit() {

  // Save Value of input fields from form.
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('firstName').value;
  let username = document.getElementById('firstName').value;
  let password = document.getElementById('firstName').value;
  // Check Credentials against JSON Arrays.
  // loop through json object to see if the user exists.
  
  // Add Value to JSON. (users)
  users.id += 1;
  users.firstName = firstName;
  users.lastName = lastName;
  users.username = username;
  users.password = password;

  // Display data on the dom
  myArray = JSON.parse(users);

  document.getElementById(users).innerHTML = myArray;
}