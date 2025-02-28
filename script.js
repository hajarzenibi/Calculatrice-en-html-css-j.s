let history = [];  // Pour stocker l'historique des calculs

// Fonction pour ajouter une valeur à l'historique
function addToHistory(value) {
    if (history.length >= 5) {  // Limite à 5 éléments pour l'exemple
        history.shift();  // Retirer le plus ancien
    }
    history.push(value);
    updateHistory();
}

// Fonction pour afficher l'historique
function updateHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = '';  // Réinitialiser la liste
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Fonction pour afficher/masquer l'historique
function toggleHistory() {
    console.log("Histoire togglée !");
    const historySection = document.getElementById("history");
    historySection.classList.toggle("show");
}

// Modifications dans la fonction calculateResult pour ajouter au historique
function calculateResult() {
    try {
        const expression = document.getElementById("display").value; // Récupérer l'expression avant calcul
        const result = eval(expression);  // Calculer le résultat
        document.getElementById("display").value = result; // Afficher le résultat
        addToHistory(`${expression} = ${result}`); // Ajouter à l'historique
    } catch {
        document.getElementById("display").value = "Erreur"; // En cas d'erreur
    }
}

// Autres fonctions de la calculatrice (inchangées)
function appendValue(value) {
    document.getElementById("display").value += value;
}

function appendParentheses() {
    document.getElementById("display").value += "()";
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLastChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
