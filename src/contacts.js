function contacts() {
    document.getElementById("home").removeAttribute("class", "selectedTab");
    document.getElementById("menu").removeAttribute("class", "selectedTab");
    while (bodyDiv.hasChildNodes()) {
      bodyDiv.removeChild(bodyDiv.firstChild);
    };
    document.getElementById("contacts").setAttribute("class", "selectedTab");
    let contactsDiv = document.createElement("div");
    contactsDiv.setAttribute("id", "contactsDiv");

    let googleMap = document.createElement("iframe");
    googleMap.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d94154.17924646412!2d13.578151940057516!3d42.484789479361325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331d1be9d501037%3A0xebb386e5782f33cc!2sGran%20Sasso!5e0!3m2!1sit!2sit!4v1685902617983!5m2!1sit!2sit");

    let addressDiv = document.createElement("div");
    let firstLine = document.createElement("p");
    firstLine.textContent = "Gran Sasso d'Italia";
    let secondLine = document.createElement("p");
    secondLine.textContent = "64047 Pietracamela TE Italy";
    let thirdLine = document.createElement("p");
    thirdLine.textContent = "Tu - Sun 10 - 15"

    bodyDiv.appendChild(contactsDiv);
    contactsDiv.appendChild(googleMap);
    contactsDiv.appendChild(addressDiv);
    addressDiv.appendChild(firstLine);
    addressDiv.appendChild(secondLine);
    addressDiv.appendChild(thirdLine);

  }
  
  export { contacts }