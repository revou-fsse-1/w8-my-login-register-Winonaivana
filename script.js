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

const getUserData = localStorage.getItem("userData");
const userData = JSON.parse(getUserData) || [
  { email: "win@gmail.com", password: "Win123123" },
];
localStorage.setItem("userData", JSON.stringify(userData));

function store() {
  var storedEmail = localStorage.getItem("email");

  var email = document.getElementById("re").value;
  var password = document.getElementById("rp").value;
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (email.length == 0) {
    alert("Please fill in email");
  } else if (password.length == 0) {
    alert("Please fill in password");
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    alert("Enter a valid email");
  } else if (email.length == 0 && password.length == 0) {
    alert("Please fill in email and password");
  } else if (password.length < 8) {
    alert("Must be 8");
  } else if (!password.match(numbers)) {
    alert("please add 1 number");
  } else if (!password.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!password.match(lowerCaseLetters)) {
    alert("please add 1 lowercase letter");
  } else if (email == storedEmail) {
    alert("email already exist");
  } else {
    userData.push({
      email: email,
      password: password,
    });
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Your account has been created");
    wrapper.classList.remove("active");
  }
}

function check() {
  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;

  const checkk = userData.find(
    (a) => a.email === email && a.password === password
  );

  if (checkk) {
    alert("You are logged in.");
    localStorage.setItem("email", email);
    window.location.href = "/table.html?";
  } else {
    alert("Error on login");
  }
}

function register() {
  store();
}

function login() {
  check();
}
