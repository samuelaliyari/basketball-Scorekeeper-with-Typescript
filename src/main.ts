const scoreAway:any = document.body.querySelector("#scoreAway")!;
const scoreHome:any = document.body.querySelector("#scoreHome")!;
const homeName = document.body.querySelector("#homeName")!;
const awayName = document.body.querySelector("#awayName")!;
const modal:any = document.body.querySelector(".modalHolder")!;
const nameInput:any = document.body.querySelectorAll(".modal input[type=text]")!;



const scoreHomeChange = (points:number) => {
    scoreHome.textContent = +scoreHome.textContent + +points
}
const scoreAwayChange = (points:number) => {
    scoreAway.textContent = +scoreAway.textContent + +points
}

const showModal = () => {modal.style.display = "block"}
const saveNames = () => {
    modal.style.display = "none"
    if (nameInput[0].value.trim().length > 0 && nameInput[1].value.trim().length > 0) {
        homeName.textContent = nameInput[0].value;
        awayName.textContent = nameInput[1].value;
    }
}