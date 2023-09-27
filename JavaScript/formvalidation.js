const displayMsg = (message, idName, colorName) => {
  document.getElementById(idName).innerHTML = message;
  document.getElementById(idName).style.color = colorName;
};

// FirstName
const fnameValidate = () => {
  const firstName = document.getElementById("fname").value;
  if (firstName == "") {
    displayMsg("FirstName is mandatory", "fnameMsg", "red");
    // message to give, Where to place it and color
    return false;
  } else if (!firstName.match(/^[a-zA-Z]+$/)) {
    displayMsg("FirstName only contains alphabets", "fnameMsg", "red");
    return false;
  } else if (firstName.length < 3) {
    displayMsg("FirstName must be more than 2 characters", "fnameMsg", "red");
    return false;
  } else {
    displayMsg("Valid FirstName", "fnameMsg", "green");
    return true;
  }
};

// lAstName
const lnameValidate = () => {
  const lastName = document.getElementById("lname").value;
  if (lastName == "") {
    displayMsg("LastName is mandatory", "lnameMsg", "red");
    return false;
  } else if (!lastName.match(/^[a-zA-Z]+$/)) {
    displayMsg("LastName only contains alphabets", "lnameMsg", "red");
    return false;
  } else if (lastName.length < 3) {
    displayMsg("LastName must be more than 2 characters", "lnameMsg", "red");
    return false;
  } else {
    displayMsg("Valid LastName", "lnameMsg", "green");
    return true;
  }
};

// Email
const emailValidate = () => {
  const email = document.getElementById("email").value;
  if (email == "") {
    displayMsg("Email is mandatory", "emailMsg", "red");
    return false;
  } else if (
    !email.match(
      //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      /^([a-zA-Z0-9])[a-z0-9\-\_\.]+\@+([a-z])+\.+(com)/
    )
  ) {
    displayMsg("Invalid Email", "emailMsg", "red");
    return false;
  } else if (email.length < 5) {
    displayMsg("Email must be more than 4 characters", "emailMsg", "red");
    return false;
  } else {
    displayMsg("Valid Email Address", "emailMsg", "green");
    return true;
  }
};

// password
const passwordValidate = () => {
  const password = document.getElementById("password").value;
  if (password == "") {
    displayMsg("Password is mandatory", "pwdMsg", "red");
    return false;
  } else if (
    !password.match(
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      //   /(?=.*[^a-zA-Z0-9])/
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+-=]).{8,100}$/
    )
  ) {
    displayMsg("Password error", "pwdMsg", "red");
    return false;
    //   } else if (password.length < 8) {
    //     displayMsg("Password must be more than 7 characters", "pwdMsg", "red");
    //     return false;
  } else {
    displayMsg("Strong Password", "pwdMsg", "green");
    return true;
  }
};

// pAssword needs 8 char, Alphanumeric, cpaital , special

// Regular Expression
//   / regular expression goes inside these symbols /
//  ^ -> it checks from the beginning
//  $ -> it checks from the end
// [a-z] -> it matches only lowercase alphabets
// [A-Z] -> it matches only uppercase alphabets
// [a-zA-Z] or [A-Za-z] -> it matches both upper and lowercase alphabets
// [0-9] -> it matches only numeric values
// [a-zA-Z0-9] -> it matches alphabets and numeric values
// for special characteruse \
// eg: \@, \#, \S(space), \., \d(digit) etc
// ?= -> it means the postiton of any character does not matter
// .  -> it matches single character
// *  -> it matches one or more precedence character
// {min,max} -> min:minimum value,  max:maximum val

// For submititng
const validForm = () => {
  if (
    fnameValidate() &&
    lnameValidate() &&
    emailValidate() &&
    passwordValidate()
  ) {
    return true;
  } else {
    return false;
  }
};
