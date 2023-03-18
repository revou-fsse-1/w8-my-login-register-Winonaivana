let dataData = [
  { name: "Win", email: "winonaivana@gmail.com" },
  { name: "lol", email: "lol@gmail.com" },
];

const showData = () => {
  let tableBody = document.querySelector("#lists");
  tableBody.innerHTML = "";
  for (let i = 0; i < dataData.length; i++) {
    let row = "<tr>";
    row += "<td>" + dataData[i].name + "</td>";
    row += "<td>" + dataData[i].email + "</td>";
    row +=
      "<td><button class='edit' type='button' onclick='editData(" +
      i +
      ")'>Edit</button>";
    row +=
      "<td><button class='delete' type='button' onclick='deleteData(" +
      i +
      ")'>Delete</button>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
};

function checkEmail() {
  var storedEmail = localStorage.getItem("email");

  var email = document.getElementById("ae").value;
  if (email.length == 0) {
    alert("Please fill in email");
  } else if (email == storedEmail) {
    alert("email already exist");
  } else {
    alert("Added");
  }
}
function editData(i) {
  let namePrompt = prompt("Edit Name", dataData[i].name);
  let emailPrompt = prompt("Edit Email", dataData[i].email);

  if (checkEmail(emailPrompt) !== false) {
    dataData[i].name = namePrompt;
    dataData[i].email = emailPrompt;
    localStorage.setItem("dataData", JSON.stringify(dataData));

    showData();
  }
}

function store() {
  var storedEmail = localStorage.getItem("email");

  var email = document.getElementById("ae").value;
  var name = document.getElementById("an").value;

  if (email.length == 0) {
    alert("Please fill in email");
  } else if (name.length == 0) {
    alert("Please fill in name");
  } else if (email.length == 0 && name.length == 0) {
    alert("Please fill in email and name");
  } else if (email == storedEmail) {
    alert("email already exist");
  } else {
    dataData.push({
      name: name,
      email: email,
    });
    localStorage.setItem("dataData", JSON.stringify(dataData));
    alert("Added");

    showData();
  }
}

function add() {
  store();
}

function deleteData(i) {
  dataData.splice(i, 1);
  localStorage.setItem("dataData", JSON.stringify(dataData));
  showData();
}

window.onload = function () {
  let storedData = localStorage.getItem("dataData");
  if (storedData !== null) {
    data = JSON.parse(storedData);
  }
  showData();
};
