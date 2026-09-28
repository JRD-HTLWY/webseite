
let quizFragen = [];
let frage = true;
let aktuelleFrage;
 
async function ladeQuizFragen() {
  const res = await fetch('./fragen.json');
  if (!res.ok) throw new Error(`JSON laden fehlgeschlagen: HTTP ${res.status}`);
  quizFragen = await res.json();
}

function ueberpruefeAntwort(){
    if(frage){
        neueFrage();
    }
    else{
        loesung();
    }
    document.getElementById("ausgabe").innerText = "Hallo Welt";
}

function neueFrage(){
    console.log("neueFrage() geoeffnet");
    aktuelleFrage = quizFragen[Math.floor(Math.random() * quizFragen.lenght)];
    document.getElementById("ausgabe").innerText = aktuelleFrage.question;
    frage = false;
}

function loesung(){
    let eingabe = document.getElementById("eingabe");
    if(eingabe.innerText == aktuelleFrage.answer){
        ausgabe.innerText = "Wunderbar";
    }
    else{
        ausgabe.innerText = "Leider falsch";
    }
    frage = true;
}
