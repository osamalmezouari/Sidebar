"use strict";
const sidebar = document.querySelector(".sidebar");
const bars = document.querySelector(".bars");
const xMark = document.querySelector(".fa-xmark");
let barsActive = true;
bars.onclick = () => {
    if (barsActive) {
        sidebar.style.animationName = "leftShowElement";
        barsActive = false;
    }
    else {
        sidebar.style.animationName = "leftHideElement";
        barsActive = true;
    }
};
xMark.onclick = () => {
    sidebar.style.animationName = "leftHideElement";
    barsActive = !barsActive;
};
