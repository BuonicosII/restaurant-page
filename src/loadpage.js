import arrosticini from "./arrosticini.jpg"

function loadpage() {
  //create dom elements of the header
  let header = document.createElement("div");
  header.setAttribute("id", "header");
  let h1 = document.createElement("h1");
  h1.textContent = "Luigi's Arrosticini";
  let pOne = document.createElement("p");
  pOne.textContent = "The home of the original abbruzzese arrosticini";
  let tabHolder = document.createElement("div");
  tabHolder.setAttribute("id", "tabholder");
  let homeTab = document.createElement("div");
  homeTab.textContent = "Home";
  let menu = document.createElement("div");
  menu.textContent = "Menu";
  let contacts = document.createElement("div");
  contacts.textContent = "Contacts";
  //create dom elements of the body
  let bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");
  let mainElementHolder = document.createElement("div");
  mainElementHolder.setAttribute("id", "mainElementHolder");
  let arrosticiniImage = new Image();
  arrosticiniImage.src = arrosticini;
  
  header.appendChild(h1);
  header.appendChild(pOne);
  header.appendChild(tabHolder);
  tabHolder.appendChild(homeTab);
  tabHolder.appendChild(menu);
  tabHolder.appendChild(contacts);
  mainElementHolder.appendChild(arrosticiniImage);
  bodyDiv.appendChild(mainElementHolder);
  document.getElementById("content").appendChild(header);
  document.getElementById("content").appendChild(bodyDiv);
}

export {loadpage}