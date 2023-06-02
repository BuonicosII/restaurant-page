function contacts() {
    document.getElementById("home").removeAttribute("class", "selectedTab");
    document.getElementById("menu").removeAttribute("class", "selectedTab");
    while (bodyDiv.hasChildNodes()) {
      bodyDiv.removeChild(bodyDiv.firstChild);
    };
    document.getElementById("contacts").setAttribute("class", "selectedTab");
    let contactsDiv = document.createElement("div");
    contactsDiv.setAttribute("id", "contactsDiv");
    bodyDiv.appendChild(contactsDiv);
  }
  
  export { contacts }