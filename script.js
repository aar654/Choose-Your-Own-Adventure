//linking elements from external js file to html elements
const textPrompt = document.getElementById("textPrompt");
const buttons = document.querySelectorAll('#choiceContainer button');
const statButton = document.getElementById("statButton");
const statList = document.getElementById("statList");
const playerName = document.getElementById("playerName");
const playerHP = document.getElementById("playerHP");
const playerMP = document.getElementById("playerMP");
const playerStr = document.getElementById("playerStr");
const playerSpd = document.getElementById("playerSpd");
const playerInt = document.getElementById("playerInt");

//player object used to hold player stats
const player = {
    //name: prompt("What is your name?"),
    name: "Player Name",
    HP: 100,
    MP: 5,
    Strength: 5,
    Speed: 5,
    Intelligence: 5
};

//button to open and close player stat list
statButton.onclick = function(){
    if (statList.style.display === "block"){
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

//textPrompt.innerHTML = `${player.name}, it is nice to meet you! Get ready for an adventure!`

//function used to control player choices
function controlButtons() {
    buttons.forEach(function (e) {
        e.addEventListener("click", function () {
            textPrompt.innerHTML = (`You have chosen: ${e.innerHTML}`)
        });
    });
};

controlButtons();

