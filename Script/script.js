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

function verificaEta(){
    let eta = Number(document.getElementById("eta").value);
    if(eta >= 18){
        document.getElementById("verifica").append("maggiorenne")
    }
    else if(eta <=0){
        document.getElementById("verifica").append("età non valida")
    }
    else{
        document.getElementById("verifica").append("minorenne")
    }
}

function contatore(){
    for(let i = 0; i <=20; i++){
        document.getElementById("contatore").append(i + ", ");
    }
}

function soloPari(){
    for(let i = 0; i <=20; i++){
        if((i%2) == 0){
            document.getElementById("contatore").append(i + ", ");
        }
        else{
            null;
        }
    }
}

function rovescio(){
    let i = 10
    while (i>=1) {
        document.getElementById("contatore").append(i + ", ");
        i--;
    }
}

function tabellina(){
    for (let i = 1; i <= 10; i++) {
        document.getElementById("contatore").append(5*i + ", ");
    }
}