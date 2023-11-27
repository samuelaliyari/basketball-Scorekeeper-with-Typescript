"use strict";
const scoreAway = document.body.querySelector("#scoreAway");
const scoreHome = document.body.querySelector("#scoreHome");
const homeName = document.body.querySelector("#homeName");
const awayName = document.body.querySelector("#awayName");
const modal = document.body.querySelector(".modalHolder");
const nameInput = document.body.querySelectorAll(".modal input[type=text]");
const scoreHomeChange = (points) => {
    scoreHome.textContent = +scoreHome.textContent + +points;
};
const scoreAwayChange = (points) => {
    scoreAway.textContent = +scoreAway.textContent + +points;
};
const showModal = () => { modal.style.display = "block"; };
const saveNames = () => {
    modal.style.display = "none";
    if (nameInput[0].value.trim().length > 0 && nameInput[1].value.trim().length > 0) {
        homeName.textContent = nameInput[0].value;
        awayName.textContent = nameInput[1].value;
    }
};
