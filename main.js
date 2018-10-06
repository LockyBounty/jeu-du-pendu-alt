let tab = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let verifTab = ['', '', '', '', '', '', ''];
let memory = [];

function verifContenu(mot) {
    for(i = 0; i < memory.length; i++) {
        if (mot === memory[i]) {
            break;
        }
    }
    if (mot !== memory[i]) {
        return memory.splice(i, 0, mot);
    }
}

/*
function guessLetter() {
    let echec = 0;
    while (verifTab.join() !== tab.join()) {
        let lettre = prompt(`DEVINEZ LE MOT SECRET : ${verifTab}\nVous avez entré : ${memory}`).toUpperCase();
        while(lettre.length > 1) {
            alert('ENTREZ UN SEUL CARACTÉRE !');
            return guessLetter();
        }
        let vrai;
        let faux;
        verifContenu(lettre);
        for (i = 0; i < tab.length; i++) {
            if (lettre === tab[i]) {
                alert('LETTRE TROUVÉE !');
                verifTab.splice(i, 1, tab[i]);
                vrai = true;
            } else {
                faux = true;
            }
        }
        if(vrai !== true && faux === true) {
            alert('RATÉ');
            echec++;
        }   
    }
    confirm(`FÉLICITATION ! VOUS AVEZ REUSSI AVEC ${echec} FAUTE(S)`);
}
*/

function guessLetter() {
    let echec = 0;
    while (verifTab.join() !== tab.join()) {
        let lettre = prompt(`DEVINEZ LE MOT SECRET : ${verifTab}\nVous avez entré : ${memory}`).toUpperCase();
        while (lettre.length > 1) {
            alert('ENTREZ UN SEUL CARACTÉRE !');
            return guessLetter();
        }
        let vrai;
        let faux;
        verifContenu(lettre);
        for (i = 0; i < tab.length; i++) {
            if (lettre === tab[i]) {
                alert('LETTRE TROUVÉE !');
                verifTab.splice(i, 1, tab[i]);
                vrai = true;
            } else {
                faux = true;
            }
        }
        if (vrai !== true && faux === true) {
            alert('RATÉ');
            echec++;
        }
    }
    confirm(`FÉLICITATION ! VOUS AVEZ REUSSI AVEC ${echec} FAUTE(S)`);
}

guessLetter();