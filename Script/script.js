function cittaScelta(){
    let nomeCitta = document.getElementById("citta").value;
    alert(nomeCitta + " è la citta che hai scelto");
}



const pi = 3.14;
function modificaValore(){
    pi = number;
}



function stampaTemperatura(){
    let temp = document.getElementById("temperatura").value;
    document.getElementById("risultato").append(temp + " gradi");
}


let vuoto;
function valoreVuoto(){
    document.getElementById("showValue").append(vuoto)
}

let numero = 42;
let parola = "ciao";
let flag = false;
let nulla = null;
let nonDefinito;
function tipiDati(){
    document.getElementById("campiDati").append(typeof numero + " " + typeof parola + " " + typeof flag + " " + typeof nulla + " " + typeof nonDefinito)
}

function calcola(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let operatore = document.getElementById("operator").value;
    switch(operatore){
        case "+" : 
            let somma = numero1 + numero2;
            document.getElementById("risultatoCalcolo").append(somma);
        break;

        case "-" : 
            let sottrazione = numero1 - numero2;
            document.getElementById("risultatoCalcolo").append(sottrazione);
        break;

        case "*" : 
            let moltiplicazione = numero1 * numero2;
            document.getElementById("risultatoCalcolo").append(moltiplicazione);
        break;

        case "/" :
            let divisione = numero1 / numero2;
            document.getElementById("risultatoCalcolo").append(divisione);
        break;

        case "%" :
            let resto = numero1 % numero2;
            document.getElementById("risultatoCalcolo").append(resto);

    }

}