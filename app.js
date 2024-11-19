const target = document.getElementById("target");
let mots = 0
let lettres = 0;
let array = ["developpeur", "Photographe", "Creatif"];
function createLetter(){
const letter = document.createElement("span");
target.appendChild(letter);
    target.textContent += array[mots][lettres];
setTimeout(() => {
    letter.remove();
}, 2600);
}

const loop = () => {
    setTimeout(() => {
        if (lettres < array[mots].length) {
            loop();
            createLetter();
            lettres++;
            
        } else if (mots < array[mots].length){
            setTimeout(() => {
                loop();
                mots++;
            }, 2000);
        }
    }, 50)
}
loop();
createLetter()