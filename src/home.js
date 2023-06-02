import arrosticini from "./arrosticini.jpg";

function home () {
    document.getElementById("menu").removeAttribute("class", "selectedTab");
    document.getElementById("contacts").removeAttribute("class", "selectedTab");    
    while (bodyDiv.hasChildNodes()) {
        bodyDiv.removeChild(bodyDiv.firstChild);
    };
    document.getElementById("home").setAttribute("class", "selectedTab");
    let mainElementHolder = document.createElement("div");
    mainElementHolder.setAttribute("id", "mainElementHolder");
    let h2 = document.createElement("h2");
    h2.textContent = "Enjoy a taste of Abruzzo"
    let arrosticiniImage = new Image();
    arrosticiniImage.src = arrosticini;
    let p3 = document.createElement("p");
    p3.textContent = "Come visit us for a bite of italian wilderness";
    mainElementHolder.appendChild(h2);
    mainElementHolder.appendChild(arrosticiniImage);
    mainElementHolder.appendChild(p3);
    bodyDiv.appendChild(mainElementHolder);
}

export {home}