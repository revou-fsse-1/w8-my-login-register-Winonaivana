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
var loginBox = document.getElementById("form-boxlogin");
var regBox = document.getElementById("form-boxregister");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPop.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  navigation.classList.add("active-appear");
  image.classList.add("active-appearr");
});

logo.addEventListener("click", () => {
  wrapper1.classList.remove("active-popup2");
  navigation.classList.remove("active-appear");
});

close.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  navigation.classList.remove("active-appear");
  image.classList.remove("active-appearr");
});

function store() {
  var storedEmail = localStorage.getItem("email");

  var email = document.getElementById("re");
  var password = document.getElementById("rp");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (email.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (email.value.length == 0 && password.value.length == 0) {
    alert("Please fill in email and password");
  } else if (password.value.length > 8) {
    alert("Max of 8");
  } else if (!password.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!password.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!password.value.match(lowerCaseLetters)) {
    alert("please add 1 lowercase letter");
  } else if (email.value == storedEmail) {
    alert("email already exist");
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    alert("Your account has been created");
  }
}

function check() {
  var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");

  var userEmail = document.getElementById("se");
  var userPassword = document.getElementById("sp");

  if (userEmail.value == storedEmail && userPassword.value == storedPassword) {
    alert("You are logged in.");
  } else {
    alert("Error on login");
  }
}

function bb() {
  var storedEmail = localStorage.getItem("email");

  var userEmail = document.getElementById("re");

  if (userEmail.value == storedEmail) {
    alert("Email used");
  } else {
    store();
  }
}

function register() {
  store();
}

function login() {
  check();
}
