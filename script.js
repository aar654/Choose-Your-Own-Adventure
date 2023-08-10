//linking elements from external js file to html elements
const textPrompt = document.getElementById("textPrompt");
const previousDecision = document.getElementById("previousDecision");
const buttons = document.querySelectorAll('#choiceContainer button');
const buttonA = document.getElementById("buttonA")
const buttonB = document.getElementById("buttonB")
const buttonC = document.getElementById("buttonC")
const statButton = document.getElementById("statButton");
const statList = document.getElementById("statList");
const playerName = document.getElementById("playerName");
const playerHP = document.getElementById("playerHP");
const playerMP = document.getElementById("playerMP");
const playerStr = document.getElementById("playerStr");
const playerSpd = document.getElementById("playerSpd");
const playerInt = document.getElementById("playerInt");

//player object used to hold player name and stats
const player = {
    //name: prompt("What is your name?"),
    name: "Player Name",
    HP: 100,
    MP: 5,
    Strength: 5,
    Speed: 5,
    Intelligence: 5
};

//this function calls the initial event that starts the game
function initialEvent() {
    buttons.forEach( (e) => {
        e.addEventListener("click", function () {
            if (e.innerHTML === "a torch") {
                previousDecision.innerHTML = (`You have chosen:${e.innerHTML}!`)
                textPrompt.innerHTML = (`Let's see if we can light this thing. You feel around and find some flint and steel and light the torch. You look around and see three doors. You choose...`)
                doorRoute(e);
            } else if (e.innerHTML === "a sword") {
                previousDecision.innerHTML = (`You have chosen:${e.innerHTML}! + 5 Strength!`)
                player.Strength += 5;
                textPrompt.innerHTML = (`Looks like you're the brawny type! You grab the sword and suddenly it begins to glow. You use it as a light. You look around and see three doors. You choose...`);
                doorRoute(e);

            } else if (e.innerHTML === "a book") {
                previousDecision.innerHTML = (`You have chosen:${e.innerHTML}! + 5 Intelligence and +5 MP!`)
                player.Intelligence = player.Intelligence + 5;
                player.MP += 5;
                textPrompt.innerHTML = (`Looks like you're the brainy type! Smart move. You open the book and realize its a spellbook. As you open it, it begins to glow. You can also see now too! You look around and see three doors. You choose...`);
                doorRoute(e);

            }

        });
    });
}

function doorRoute(e) {
    buttonA.innerHTML = "Left Door";
    buttonB.innerHTML = "Middle Door";
    buttonC.innerHTML = "Right Door";

    buttons.forEach(function (e) {
        e.addEventListener("click", function () {
            if (se.innerHTML === "Left Door") {
                leftDoorRoute(e);
            } else if (e.innerHTML === "Middle Door") {
                middleDoorRoute(e);
            } else if (e.innerHTML === "Right Door") {
                rightDoorRoute(e);

            }
        });
    });
}

function leftDoorRoute(e) {
    previousDecision.innerHTML = (`You have chosen:${e.innerHTML}!`)
    textPrompt.innerHTML = (`You choose the left door`);
}

function middleDoorRoute(e) {
    previousDecision.innerHTML = (`You have chosen:${e.innerHTML}!`)
    textPrompt.innerHTML = (`You choose the middle door`);
}

function rightDoorRoute(e) {
    previousDecision.innerHTML = (`You have chosen:${e.innerHTML}!`)
    textPrompt.innerHTML = (`You choose the right door`);
}



//button to open and close player stat list
statButton.onclick = function () {
    if (statList.style.display === "block") {
        statList.style.display = "none"
    } else {
        statList.style.display = "block"
    }

    playerName.innerHTML = (`${player.name}`);
    playerHP.innerHTML = (`HP: ${player.HP}`);
    playerMP.innerHTML = (`MP: ${player.MP}`);
    playerStr.innerHTML = (`Str: ${player.Strength}`);
    playerSpd.innerHTML = (`Spd: ${player.Speed}`);
    playerInt.innerHTML = (`Int: ${player.Intelligence}`);
};

initialEvent();

