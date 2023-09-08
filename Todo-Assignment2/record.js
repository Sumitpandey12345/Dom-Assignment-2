// fill in javascript code here
let form = document.querySelector("form");
form.addEventListener("submit", function (ele) {
  ele.preventDefault();
  let id = document.getElementById("employeeID");
  let name = document.getElementById("name");
  let experience = document.getElementById("exp");
  let email = document.getElementById("email");
  let mobile = document.getElementById("mbl");
  let department = document.getElementById("department");

  let tbody = document.querySelector("tbody");
  let tablerow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");

  td1.innerText = name.value;
  td2.innerText = id.value;
  td3.innerText = department.value;
  td4.innerText = experience.value;
  td5.innerText = email.value;
  td6.innerText = mobile.value;
  if (experience.value > 5) {
    td7.innerText = "senior";
  } else if (experience.value >= 2 && experience.value <= 5) {
    td7.innerText = "junior";
  } else {
    td7.innerText = "fresher";
  }
  td8.innerHTML = "<button>Delete</button>";
  tablerow.append(td1, td2, td3, td4, td5, td6, td7, td8);
  tbody.append(tablerow);
  td8.addEventListener("click", function () {
    tbody.removeChild(tablerow);
  });
  name.value = "";
  id.value = "";
  department.value = "";
  experience.value = "";
  email.value = "";
  mobile.value = "";
});
