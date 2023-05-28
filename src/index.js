import './style.css';

let header = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent = "Luigi's Arrosticini";

header.appendChild(h1);

document.getElementById("content").appendChild(header);
