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
    let motEntree = document.querySelector('#champSaisie').value; //le mot a deviner
    let word = motEntree.toUpperCase();
    tab = word.split('');
    document.querySelector('.phrase').innerHTML = "ENTRÉE UNE LETTRE";
    document.querySelector('#champSaisie').style.display = "none";
    document.querySelector('#boutton').style.display = "none";
    document.querySelector('#bouttonTest').style.display = "block";
    document.querySelector('#champLetter').style.display = "block";
    document.querySelector('#champLetter').focus();
}

function guessLetter() {
    document.querySelector('#champLetter').focus();
    let lettre = document.querySelector('#champLetter').value.toUpperCase();

    if (verifTab.join() !== tab.join()) {
        let checkLettre = false;
        verifContenu(lettre);
        for (i = 0; i < tab.length; i++) {
            if (lettre === tab[i]) {
                document.querySelector('.mot').innerHTML = "LETTRE TROUVÉE !";
                verifTab[i] = tab[i];
                checkLettre = true;
            }
        }
        document.querySelector('.verif').innerHTML = `${verifTab}`;
        document.querySelector('.lettreDevine').innerHTML = `LES LETTRES DEJA SELECTIONNER : <br>${memory}`;
        if (checkLettre === false) {
            document.querySelector('.mot').innerHTML = "C'ESR RATÉ";
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
    document.querySelector('#champLetter').value = "";
}

document.querySelector('#champLetter').style.display = "none";
document.querySelector('#champSaisie').focus();

document.querySelector('#boutton').addEventListener('click', create);

document.querySelector('#bouttonTest').addEventListener('click', guessLetter);

document.addEventListener('keyup',  function(event) {
    if(event.keyCode == 13) {
        guessLetter();
    }
});

