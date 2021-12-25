// Get the elements..
const addDeviceButton = document.getElementById("addDevice");
const submitButton = document.getElementById("submit");

submitButton.addEventListener('click', event => {
  // First get personal Informations
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var ID = document.getElementById("id").value;
  var building = document.getElementById("building");

  var roomNumber = document.getElementById("roomNumber").value;
  var telephoneNumber = document.getElementById("telephoneNumber").value;

  // Create data
  var data = {
    "firstname": firstname,
    "lastname": lastname,
    "ID": ID,
    "building": building,
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
  console.log(data)
})

addDeviceButton.addEventListener('click', event => {
  const div = document.createElement('div');
  
  div.innerHTML = `
  <div class="container">
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
    <div class="col manufactorSelect">
      <select class="form-select" aria-label="Manufactor">
        <option selected>Select a manufactor</option>
        <option value="Asus">Asus</option>
        <option value="HP">HP</option>
      </select>
    </div>
    <div class="col modelSelect">
      <select class="form-select" aria-label="Model">
        <option selected>Select a model</option>
        <option value="Latitude">Latitude</option>
      </select>
    </div>
  </div>
  <div class="row end">
    ==========================================================================
  </div>
</div>`;
  document.getElementById('devices').appendChild(div);
});