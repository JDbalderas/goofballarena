//stats//
const moveA = document.querySelector("#moveA")
const moveB = document.querySelector("#moveB")
const player = document.querySelector("#player")
const enemy = document.querySelector("#enemy")
const pname = document.querySelector("#pname")
const ename = document.querySelector("#ename")
const displayhp = document.querySelector("div p")
const displayehp = document.querySelector("#eHp")
const narrate = document.querySelector("#narrator")

let myMonName = 0
let myHP = 0
let myMaxHP = 0
let myAttackPower = 0
let myDefense = 0
let mySpeed = 0
let myElement = 0
let myBasePower = 0

let mySpFct = 1
let enemySpFct = 1

let enemyName = 0
let enemyMaxHP = 0
let enemyHP = 0
let enemyAttackpower = 0
let enemyDefense = 0
let enemySpeed = 0
let enemyElement = 0
let enemyBasePower = 0

let critchance = 16
let crithit = 1
let roll = 1
let elmt = 1
let move = 1

let goofBalls = ["boonga", "skabbit", "skellbo", "squob", "krokomo", "konkle", "makoblin", "meowrus", "oomfo"]
let randomGoof = 0
let chosenGoof = 0

function updateHPbars() {
    document.getElementById("peehpee").value = myHP
    document.getElementById("peehpee").max = myMaxHP
    document.getElementById("poohpoo").value = enemyHP
    document.getElementById("poohpoo").max = enemyMaxHP
}

//mon stats
function setStats() {
    updateHPbars()
    if (myMonName == "boonga") {
    player.src = "/images/boonga.png"
    pname.textContent = "Boonga"
    moveA.textContent = "Cap bonk"
    moveB.textContent = "Spore"
    myMaxHP = 100
    myHP = 100
    myAttackPower = 20
    myDefense = 55
    mySpeed = 45
    myElement = "earth"
    myBasePower = 40
    mySpFct = 1.1
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "skabbit") {
    player.src = "/images/skabbit.png"
    pname.textContent = "Skabbit"
    moveA.textContent = "Carrot toss"
    moveB.textContent = "Kick flip"
    myMaxHP = 60
    myHP = 60
    myAttackPower = 15
    myDefense = 70
    mySpeed = 80
    myElement = "earth"
    myBasePower = 40
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "skellbo") {
    player.src = "/images/skellbo.png"
    pname.textContent = "Skellbo"
    moveA.textContent = "Skull tackle"
    moveB.textContent = "Healing spell"
    myMaxHP = 140
    myHP = 140
    myAttackPower = 20
    myDefense = 30
    mySpeed = 35
    myElement = "earth"
    myBasePower = 40
    mySpFct = 1.1
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "squob") {
    player.src = "/images/squob.png"
    pname.textContent = "Squob"
    moveA.textContent = "Spark"
    moveB.textContent = "Oil up"
    myMaxHP = 70
    myHP = 70
    myAttackPower = 40
    myDefense = 50
    mySpeed = 40
    myElement = "fire"
    myBasePower = 10
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "krokomo") {
    player.src = "/images/krokomo.png"
    pname.textContent = "Krokomo"
    moveA.textContent = "Dragon's breath"
    moveB.textContent = "Rage"
    myMaxHP = 70
    myHP = 70
    myAttackPower = 35
    myDefense = 50
    mySpeed = 50
    myElement = "fire"
    myBasePower = 50
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "konkle") {
    player.src = "/images/konkle.png"
    pname.textContent = "Konkle"
    moveA.textContent = "Smoke spew"
    moveB.textContent = "Withdraw"
    myMaxHP = 80
    myHP = 80
    myAttackPower = 15
    myDefense = 120
    mySpeed = 10
    myElement = "fire"
    myBasePower = 50
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "makoblin") {
    player.src = "/images/makoblin.png"
    pname.textContent = "Makoblin"
    moveA.textContent = "Jaws"
    moveB.textContent = "Sharpen" 
    myMaxHP = 50
    myHP = 50
    myAttackPower = 35
    myDefense = 30
    mySpeed = 75
    myElement = "water"
    myBasePower = 80
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "meowrus") {
    player.src = "/images/meowrus.png"
    pname.textContent = "Meowrus"
    moveA.textContent = "Shish kebab"
    moveB.textContent = "Bounce"
    myMaxHP = 75
    myHP = 75
    myAttackPower = 40
    myDefense = 80
    mySpeed = 5
    myElement = "water"
    myBasePower = 65
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}   else if (myMonName == "oomfo") {
    player.src = "/images/oomfo.png"
    pname.textContent = "Oomfo"
    moveA.textContent = "Venom whip"
    moveB.textContent = "Tender tentacles"
    myMaxHP = 100
    myHP = 100
    myAttackPower = 20
    myDefense = 70
    mySpeed = 30
    myElement = "water"
    myBasePower = 30
    mySpFct = 0.8
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
}
}

function setEnemyStats() {
    if (enemyName == "boonga") {
    enemy.src = "/images/boonga.png"
    ename.textContent = "Boonga"
    enemyMaxHP = 100
    enemyHP = 100
    enemyAttackpower = 20
    enemyDefense = 55
    enemySpeed = 45
    enemyElement = "earth"
    enemyBasePower = 40
    enemySpFct = 1.1
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "squob") {
    enemy.src = "/images/squob.png"
    ename.textContent = "Squob"
    enemyMaxHP = 70
    enemyHP = 70
    enemyAttackpower = 40
    enemyDefense = 50
    enemySpeed = 40
    enemyElement = "fire"
    enemyBasePower = 10
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "makoblin") {
    enemy.src = "/images/makoblin.png"
    ename.textContent = "Makoblin"
    enemyMaxHP = 50
    enemyHP = 50
    enemyAttackpower = 35
    enemyDefense = 30
    enemySpeed = 75
    enemyElement = "water"
    enemyBasePower = 80
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "meowrus") {
    enemy.src = "/images/meowrus.png"
    ename.textContent = "Meowrus"
    enemyMaxHP = 75
    enemyHP = 75
    enemyAttackpower = 40
    enemyDefense = 80
    enemySpeed = 5
    enemyElement = "water"
    enemyBasePower = 65
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "krokomo") {
    enemy.src = "/images/krokomo.png"
    ename.textContent = "Krokomo"
    enemyMaxHP = 70
    enemyHP = 70
    enemyAttackpower = 35
    enemyDefense = 55
    enemySpeed = 45
    enemyElement = "fire"
    enemyBasePower = 50
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "skabbit") {
    enemy.src = "/images/skabbit.png"
    ename.textContent = "Skabbit"
    enemyMaxHP = 60
    enemyHP = 60
    enemyAttackpower = 15
    enemyDefense = 70
    enemySpeed = 80
    enemyElement = "earth"
    enemyBasePower = 40
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "skellbo") {
    enemy.src = "/images/skellbo.png"
    ename.textContent = "Skellbo"
    enemyMaxHP = 140
    enemyHP = 140
    enemyAttackpower = 20
    enemyDefense = 30
    enemySpeed = 35
    enemyElement = "earth"
    enemyBasePower = 40
    enemySpFct = 1.1
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "konkle") {
    enemy.src = "/images/konkle.png"
    ename.textContent = "Konkle"
    enemyMaxHP = 80
    enemyHP = 80
    enemyAttackpower = 15
    enemyDefense = 120
    enemySpeed = 10
    enemyElement = "fire"
    enemyBasePower = 50
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}   else if (enemyName == "oomfo") {
    enemy.src = "/images/oomfo.png"
    ename.textContent = "Oomfo"
    enemyMaxHP = 100
    enemyHP = 100
    enemyAttackpower = 20
    enemyDefense = 70
    enemySpeed = 30
    enemyElement = "water"
    enemyBasePower = 40
    enemySpFct = 0.8
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}
}

//goofball selection//
//work in progress//
function setMyMon() {
    myMonName = goofBalls[chosenGoof]
}

function setBoonga() {
    chosenGoof = 0
    setMyMon()
}
function setSkabbit() {
    chosenGoof = 1
    setMyMon()
}

//battle mechanics//
function critroll() {
    let critical = Math.random() * critchance
    critical = Math.round(critical)
    if (critical == 9) {
        crithit = 1.5
        console.log("it's a critical hit!")
    }
     else {
        crithit = 1
    }
}

function elementInteraction() {
    if (myElement == "earth") {
        if (enemyElement == "earth") {
            elmt = 1
        } else if (enemyElement == "fire") {
            elmt = 0.5
        } else {
            elmt = 2
        }
    } else if (myElement == "fire") {
                if (enemyElement == "earth") {
            elmt = 2
        } else if (enemyElement == "fire") {
            elmt = 1
        } else {
            elmt = 0.5
        }
    } else {
                if (enemyElement == "earth") {
            elmt = 0.5
        } else if (enemyElement == "fire") {
            elmt = 2
        } else {
            elmt = 1
        }
    }
}

function scdyEffect() {
    if (myMonName == "boonga") {
    mySpeed = mySpeed*mySpFct
    } else if (myMonName == "skellbo") {
    myDefense = myDefense*mySpFct
    } else if (myMonName == "oomfo") {
    enemyDefense = enemyDefense * mySpFct
    }
}
function escdyEffect() {
    if (enemyName == "boonga") {
    enemySpeed = enemySpeed*enemySpFct
    } else if (enemyName == "skellbo") {
    enemyDefense = enemyDefense*enemySpFct
    } else if (enemyName == "oomfo") {
    myDefense = myDefense * enemySpFct
    }
}


//player attack//
function attack() {
    if (myHP > 0) {
    if (move == 1) {
    critroll()
    elementInteraction()
    roll = Math.random()*30 + 225
    roll = roll / 255
    enemyHP = enemyHP - myBasePower * myAttackPower / enemyDefense * crithit * elmt * roll;
    enemyHP = Math.round(enemyHP)
    updateHP()
    scdyEffect()
    } else {
    special()
    updateHP()
    }
    } else {
    myHP = 0
    updateHP()
    narrate.textContent = myMonName + " was defeated, you suck!"
    }
}

//enemy attack//
function enemyAttack() {
    if (enemyHP > 0) {
    let ranEnemyAtk = Math.random()*4
    ranEnemyAtk = Math.round(ranEnemyAtk)
    if (ranEnemyAtk > 1) {
    critroll()
    elementInteraction()
    roll = Math.random()*38 + 217
    roll = roll / 255
    myHP = myHP - enemyBasePower * enemyAttackpower / myDefense * crithit / elmt * roll;
    myHP = Math.round(myHP)
    updateHP()
    } else {
    eSpecial()
    updateHP()
    }
    } else {
    enemyHP = 0
    updateHP()
    narrate.textContent = enemyName + " was defeated, nice."
    }
}

//all special moves//
function special() {
    if (myMonName == "boonga") {
    enemyDefense = enemyDefense * 0.8
    function spmessage() {
    narrate.textContent = enemyName + " defense fell!"
    }
    setTimeout(spmessage,1500)
    } else if (myMonName == "skabbit") {
    myAttackPower = myAttackPower * 1.1
    mySpeed = mySpeed * 1.2
    function spmessage() {
    narrate.textContent = "Skabbit is swaggy as hell!"
    }
    setTimeout(spmessage,1500)
    } else if (myMonName == "skellbo") {
    let healing = myMaxHP - myHP
    myHP = myHP + healing/2
    myHP = Math.round(myHP)
    updateHP()
    function spmessage() {
    narrate.textContent = "Skellbo healed half its missing HP back!"
    }
    setTimeout(spmessage,1500)
    } else if (myMonName == "squob") {
    myAttackPower = myAttackPower * 6
    function spmessage() {
    narrate.textContent = "Squob is oiling up and boosting fire's power!"
    }
    setTimeout(spmessage,1500)
    } else if (myMonName == "krokomo") {
    enemyHP = enemyHP - 40
    } else if (myMonName == "konkle") {
    myDefense = myDefense * 1.2
    function spmessage() {
    narrate.textContent = "Konkle is retreating into its shell!"
    }
    setTimeout(spmessage,1500)
    } else if (myMonName == "makoblin") {
    myAttackPower = myAttackPower * 1.2
    function spmessage() {
    narrate.textContent = "Makoblin is sharpening its teeth!"
    }
    setTimeout(spmessage,1500)
    } else if (myMonName == "oomfo") {
    enemyAttackpower = enemyAttackpower * 0.8
    enemySpeed = enemySpeed * 0.9
    function spmessage() {
    narrate.textContent = enemyName + " is struggling!"
    }
    setTimeout(spmessage,1500)
    } else if (myMonName == "meowrus") {
    myDefense = 80
    myAttackPower = 40
    mySpeed = 5
    function spmessage() {
    narrate.textContent = "meowrus has undone all stat nerfs!"
    }
    setTimeout(spmessage,1500)
    } 
}

function eSpecial() {
    if (enemyName == "boonga") {
    myDefense = myDefense * 0.8
    function spmessage() {
    narrate.textContent = myMonName + " defense fell!"
    }
    setTimeout(spmessage,1500)
    } else if (enemyName == "skabbit") {
    enemyAttackpower = enemyAttackpower * 1.1
    enemySpeed = enemySpeed * 1.2
    function spmessage() {
    narrate.textContent = "Skabbit is swaggy as hell!"
    }
    setTimeout(spmessage,1500)
    } else if (enemyName == "skellbo") {
    let healing = enemyMaxHP - enemyHP
    enemyHP = enemyHP + healing/2
    enemyHP = Math.round(enemyHP)
    updateHP()
    function spmessage() {
    narrate.textContent = "Skellbo healed half its missing HP back!"
    }
    setTimeout(spmessage,1500)
    } else if (enemyName == "squob") {
    myAttackPower = enemyAttackPower * 6
    function spmessage() {
    narrate.textContent = "Squob is oiling up and boosting fire's power!"
    }
    setTimeout(spmessage,1500)
    } else if (enemyName == "krokomo") {
    myHP = myHP - 40
    } else if (enemyName == "konkle") {
    enemyDefense = enemyDefense * 1.2
    function spmessage() {
    narrate.textContent = "Konkle is retreating into its shell!"
    }
    setTimeout(spmessage,1500)
    } else if (enemyName == "makoblin") {
    enemyAttackpower = enemyAttackpower * 1.2
    function spmessage() {
    narrate.textContent = "Makoblin is sharpening its teeth!"
    }
    setTimeout(spmessage,1500)
    } else if (enemyName == "oomfo") {
    myAttackPower = myAttackPower * 0.8
    mySpeed = mySpeed * 0.9
    function spmessage() {
    narrate.textContent = myMonName + " is struggling!"
    }
    setTimeout(spmessage,1500)
    } else if (enemyName == "meowrus") {
    enemyDefense = 80
    enemyAttackpower = 40
    enemySpeed = 5
    function spmessage() {
    narrate.textContent = "meowrus has undone all stat nerfs!"
    }
    setTimeout(spmessage,1500)
    } 
}

//bepaal move
function setmoveA() {
    if (narrate.textContent == "choose a move idiot") {
    move = 1
    fight()
    }
}
function setmoveB() {
    if (narrate.textContent == "choose a move idiot") {
    move = 2
    fight()
    }
}

//narration
function message() {
    narrate.textContent = myMonName + " used attack!"
}
function emessage() {
    narrate.textContent = enemyName + " used attack!"
}
function xmessage() {
    narrate.textContent = "choose a move idiot"
}
function updateHP() {
    if (myHP < 1) {
        myHP = 0
        displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
        updateHPbars()
        lose()
    }
    if (enemyHP < 1) {
        enemyHP = 0
        displayhp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
        updateHPbars()
        win()
    }
    displayhp.textContent = "HP: " + myHP + "/" + myMaxHP
    updateHPbars()
    displayehp.textContent = "HP: " + enemyHP + "/" + enemyMaxHP
}

function fight() {
    if (mySpeed > enemySpeed) {
        attack()
        message()
        setTimeout(enemyAttack, 3000)
        setTimeout(emessage, 3000)
    } else if (mySpeed == enemySpeed) {
        let randomOutspeed = Math.floor(Math.random()*2)
        console.log(randomOutspeed)
        if (randomOutspeed == 1) {
            attack()
            message()
            setTimeout(enemyAttack, 3000)
            setTimeout(emessage, 3000)
        } else {
        enemyAttack()
        emessage()
        setTimeout(attack, 3000)
        setTimeout(message, 3000)
    }
    } else {
        enemyAttack()
        emessage()
        setTimeout(attack, 3000)
        setTimeout(message, 3000)
    }
    setTimeout(xmessage, 6000)
}

function win() {
    const img = document.getElementById("winner")
    img.style.display = "flex"
}

function lose() {
    const img = document.getElementById("loser")
    img.style.display = "flex"
}

//randomizes enemy goofball
function randomGB() {
randomGoof = Math.random()*9;
randomGoof = Math.floor(randomGoof)
}

//sets the right images and titles//

//arena//
myMonName = localStorage.getItem("playermon")
setStats()

randomGB()
enemyName = goofBalls[randomGoof]
setEnemyStats()

updateHPbars()

console.log(myMonName + ": " + myHP)
console.log(enemyName + ": " + enemyHP)

moveA.addEventListener("click", setmoveA)
moveB.addEventListener("click", setmoveB)