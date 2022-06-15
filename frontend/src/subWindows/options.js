const electron = require('electron');
const fs = require('fs');
const {ipcRenderer} = electron;
const api = require('../methods/fatch.js');
const navbar = require('../methods/loadNavbar.js');
// Load and prepend the navbar
var res = navbar.loadElements("Navbar", ["../index.html", "./search.html", "./options.html"])
const nav = document.createElement('Navbar');
nav.innerHTML = res;
document.body.prepend(nav);




var manufactorModelContainer = document.getElementById("addManufactorModel");
var manufactorSelect = document.getElementById("manufactorSelect");
var addManufactor = document.getElementById("addManufactor");

// Get the count from the child divs
var count = manufactorModelContainer.getElementsByTagName('div').length

  

var button = document.getElementById("buttonBuilding");
var buildingInpput = document.getElementById("insertBuilding");

var typeButton = document.getElementById("buttonType");
var typeInput = document.getElementById("typeInsert");

var savebutton = document.getElementById("saveButton")

savebutton.addEventListener("click", async event => {
  var addManufactorDiv = document.querySelectorAll("#addManufactorModel")
})

button.addEventListener("click", async event => {
  if(button.querySelectorAll("buttonBuilding")[0].innerHTML == "Delete"){
    await api.fatch("removeBuilding", buildingInpput.value)
    buildingInpput.value = "";
    initBuildings()
  }
  else {
    await api.fatch("addBuilding", buildingInpput.value)
    buildingInpput.value = "";
    initBuildings()
  } 
})

typeButton.addEventListener("click", async event => {
  if(typeButton.querySelectorAll("button")[0].innerHTML == "Delete"){
    await api.fatch("removeType", typeInput.value)
    typeInput.value = "";
    initTypes()
  }
  else {
    await api.fatch("addType", typeInput.value)
    typeInput.value = "";
    initTypes()
  } 
})

function autocomplete(inp, arr, type) {

    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
      if(type == "building"){
        if(arr.includes(inp.value)){
          button.innerHTML = `<button type="button" class="btn btn-danger">Delete</button>`
        } else {
          button.innerHTML = `<button type="button" class="btn btn-success">Add</button>`
        }
      } 
      if(type == "types"){ {
        if(arr.includes(inp.value)){
          typeButton.innerHTML = `<button type="button" class="btn btn-danger">Delete</button>`
        } else {
          typeButton.innerHTML = `<button type="button" class="btn btn-success">Add</button>`
        }
      }
      }
        
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  async function initTypes(){
    var types = await api.fatch("getTypes")
    autocomplete(typeInput, types.userData, "types");
  }

  async function initBuildings(){
    var buildings = await api.fatch("getBuildings")
    autocomplete(buildingInpput, buildings.userData, "building");
  }
  initTypes();
  initBuildings();


  

  addManufactor.addEventListener("click", event => {
    const div = document.createElement('div');
  
    div.innerHTML = `
    <div class="container ${count} manufactorSelect">
      <div class="row ${count} rowManufactor">
        <div class="col">
          <select id="Manufactor" class="${count}"><option selected="">Init</option></select>
        </div>
        <div class="col models ${count}">
          <input type="text" id="models"></input>
        </div>
      </div>
    </div>`
      ;

    count = count + 1;
    manufactorModelContainer.appendChild(div);
    initManufactor();
    initModels();
  })
  async function initManufactor(){
    var res = await api.fatch("getManufactors");
    var childDivs = manufactorModelContainer.getElementsByTagName('div');
    for(i = 0; i< childDivs.length; i++){
      // Foreach selected field
      var childDiv = childDivs[i];
      // If contains the modeSelect class and model = count
      if (childDiv.classList.contains("manufactorSelect")){
        var select = childDiv.querySelector("select")  
        if(select.innerHTML == '<option selected="">Init</option>'){
          var text = '<option selected="">Select a manufactor</option>'
          res.userData.forEach(element => {
            text = text + `<option value="${element}">${element}</option>`
          });
          select.innerHTML = text;
        }
      }
    }

  }

    


  async function initModels(){
    manufactorModelContainer.querySelectorAll('.manufactorSelect').forEach(item => {
      console.log(item)
      item.addEventListener('change', async event => {
        var countChange = item.classList[1];
        //console.log(countChange)
        var res = await api.fatch("getModels", event.path[0].value)
        var childDivs = manufactorModelContainer.getElementsByTagName('div');
        for( i=0; i< childDivs.length; i++ )
        {
          // Foreach selected field
          var childDiv = childDivs[i];
          // If contains the modeSelect class and model = count
          var text = "";
          //console.log(childDiv.classList)
          if (childDiv.classList.contains("models") && childDiv.classList.contains(countChange)) console.log(childDiv)
          if (childDiv.classList.contains("models") && childDiv.classList.contains(countChange)){
            res.userData.forEach(element => {
              text = text + `<input type="text" value="${element}"></input>`
            });
            childDiv.innerHTML = text
          }
        }
      })
    })
  }
