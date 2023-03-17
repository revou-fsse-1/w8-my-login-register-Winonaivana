const wrapper = document.querySelector(".wrapper");
const wrapper1 = document.querySelector(".wrapper1");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPop = document.querySelector(".btnlogin");
const btnPop1 = document.querySelector(".btnhome");
const close = document.querySelector(".icon-close");
const navigation = document.querySelector(".navigation");
const image = document.querySelector(".image");
const logo = document.querySelector(".logo");
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var emailError1 = document.getElementById("email-error1");
var passwordError1 = document.getElementById("password-error1");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPop.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  navigation.classList.add("active-appear");
  wrapper1.classList.add("active-popup1");
});

btnPop1.addEventListener("click", () => {
  wrapper1.classList.add("active-popup2");
  navigation.classList.add("active-appear");
});

logo.addEventListener("click", () => {
  wrapper1.classList.remove("active-popup2");
  navigation.classList.remove("active-appear");
});

close.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  navigation.classList.remove("active-appear");
  wrapper1.classList.remove("active-popup1");
});

function validateName() {
  var name = document.getElementById("username").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Full Name required";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("emailInput").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = "Must available email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePassword() {
  var password = document.getElementById("passwordInput").value;

  if (password.length == 0) {
    passwordError.innerHTML = "Password required";
    return false;
  }

  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) {
    passwordError.innerHTML = "At least 1 uppercase, 1 lowercase, 1 number";
    return false;
  }
  passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail1() {
  var email1 = document.getElementById("emailInput1").value;

  if (email1.length == 0) {
    emailError1.innerHTML = "Email is required";
    return false;
  }
  if (!email1.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError1.innerHTML = "Must available email";
    return false;
  }
  emailError1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePassword1() {
  var password1 = document.getElementById("passwordInput1").value;

  if (password1.length == 0) {
    passwordError1.innerHTML = "Password required";
    return false;
  }

  if (!password1.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) {
    passwordError1.innerHTML = "At least 1 uppercase, 1 lowercase, 1 number";
    return false;
  }
  passwordError1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

var row = null;

function Submit() {
  var dataEntered = retrieveData();
  var readData = readingData(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = "Please Enter Data!";
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = "Data Inserted";
    } else {
      update();
      msg.innerHTML = "Data Updated";
    }
  }
  document.getElementById("form").reset();
}

// CREATE
function retrieveData() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("emailInput1").value;
  var password = document.getElementById("passwordInput1").value;

  var arr = [username, email, password];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

// READ
function readingData(dataEntered) {
  var u = localStorage.setItem("username", dataEntered[0]);
  var e = localStorage.setItem("email", dataEntered[1]);
  var p = localStorage.setItem("password", dataEntered[2]);

  var u1 = localStorage.getItem("username", u);
  var e1 = localStorage.getItem("email", e);
  var p1 = localStorage.getItem("password", p);

  var arr = [u1, e1, p1];
  return arr;
}

// INSERT
function insert(readData) {
  var row = table.insertRow();
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button>
    <button onclick = remove(this)>Delete</button>`;
}

//EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("username").value = row.cells[0].innerHTML;
  document.getElementById("emailInput1").value = row.cells[1].innerHTML;
  document.getElementById("passwordInput1").value = row.cells[2].innerHTML;
}

// UPDATE
function update(td) {
  row.cells[0].innerHTML = document.getElementById("username").value;
  row.cells[1].innerHTML = document.getElementById("emailInput1").value;
  row.cells[2].innerHTML = document.getElementById("passwordInput1").value;
  row = null;
}

// DELETE
function remove(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}
