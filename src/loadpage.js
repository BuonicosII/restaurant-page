function header () {
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
  homeTab.setAttribute("id", "home");
  let menu = document.createElement("div");
  menu.textContent = "Menu";
  menu.setAttribute("id", "menu");
  let contacts = document.createElement("div");
  contacts.textContent = "Contacts";
  contacts.setAttribute("id", "contacts");
  let bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");

  header.appendChild(h1);
  header.appendChild(pOne);
  header.appendChild(tabHolder);
  tabHolder.appendChild(homeTab);
  tabHolder.appendChild(menu);
  tabHolder.appendChild(contacts);

  document.getElementById("content").appendChild(header);
  document.getElementById("content").appendChild(bodyDiv);

}

export {header}