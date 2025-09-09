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
    let calcolo;

    let numero1HTML = document.getElementById("numero1");
    let numero1 = Number(numero1HTML.value);

    let numero2HTML = document.getElementById("numero2");
    let numero2 = Number(numero2HTML.value);

    let operatore = document.getElementById("operator").value;

    let risultato = document.getElementById("risultatoCalcolo");
    risultato.innerHTML = "";

    numero1HTML.value = "";
    numero2HTML.value = "";
    
    switch(operatore){
        case "+" : 
            calcolo = numero1 + numero2;
        break;

        case "-" : 
            calcolo = numero1 - numero2;
        break;

        case "*" : 
            calcolo = numero1 * numero2;
        break;

        case "/" :
            calcolo = numero1 / numero2;
        break;

        case "%" :
            calcolo = numero1 % numero2;
        break;
    }
    risultato.innerHTML =  calcolo ;

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