import arrosticiniDish from "./arrosticini-dish.jpg";
import arrosticiniMenu from "./arrosticini-menu.jpg";
import tiramisu from "./tiramisu.jpg";
import beer from "./beer.jpg";

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
    let dishName1 = document.createElement("p");
    dishName1.textContent = "Arrosticini small";
    cardOne.appendChild(dishName1);
    dishOne.appendChild(photoDivOne);
    dishOne.appendChild(cardOne);

    let dishTwo = document.createElement("div");
    dishTwo.setAttribute("class", "dish");
    let photoDivTwo = new Image();
    photoDivTwo.src = arrosticiniDish
    let cardTwo = document.createElement("div");
    let dishName2 = document.createElement("p");
    dishName2.textContent = "Arrosticini medium";
    cardTwo.appendChild(dishName2);
    dishTwo.appendChild(photoDivTwo);
    dishTwo.appendChild(cardTwo);
    
    let dishThree = document.createElement("div");
    dishThree.setAttribute("class", "dish");
    let photoDivThree = new Image();
    photoDivThree.src = arrosticiniDish
    let cardThree = document.createElement("div");
    let dishName3 = document.createElement("p");
    dishName3.textContent = "Arrosticini big";
    cardThree.appendChild(dishName3);
    dishThree.appendChild(photoDivThree);
    dishThree.appendChild(cardThree);

    let dishFour = document.createElement("div");
    dishFour.setAttribute("class", "dish");
    let photoDivFour= new Image();
    photoDivFour.src = arrosticiniMenu;
    let cardFour = document.createElement("div");
    let dishName4 = document.createElement("p");
    dishName4.textContent = "Arrosticini menu";
    cardFour.appendChild(dishName4);
    dishFour.appendChild(photoDivFour);
    dishFour.appendChild(cardFour);
    
    let dishFive = document.createElement("div");
    dishFive.setAttribute("class", "dish");
    let photoDivFive = new Image();
    photoDivFive.src = tiramisu;
    let cardFive = document.createElement("div");
    let dishName5 = document.createElement("p");
    dishName5.textContent = "Tiramisù";
    cardFive.appendChild(dishName5);
    dishFive.appendChild(photoDivFive);
    dishFive.appendChild(cardFive);  
    
    let dishSix = document.createElement("div");
    dishSix.setAttribute("class", "dish");
    let photoDivSix = new Image();
    photoDivSix.src = beer;
    let cardSix = document.createElement("div");
    let dishName6 = document.createElement("p");
    dishName6.textContent = "Beer";
    cardSix.appendChild(dishName6);
    dishSix.appendChild(photoDivSix);
    dishSix.appendChild(cardSix);      

    menuDiv.appendChild(dishOne);
    menuDiv.appendChild(dishTwo);
    menuDiv.appendChild(dishThree);
    menuDiv.appendChild(dishFour);
    menuDiv.appendChild(dishFive);
    menuDiv.appendChild(dishSix);
    bodyDiv.appendChild(menuDiv);
}

export { menu }