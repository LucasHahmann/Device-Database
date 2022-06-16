const api = require('../methods/fatch.js');

const navbar = require('../methods/loadNavbar.js');
var ipcRenderer = require('electron').ipcRenderer;

const test = require("./change.js");
// Load and prepend the navbar
var res = navbar.loadElements("Navbar", ["../index.html", "./search.html", "./options.html"])
const nav = document.createElement('Navbar');
nav.innerHTML = res;
document.body.prepend(nav);

searchButton = document.getElementById("searchButton");

searchInput = document.getElementById("searchInput");

resultcontainer = document.getElementById("resultscontainer");

resultCount = resultcontainer.getElementsByTagName('div').length

searchButton.addEventListener("click", async event => {
    resultcontainer.innerHTML = "";
    var res = await api.fatch("search", searchInput.value);
    console.log(res)
    res.userData.forEach(element => {
        const div = document.createElement('div');
  
        div.innerHTML = `
            <div class="container ${resultCount} searchItem">
                <div class="row ${resultCount}">
                    <div class="col">
                        <p>Name: ${element.Firstname + " " + element.Lastname}</p>
                        <p>Room: ${element.Building + element.Room}</p>
                        <p>Telephone: ${element.Telephone}</p>
                    </div>
                    <div class="col">
                        <p>Manufactor: ${element.Manufactor}</p>
                        <p>Model: ${element.Model}</p>
                        <p>Typ: ${element.Typ}</p>
                    </div>
                </div>
            </div>`
        ;
        resultCount =+ 1
        div.addEventListener("click", event=> {
            searchClick(div, element)
        })

        resultcontainer.appendChild(div);
    });
})

function searchClick(div, data){
    oldInnerHTML = resultcontainer.innerHTML
    resultcontainer.innerHTML = `
    <div id="Form">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2>Personal Informations</h2>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <!-- First name Input -->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">First name: </span>
                    <input type="text" class="form-control" id="firstname" aria-describedby="basic-addon3" value="${data.Firstname}">
                  </div>
                </div>
                <div class="col">
                  <!-- Last name Input -->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">Last name: </span>
                    <input type="text" class="form-control" id="lastname" aria-describedby="basic-addon3" value="${data.Lastname}">
                  </div>
                </div>
                <div class="col">
                  <!-- ID Input -->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">ID : </span>
                    <input type="text" class="form-control" id="id" aria-describedby="basic-addon3" value="${data.PersonalID}">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <!-- Building Input -->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">Room : </span>
                    <input type="text" class="form-control" id="id" aria-describedby="basic-addon3" value="${data.Building + data.Room}">
                  </div>
                </div>
                <div class="col">
                  <!-- Telephone number -->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">Telephone number</span>
                    <input type="text" class="form-control" id="telephoneNumber" aria-describedby="basic-addon3" value="${data.Telephone}">
                  </div>
                </div>
              </div>
            </div>
      
            <div class="container">
              <div class="row">
                <!-- Subject -->
                <div class="col">
                    <h2>Device Informations</h2>
                </div>
              </div>
              <div class="row"> 
                <div id="devices">
                  <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">Typ</span>
                                <input type="text" class="form-control" id="typ" aria-describedby="basic-addon3" value="${data.Typ}">
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">Model</span>
                                <input type="text" class="form-control" id="model" aria-describedby="basic-addon3" value="${data.Model}">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class=""col>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">Model</span>
                                <input type="text" class="form-control" id="Manufactor" aria-describedby="basic-addon3" value="${data.Manufactor}">
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <button type="button" class="btn btn-info" id="back">Back</button>
              </div>
      
            </div>
          </div>
    
    
    `

    document.getElementById("back").addEventListener("click", event => {
        resultcontainer.innerHTML = oldInnerHTML
    })
}