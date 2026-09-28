
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
    aktuelleFrage = quizFragen[Math.floor(Math.random() * quizFragen.lenght)];
    document.getElementById("ausgabe").innerText = zufallsFrage.question;
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

//code von Darwins KI
// Hier anpassen
const QUIZ = {
  title:  "Wie gut kennst du dich aus?",
  desc:   "Teste dein Wissen. Kein Zeitlimit.",
  button: "Quiz starten",
  onStart() { location.href = "quiz.html"; }   // oder eigene Funktion
};

document.title = QUIZ.title;
title.textContent = QUIZ.title;
desc.textContent = QUIZ.desc;
start.textContent = QUIZ.button;
start.addEventListener("click", QUIZ.onStart);
