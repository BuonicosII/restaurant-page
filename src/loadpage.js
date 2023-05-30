import arrosticini from "./arrosticini.jpg"

function loadpage() {
  //create dom elements of the header
  //Dev memo: this part will go in its own module called header.js
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
  let bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");
  //create dom elements of the body
  //Dev memo: this part will go in its own module called homebody.js
  let mainElementHolder = document.createElement("div");
  mainElementHolder.setAttribute("id", "mainElementHolder");
  let h2 = document.createElement("h2");
  h2.textContent = "Enjoy a taste of Abruzzo"
  let arrosticiniImage = new Image();
  arrosticiniImage.src = arrosticini;
  let h3 = document.createElement("h3");
  h3.textContent = "Come visit us for a bite of italian wilderness";
  //This will go in header.js
  header.appendChild(h1);
  header.appendChild(pOne);
  header.appendChild(tabHolder);
  tabHolder.appendChild(homeTab);
  tabHolder.appendChild(menu);
  tabHolder.appendChild(contacts);
  //This will go in homebody.js
  mainElementHolder.appendChild(h2);
  mainElementHolder.appendChild(arrosticiniImage);
  mainElementHolder.appendChild(h3);
  bodyDiv.appendChild(mainElementHolder);
  //This will go in header.js
  document.getElementById("content").appendChild(header);
  document.getElementById("content").appendChild(bodyDiv);
}

export {loadpage}