const usersJSON = `[
  {
    "firstName":"David", 
    "lastName":"Lopez", 
    "username":"dlopez", 
    "pin":"1234"
  }, 
  {
    "firstName":"Lucas", 
    "lastName":"Lopez", 
    "username":"lmlopez", 
    "pin":"1234"
  },
  {
    "firstName":"Matthew", 
    "lastName":"Lopez", 
    "username":"dmlopez", 
    "pin":"1234"
  }
]`;
const users = JSON.parse(usersJSON);

const accountsJSON = `[
    {
      "isActive":"true", 
      "belongsTo":0, 
      "type":"Checking",
      "balance":1000
    },
    {
      "isActive":"true", 
      "belongsTo":1, 
      "type":"Savings",
      "balance":2300
    },
    {
      "isActive":"true", 
      "belongsTo":2, 
      "type":"Loan",
      "balance":300
    }
  ]`;
const accounts = JSON.parse(accountsJSON);

console.table(users);
console.table(accounts);

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
  // let id =+ 1;
  

  // Check Credentials against JSON Arrays.
  // loop through json object to see if the user exists.

  // Display the Users json.
  
}

// Submit Button for JSON
function displayUsers() {


  let user = "";
  for (let i = 0; i < users.length; i++) {
    user += users[i].firstName + " " + users[i].lastName + " " + users[i].username + " " + users[i].pin + "<br>";
  }

  document.getElementById("users").innerHTML = user;

}

function displayAccounts() {


  let accounts = "";
  for (let i = 0; i < accounts.length; i++) {
    account += accounts[i].isActive + " " + accounts[i].belongsTo + " " + accounts[i].type + " " + accounts[i].type + "<br>";
  }

  document.getElementById("users").innerHTML = account;

}

// Create function to add users to JSON.
function registerUser() {

  // Capture the values from the form fields.
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let username = document.getElementById('username').value;
  let pin = document.getElementById('pin').value;
  console.log(firstName + lastName + username + pin);

  users.push({
    "firstName": firstName, 
    "lastName": lastName, 
    "username": username, 
    "pin": pin
    });

  displayUsers();
  
}