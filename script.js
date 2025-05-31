import { initMap } from "./map.js";
import { generatePopUp } from "./popup.js";
import { slider } from "./slider.js";

document.addEventListener("DOMContentLoaded", slider);
document.querySelectorAll(".button").forEach(item => item.addEventListener("click", generatePopUp));
initMap();