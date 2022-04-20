// function to begin the ATM process.
function gettingStarted() {
    var setupBtn = document.getElementById('setupBtn');
    var getUsername = document.getElementById('getUsername');

    setupBtn.style.display = "none";
    getUsername.style.display = "block";
}

// function to retrieve username entered by user.
function getUserName() {
    var username = document.getElementById('username').value;
    var showUsername = document.getElementById('showUsername');
    var getPin = document.getElementById('getPin');

    if (username.length < 2) {
        showUsername.textContent = ("Your name must contain at least 2 characters.")
    } else {
        showUsername.textContent = ("Perfect! Nice to meet you, " + username + ".")
        getPin.style.display = "block";
        getUsername.style.display = "none";
    }
}

// function to retrieve pin entered by user.
function getUserPin() {
    var pin = document.getElementById('pin').value;
    var showPin = document.getElementById('showPin');

    if (pin.length != 4) {
        showPin.textContent = ("Your pin must be exactly 4 characters.");
    } else {
        showPin.textContent = ("Your pin has been securely saved.");
        loginUser.style.display = "block";
        showUsername.style.display = "none";
        getPin.style.display = "none";
    }
}

// function for user to begin the login process by entering a valid username.
function logIn() {
    var checkUsername = document.getElementById('checkUsername').value;
    var confirm = document.getElementById('confirm');

    if (checkUsername != username.value) {
        confirm.textContent = "Please enter the same name as before.";
    } else {
        loginUser.style.display = "none";
        authenticate.style.display = "block";
        showPin.style.display = "none"
    }
}

// function to confirm the user's pin is correct.
function authenticatePinForLogIn1() {
    var checkPin = document.getElementById('checkPin').value;
    var confirmPin = document.getElementById('confirmPin');

    if (checkPin != pin.value) {
        confirmPin.textContent = ("This is the incorrect pin for " + username.value + ".");
    } else {
        confirmPin.textContent = ("You have successfully logged into your account, " + username.value + ".");
        authenticate.style.display = "none";
        getAccType.style.display = "block";
    }
}

// function to begin the checking fork.
function checking1() {
    authenticate2.style.display = "block";
    getAccType.style.display = "none";
}

// function to authenticate prior to the creation of the checking account.
function authenticatePinForLogIn2() {
    var checkPin = document.getElementById('checkPin2').value;
    var confirmPin = document.getElementById('confirmPin2');

    if (checkPin != pin.value) {
        confirmPin.textContent = ("This is the incorrect pin for " + username.value + ".");
    } else {
        authenticate2.style.display = "none";
        nameChecking.style.display = "block";
    }
}

// function to confirm the checking account has been created.
function checking2() {
    nameChecking.style.display = "none";
    output2.textContent = ("You have successfully created a CHECKING account named " + checkingAccName.value + ".");
    checkingOrder1.style.display = "block";
}

// function to begin the savings fork.
function savings1() {
    authenticate3.style.display = "block";
    getAccType.style.display = "none";
}

// function to authenticate prior to the creation of the savings account.
function authenticatePinForLogIn3() {
    var checkPin = document.getElementById('checkPin3').value;
    var confirmPin = document.getElementById('confirmPin2');

    if (checkPin != pin.value) {
        confirmPin.textContent = ("This is the incorrect pin for " + username.value + ".");
    } else {
        authenticate3.style.display = "none";
        nameSavings.style.display = "block";
    }
}

function savings2() {
    nameSavings.style.display = "none";
    output3.textContent = ("You have successfully created a SAVINGS account named " + savingsAccName.value + ".");
    savingsOrder1.style.display = "block";
}

// function to begin the checking fork.
function credit1() {
    authenticate4.style.display = "block";
    getAccType.style.display = "none";
}

// function to authenticate prior to the creation of the credit account.
function authenticatePinForLogIn4() {
    var checkPin = document.getElementById('checkPin4').value;
    var confirmPin = document.getElementById('confirmPin2');

    if (checkPin != pin.value) {
        confirmPin.textContent = ("This is the incorrect pin for " + username.value + ".");
    } else {
        authenticate4.style.display = "none";
        nameCredit.style.display = "block";
    }
}

// function to begin the loan fork.
function loan1() {
    authenticate2.style.display = "block";
    getAccType.style.display = "none";
}

// function to begin the mortgage fork.
function mortgage1() {
    authenticate2.style.display = "block";
    getAccType.style.display = "none";
}

// function to begin the checking fork.
function carBoatLoan1() {
    authenticate2.style.display = "block";
    getAccType.style.display = "none";
}

function exit1 () {
    getAccType.style.display = "block";
    checkingOrder1.style.display = "none";
}