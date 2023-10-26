function generate(length) {
    let motdepasse = "";
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+!-=[]{}|;:',./<>?";
  
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charset.length);
      motdepasse += charset.charAt(index);
    }
    return motdepasse;
}

function bruteForceAttackAll(targetPassword) {
    let found = false;
    let candidate;
  
    const sTime = Date.now();
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+!-=[]{}|;:',./<>?";
    for (let len = 1; len <= 5; len++) {
      while (!found) {
        candidate = generate(len);
        console.log(candidate) ;
  
        if (candidate === targetPassword) {
          found = true;
          const eTime = Date.now();
          const Time = (eTime - sTime) / 1000;
          console.log(elapsedTime);
          document.getElementById("foundPassword").textContent = candidate;
          document.getElementById("elapsedTime").textContent = Time;
          return candidate;
        }
      }
    }
    return candidate;
}
  
function startBruteForceAttackAll() {
    const targetPassword = document.getElementById("passwordInput").value;
  
    if (targetPassword === "") {
      alert("Veuillez entrer un mot de passe.");
      return;
    }
    bruteForceAttackAll(targetPassword);
}
  