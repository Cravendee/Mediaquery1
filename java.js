function check () {
  // INIT
  var valid = true, error = "", field = "";

  // NAMES
  field = document.getElementById("fname");
  error = document.getElementById("cfname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "First Name cannot be empty";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  field = document.getElementById("lname");
  error = document.getElementById("clname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Last Name cannot be empty";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  // EMAIL
  field = document.getElementById("email");
  error = document.getElementById("cemail");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Looks like this is not an email";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  // PASSWORD
  field = document.getElementById("password");
  error = document.getElementById("cpassword");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Password cannot be empty";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  // (C4) RESULT
  return valid;
}