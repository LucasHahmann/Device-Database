function loadElements(element, sites){
    switch(element){
        case "Navbar":
            var nav = `
            <div id="Nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <!-- Native button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="${sites[0]}">Create</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="${sites[1]}">Search</a>
                      </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="${sites[2]}">Options</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          `
            return nav;

    }

    
    //const navbar = readFile(path.join(__dirname, "../elements/navbar.html"), 'utf-8');
    
    //return navbar;
};

module.exports = {
    loadElements
}