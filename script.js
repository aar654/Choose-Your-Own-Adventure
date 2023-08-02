//linking elements from external js file to html 
const textPrompt = document.getElementById("textPrompt");
const buttons = document.querySelectorAll('button');

const player = {
    //name: prompt("What is your name?"),
    name: "Aaron",
    HP: 100,
    MP: 5,
    Strength: 5,
    Speed: 5,
    Intelligence: 5
}

//textPrompt.innerHTML = `${player.name}, it is nice to meet you! Get ready for an adventure!`

function controlButtons(){
    buttons.forEach(function (e) {
        e.addEventListener("click", function() {
          console.log(e.innerHTML);
          textPrompt.innerHTML = (`You have chosen: ${e.innerHTML}`)
        });
      });
}

controlButtons();

