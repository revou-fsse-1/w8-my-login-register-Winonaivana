const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPop = document.querySelector(".btnlogin");
const close = document.querySelector(".icon-close");
const navigation = document.querySelector(".navigation");
const image = document.querySelector(".image");
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
  image.classList.add("active-slide");
});

close.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  navigation.classList.remove("active-appear");
  image.classList.remove("active-slide");
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