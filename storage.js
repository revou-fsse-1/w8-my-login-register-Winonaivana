function Submit() {
  var dataEntered = retrieveData();
  var readData = readingData(dataEntered);
  insert(readData);
}

// CREATE
function retrieveData() {
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  var arr = [email, password];
  return arr;
}

// READ
function readingData(dataEntered) {
  var e = localStorage.setItem("email", dataEntered[0]);
  var p = localStorage.setItem("password", dataEntered[1]);

  var e1 = localStorage.getItem("email", e);
  var p1 = localStorage.getItem("password", p);

  var arr = [e1, p1];
  return arr;
}

// INSERT
function insert(readData) {
  var table = document.getElementById("table");
  var i = table.rows.length;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  // row.insertCell(4).innerHTML = "JJJ"
  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
}
