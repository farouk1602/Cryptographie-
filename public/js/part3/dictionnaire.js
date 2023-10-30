let request = require('request');
const fs = require('fs');
// Specify the file path
const filePath = '../passwords.txt';

// Read the file contents as a string
const fileContents = fs.readFileSync(filePath, 'utf-8');

const linesArray = fileContents.split('\n');
function dictionnaryAttack(targetPassword) {
    
    
    
    
    let found = false;
    const sTime = Date.now();
    let i = 0
    while(!found){
        if (linesArray[i] == targetPassword) {
            const eTime = Date.now();
            const Time = (eTime - sTime) / 1000;
            console.log(elapsedTime);
            document.getElementById("foundPassword").textContent = candidate;
            document.getElementById("elapsedTime").textContent = Time;
            found == true
            return candidate
            
        }
        i++;

    }
}
function startDictionnaryAttack() {
    const targetPassword = document.getElementById("passwordInput").value;
  
    if (targetPassword === "") {
      alert("Veuillez entrer un mot de passe.");
      return;
    }
    dictionnaryAttack(targetPassword);
}

