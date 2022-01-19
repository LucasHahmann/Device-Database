const electron = require('electron');
const fs = require('fs');
const { promisify } = require('util');
const path = require('path');
const readFile = promisify(fs.readFile);
const {ipcRenderer} = electron;

const api = require('./methods/fatch.js');
const navbar = require('./methods/loadNavbar.js');

function test(){
  ipcRenderer.send("connection:fail");
}

// Load and prepend the navbar
var res = navbar.loadElements("Navbar", ["./index.html", "./subWindows/search.html", "./subWindows/options.html"])
const nav = document.createElement('Navbar');
nav.innerHTML = res;
document.body.prepend(nav);




// Get the elements..
const addDeviceButton = document.getElementById("addDevice");
const submitButton = document.getElementById("submit");
var alertPlaceholder = document.getElementById('Alert');

var deviceCount = 0

var a = true;


checkConnection();

// Functions..
async function checkConnection(){
  //while (true) {
    await fetch("http://localhost:3000/settings/checkConnection").then((response) => {
      if (response.ok) {
        return response.json();
      } else {
      }
    })
    .then((responseJson) => {
      alert("Backend ist reachable.", 'success', 3000)
      return;
    })
    .catch((error) => {
      test();
      alert("Backend not responding!", 'danger', 7000)
    });
 // }
}
async function getManufactors (){
  // Get the manufactors
  var res = await api.fatch("getManufactors")
  var data = res.userData
  // Get the selected fields
  var childDivs = document.getElementById('devices').getElementsByTagName('div');
  for( i=0; i< childDivs.length; i++ )
  {
    // Foreach selected field
    var childDiv = childDivs[i];
    // If contains the manufactorSelect
    if (childDiv.classList.contains("manufactorSelect")){
      // If the Value is not equal to Select a manufactor
      if (childDiv.querySelectorAll("select")[0].value == "Init"){
        var text = '<option selected="">Select a manufactor</option>'
        data.forEach(element => {
          text = text + `<option value="${element}">${element}</option>`
        });
        childDiv.querySelector("select").innerHTML = text
      } 
      
    }
  }
}
function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
 }

// async function fatch(endpoint, variables){
//   var _this = this;
//   var backend = "http://localhost:300/"
//   var url = "";
//   var fetchMethod = "";
//   var b0dy= null;
//   switch(endpoint) {
//       case "createDevice":
//         url = "http://localhost:3000/create/createDevice";
//         fetchMethod = "POST";
//         b0dy = JSON.stringify({"data": variables});
//         break;
//       case "getManufactors":
//         url = "http://localhost:3000/manufactor/getManufactors";
//         fetchMethod = "GET";
//         break;
//       case "getModels":
//         url = "http://localhost:3000/manufactor/getModels";
//         fetchMethod = "POST";
//         b0dy = JSON.stringify({"manufactor": variables});
//      /* case "getModels":
//         url = "http://localhost:3000/manufactor/getModels"
//         fetchMethod = "POST";
//         b0dy = JSON.stringify({"manufactor":variables})
//        case "checkConnection":
//         url = "http://localhost:3000/settings/checkConnection"
//         fetchMethod = "GET"; */
//       }
//       // Set the fetch with variables
//       var resfetch = await fetch(url, {method: fetchMethod,
//           headers: {
//               'Content-Type': 'application/json',
//               //'Authorization': 'Bearer ' + store.state.token
//             },
//               body: b0dy})
//           .then(async function(response){if(response.status != 200){console.log("Oh no do stuff");}return response.json();})
//           .then(async function (data) {if(_this.check == true){console.log("Alright");}return data;})
//           return resfetch;
// }

async function alert(message, type, time) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="Close"></button></div>'

  alertPlaceholder.append(wrapper)
  await Sleep(time);
  document.getElementById('Close').click();
}

async function getModels(){
  document.querySelectorAll('.manufactorSelect').forEach(item => {
    item.addEventListener('change', async event => {
      var count = item.classList[2];
      var res = await api.fatch("getModels", event.path[0].value)
      var childDivs = document.getElementById('devices').getElementsByTagName('div');
      for( i=0; i< childDivs.length; i++ )
      {
        // Foreach selected field
        var childDiv = childDivs[i];
        // If contains the modeSelect class and model = count
        if (childDiv.classList.contains("modelSelect") && childDiv.classList.contains(count)){
          var text = '<option selected="">Select a Model</option>'
          res.userData.forEach(element => {
            text = text + `<option value="${element}">${element}</option>`
          });
          childDiv.querySelector("select").innerHTML = text
        }
      }
    })
  })
}

async function getDeleteButtons(){

  document.querySelectorAll('.deleteDevice').forEach(item => {
    // Loop through all buttons and add an event listener
    item.addEventListener('click', event => {
      // If click, get the container with the deviceCount and remove it
      var deleteDevice = document.getElementById(item.classList[3]);
      deleteDevice.remove()
    })
  })
} 

// Event listeners

submitButton.addEventListener('click', async event => {
  // First get personal Informations
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var ID = document.getElementById("id").value;
  //var building = document.getElementById("building");

  var roomNumber = document.getElementById("roomNumber").value;
  var telephoneNumber = document.getElementById("telephoneNumber").value;

  // Create data
  var data = {
    "firstname": firstname,
    "lastname": lastname,
    "ID": ID,
   // "building": building,
    "roomNumber": roomNumber,
    "telephoneNumber": telephoneNumber,
    "device": []
  }

  // Foreach child element, check the class and get the Value
  var tmpArray = {}

  var childDivs = document.getElementById('devices').getElementsByTagName('div');
  for( i=0; i< childDivs.length; i++ )
  {
    var childDiv = childDivs[i];
    if (childDiv.classList.contains("deviceSelect")) tmpArray.device = childDiv.querySelectorAll("select")[0].value
    if (childDiv.classList.contains("deliveryDate")) tmpArray.deliveryDate = childDiv.querySelectorAll("input")[0].value
    if (childDiv.classList.contains("manufactorSelect")) tmpArray.manufactor = childDiv.querySelectorAll("select")[0].value
    if (childDiv.classList.contains("modelSelect")) tmpArray.model = childDiv.querySelectorAll("select")[0].value
    if (childDiv.classList.contains("end")){
      // At the end, push the array to data and reset
      data.device.push(tmpArray)
      tmpArray = {}
    } 
  }
  var res = await api.fatch("createDevice", data);
  alert(res.message, 'success', 6000)
  console.log(res)
})

addDeviceButton.addEventListener('click', async event => {
  
  const div = document.createElement('div');
  
  div.innerHTML = `
  <div class="container" id="${deviceCount}">
  <div class="row justify-content-end">
    <div class="col align-self-end">
      <button type="button" class="btn btn-danger deleteDevice ${deviceCount}">Delete Device</button>
    </div>
  </div>
  <div class="row">
    <div class="col deviceSelect">
      <select class="form-select" aria-label="Default select example">
        <option selected>Device typ</option>
        <option value="Laptop">Laptop</option>
        <option value="Computer">Computer</option>
        <option value="Server">Server</option>
      </select>
    </div>
    <div class="col date deliveryDate">
      <h3>Delievery date</h3>
      <input type="date" id="start" name="trip-start">
    </div>
  </div>
  <div class="row">
    <div class="col manufactorSelect ${deviceCount}">
      <select class="form-select manufactor" aria-label="Manufactor">
      <option selected="">Init</option>
      </select>
    </div>
    <div class="col modelSelect ${deviceCount}">
      <select class="form-select model ${deviceCount}" aria-label="Model">
        <option selected="">Init</option>
      </select>
    </div>
  </div>
  <div class="row end">
    ==========================================================================
  </div>
</div>`;
  document.getElementById('devices').appendChild(div);
  deviceCount = deviceCount + 1
  await getDeleteButtons()
  await getManufactors()
  await getModels()
  //console.log(document.querySelectorAll('.manufactor'))
});

