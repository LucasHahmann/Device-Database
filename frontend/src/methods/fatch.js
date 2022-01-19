async function fatch(endpoint, variables){
    console.log(endpoint, variables)
    var _this = this;
    var backend = "http://localhost:300/"
    var url = "";
    var fetchMethod = "";
    var b0dy= null;
    switch(endpoint) {
        case "createDevice":
          url = "http://localhost:3000/create/createDevice";
          fetchMethod = "POST";
          b0dy = JSON.stringify({"data": variables});
          break;
        case "getManufactors":
          url = "http://localhost:3000/manufactor/getManufactors";
          fetchMethod = "GET";
          break;
        case "getModels":
          url = "http://localhost:3000/manufactor/getModels";
          fetchMethod = "POST";
          b0dy = JSON.stringify({"manufactor": variables});
          break;
        case "getBuildings":
          url = "http://localhost:3000/buildings/get";
          fetchMethod = "GET";
          break;
        case "addBuilding":
          url = "http://localhost:3000/buildings/add";
          fetchMethod = "POST";
          b0dy = JSON.stringify({"building": variables});
          break;
        case "removeBuilding":
          url = "http://localhost:3000/buildings/remove";
          fetchMethod = "POST";
          b0dy = JSON.stringify({"building": variables});
          break;
        case "getTypes":
          url = "http://localhost:3000/types/get";
          fetchMethod = "GET";
          break;
        case "addType":
          url = "http://localhost:3000/types/add";
          fetchMethod = "POST";
          b0dy = JSON.stringify({"type": variables});
          break;
        case "removeType":
          url = "http://localhost:3000/types/remove";
          fetchMethod = "POST";
          b0dy = JSON.stringify({"type": variables});
          
       /* case "getModels":
          url = "http://localhost:3000/manufactor/getModels"
          fetchMethod = "POST";
          b0dy = JSON.stringify({"manufactor":variables})
         case "checkConnection":
          url = "http://localhost:3000/settings/checkConnection"
          fetchMethod = "GET"; */
        }
        // Set the fetch with variables
        var resfetch = await fetch(url, {method: fetchMethod,
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer ' + store.state.token
              },
                body: b0dy})
            .then(async function(response){if(response.status != 200){console.log("Oh no do stuff");}return response.json();})
            .then(async function (data) {if(_this.check == true){console.log("Alright");}return data;})
            return resfetch;
}

module.exports = {
    fatch
}