import arrosticiniDish from "./arrosticini-dish.jpg"

function menu() {
    document.getElementById("home").removeAttribute("class", "selectedTab");
    document.getElementById("contacts").removeAttribute("class", "selectedTab");   
    while (bodyDiv.hasChildNodes()) {
    bodyDiv.removeChild(bodyDiv.firstChild);
    };
    document.getElementById("menu").setAttribute("class", "selectedTab");
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");

    let dishOne = document.createElement("div");
    dishOne.setAttribute("class", "dish");
    let photoDivOne = new Image();
    photoDivOne.src = arrosticiniDish
    let cardOne = document.createElement("div");
    cardOne.textContent = "Arrosticini mini";
    dishOne.appendChild(photoDivOne);
    dishOne.appendChild(cardOne);

    menuDiv.appendChild(dishOne);
    bodyDiv.appendChild(menuDiv);
}

export { menu }