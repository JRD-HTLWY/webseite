let frage = true;

function ueberpruefeAntwort(){
    if(frage){

    }
    document.getElementById("ausgabe").innerText = "Hallo Welt";
}

function neueFrage(){

}

function loesung(){

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