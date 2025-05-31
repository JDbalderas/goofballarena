const boonga = document.querySelector("#boonga")
const skabbit = document.querySelector("#skabbit")
const skellbo = document.querySelector("#skellbo")
const squob = document.querySelector("#squob")
const krokomo = document.querySelector("#krokomo")
const konkle = document.querySelector("#konkle")
const makoblin = document.querySelector("#makoblin")
const oomfo = document.querySelector("#oomfo")
const meowrus = document.querySelector("#meowrus")

const chosenMonImg = document.querySelector("#chosenMon")

let selected = 0
let goofBalls = ["boonga", "skabbit", "skellbo", "squob", "krokomo", "konkle", "makoblin", "oomfo", "meowrus"]

// bronnen: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage //
function chooseBo() {
    selected = goofBalls[0]
    chosenMonImg.src = "./images/boonga.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseSt() {
    selected = goofBalls[1]
    chosenMonImg.src = "./images/skabbit.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseSo() {
    selected = goofBalls[2]
    chosenMonImg.src = "./images/skellbo.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseSq() {
    selected = goofBalls[3]
    chosenMonImg.src = "./images/squob.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseKr() {
    selected = goofBalls[4]
    chosenMonImg.src = "./images/krokomo.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseKo() {
    selected = goofBalls[5]
    chosenMonImg.src = "./images/konkle.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseMa() {
    selected = goofBalls[6]
    chosenMonImg.src = "./images/makoblin.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseOo() {
    selected = goofBalls[7]
    chosenMonImg.src = "./images/oomfo.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}
function chooseMe() {
    selected = goofBalls[8]
    chosenMonImg.src = "./images/meowrus.png"
    localStorage.setItem("playermon", selected)
    console.log(selected)
}

boonga.addEventListener("click", chooseBo)
skabbit.addEventListener("click", chooseSt)
skellbo.addEventListener("click",chooseSo)
squob.addEventListener("click", chooseSq)
krokomo.addEventListener("click", chooseKr)
konkle.addEventListener("click", chooseKo)
makoblin.addEventListener("click",chooseMa)
oomfo.addEventListener("click", chooseOo)
meowrus.addEventListener("click", chooseMe)
