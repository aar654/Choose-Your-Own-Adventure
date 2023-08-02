//linking elements from external js file to html 
const textPrompt = document.getElementById("textPrompt");
const buttons = document.querySelectorAll('#choiceContainer button');
const statButton = document.getElementById("statButton");
const statList = document.getElementById("statList")

const player = {
    //name: prompt("What is your name?"),
    name: "Player",
    HP: 100,
    MP: 5,
    Strength: 5,
    Speed: 5,
    Intelligence: 5
};

statButton.onclick = function(){
    if (statList.style.display = "none"){
        statList.style.display = "none"
    } else {
        statList.style.display = "flex"
    }
};

//textPrompt.innerHTML = `${player.name}, it is nice to meet you! Get ready for an adventure!`

function controlButtons() {
    buttons.forEach(function (e) {
        e.addEventListener("click", function () {
            console.log(e.innerHTML);
            textPrompt.innerHTML = (`You have chosen: ${e.innerHTML}`)
        });
    });
};

controlButtons();

