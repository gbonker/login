/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
function getUsernameField() {
  return $("#email");
}

function getPasswordField() {
  return $("#pass");
}

function getFormField() {
  return getUsernameField().closest('form');
}

function getSubmitButton() {
  return $("#loginbutton");
}

// for PayPal
function getPaypalLogInButton() {
  return $("#ul-btn");
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //

  // for PayPal

  // Strategy #1: redirect to the login page if no login form fields are found on home page

  if (getFormField() === null) {
    console.log("no form fields detected");
    var currentUrl = location.href;
    var newUrl = location.href + "/login";
    location.href = newUrl;
  }

  // Strategy #2: find login button and click it with JS if no form fields are found on home page
  if (getFormField() === null) {
    console.log("no form fields detected");
    $('#ul-btn').click(function () {
      $('#ul-btn').click();
    }); 
  }

  // Strategy #3: find a login link and automatically click that link
  //document.getElementById('#ul-btn').click();
  var paypalLogInButton = getPaypalLogInButton();
  console.log(paypalLogInButton);
  //$(paypalLogInButton).onclick(function () {
  //  window.location.href = "https://www.paypal.com/login";
  //}); 

  paypalLogInButton.click();
  
  paypalLogInButton.onclick = function() {
    changeURL()
  };

  function changeURL() {
    window.location.href = "https://www.paypal.com/login";
  }

  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
