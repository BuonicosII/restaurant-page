import './style.css';
import { header } from "./loadpage";
import { home } from "./home";
import { menu } from "./menu";
import { contacts } from "./contacts";

header()
document.getElementById("home").addEventListener("click", home);
document.getElementById("menu").addEventListener("click", menu);
document.getElementById("contacts").addEventListener("click", contacts);

home()

