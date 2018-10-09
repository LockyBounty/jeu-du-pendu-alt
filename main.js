//let tab = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
//let verifTab = [];
let memory = [];
let echec = 0;

function verifContenu(mot) {
    for (i = 0; i < memory.length; i++) {
        if (mot === memory[i]) {
            break;
        }
    }
    if (mot !== memory[i]) {
        return memory.splice(i, 0, mot);
    }
}

let tab = [];
let verifTab = [];

function create() {
    let motEntréé = document.querySelector('#champSaisie').value; //le mot a deviner
    let word = motEntréé.toUpperCase();
    tab = word.split('');
    document.querySelector('#champSaisie').style.display = "none";
    document.querySelector('#boutton').style.display = "none";
    document.querySelector('#bouttonTest').style.display = "block";
    document.querySelector('#champLetter').style.display = "block";

}

function guessLetter() {
    document.querySelector('#champLetter').value = "";
    document.querySelector('#champLetter').focus();
    let lettre = document.querySelector('#champLetter').value.toUpperCase();

    if (verifTab.join() !== tab.join()) {
        //let lettre = prompt(`DEVINEZ LE MOT SECRET : ${verifTab}\nVous avez entré : ${memory}`).toUpperCase();
        let checkLettre = false;
        verifContenu(lettre);
        for (i = 0; i < tab.length; i++) {
            if (lettre === tab[i]) {
                document.querySelector('.mot').innerHTML = "LETTRE TROUVER";
                verifTab[i] = tab[i];
                checkLettre = true;
            }
        }
        if (checkLettre == false) {
            document.querySelector('.mot').innerHTML = "C'est ratée";
            echec++;

            if (echec === 1) {
                document.querySelectorAll(".pendu")[0].className = "pendu hang2";
            } else if (echec === 2) {
                document.querySelectorAll(".pendu")[0].className = "pendu hang3";
            } else if (echec === 3) {
                document.querySelectorAll(".pendu")[0].className = "pendu hang4";
            } else if (echec === 4) {
                document.querySelectorAll(".pendu")[0].className = "pendu hang5";
            } else if (echec === 5) {
                document.querySelectorAll(".pendu")[0].className = "pendu hang6";
            } else {
                document.querySelector(".pendu").className = "pendu hang7";
                document.querySelector(".guess").innerHTML = `<p>HELAS, VOUS N'AVEZ GUERE PU LE SAUVER...</p><strong>しまった！</strong>`;
            }

        }

        else {
            if (verifTab.join() === tab.join()) {
                document.querySelectorAll(".pendu")[0].className = "pendu succes";
                document.querySelector(".guess").innerHTML = `<p>FÉLICITATION ! VOUS AVEZ REUSSI AVEC ${echec} FAUTE(S)</p><strong>おめでとう !</strong>`;
            }
        }
    }
}

document.querySelector('#champLetter').style.display = "none";
document.querySelector('#boutton').addEventListener('click', create);
document.querySelector('#bouttonTest').addEventListener('click', guessLetter);
document.addEventListener('keyup',  function(event) {
    if(event.keyCode == 13) {
        guessLetter();
    }
});

