
window.quizFragen = [];
 
async function ladeQuizFragen() {
  const res = await fetch('./fragen.json');
  if (!res.ok) throw new Error(`JSON laden fehlgeschlagen: HTTP ${res.status}`);
  window.quizFragen = await res.json();
  return window.quizFragen;
}
 
// Promise, auf den andere Skripte warten können: await quizFragenBereit;
window.quizFragenBereit = ladeQuizFragen();

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
