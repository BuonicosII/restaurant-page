function menu() {
    document.getElementById("home").removeAttribute("class", "selectedTab");
    document.getElementById("contacts").removeAttribute("class", "selectedTab");   
    while (bodyDiv.hasChildNodes()) {
    bodyDiv.removeChild(bodyDiv.firstChild);
    };
    document.getElementById("menu").setAttribute("class", "selectedTab");
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");
    bodyDiv.appendChild(menuDiv);
}

export { menu }