
let quizFragen = [];
let frage = true;
let aktuelleFrage;
let zaehlerFrage = 0;
let anzahlRichtigeAntwort = 0;
 
async function ladeQuizFragen() {
  try {
    const res = await fetch('./fragen.json');

    if (!res.ok) {
      throw new Error(`JSON laden fehlgeschlagen: HTTP ${res.status}`);
    }

    quizFragen = await res.json();

    ueberpruefeAntwort();
  } catch (error) {
    console.error('Fehler beim Laden der Quizfragen:', error);
  }
}


function ueberpruefeAntwort(){
    if(frage){
        neueFrage();
    }
    else{
        loesung();
    }
}

function neueFrage(){
    if(zaehlerFrage == 9){
        document.getElementById("ausgabe").innerText = "Richtige Antworten: " + anzahlRichtigeAntwort + "/10; " + (anzahlRichtigeAntwort/10)*100 + "%";
    }
    else{
        console.log("neueFrage() geoeffnet");
        aktuelleFrage = quizFragen[Math.floor(Math.random() * quizFragen.length)];
        document.getElementById("ausgabe").innerText = aktuelleFrage.question;
        frage = false;
        zaehlerFrage++;
    }
}

function loesung(){
    let eingabe = document.getElementById("eingabe");
    if(eingabe.value.toLowerCase() == aktuelleFrage.answer.toLowerCase()){
        ausgabe.innerText = "Wunderbar";
        anzahlRichtigeAntwort++;
    }
    else{
        ausgabe.innerText = "Leider falsch, Richtige Antwort: " + aktuelleFrage.answer;
    }
    frage = true;
}
