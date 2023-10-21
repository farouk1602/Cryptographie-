
function mot_de_passe_01() {
    var mot_de_Passe = "";
    var val_possible = "01";
    for (var i = 0; i < 3; i++) {
      var index = Math.floor(Math.random() * val_possible.length);
      mot_de_Passe += val_possible.charAt(index);
    }
    document.getElementById("mot_de_Passe01").value = mot_de_Passe;
}



function bruteForceAttack(targetPassword, passwordLength) {
  const possibleChars = ['0', '1'];
  const startTime = Date.now();

  function recurse(currentPassword) {
      if (currentPassword.length === passwordLength) {
          if (currentPassword === targetPassword) {
              const endTime = Date.now();
              const elapsedTime = (endTime - startTime) / 1000;

              document.getElementById('foundPassword').textContent = currentPassword;
              document.getElementById('elapsedTime').textContent = elapsedTime;
          }
          return;
      }

      for (const char of possibleChars) {
          recurse(currentPassword + char);
      }
  }

  recurse('');
}

function startBruteForceAttack() {
  const targetPassword = document.getElementById('passwordInput').value;
  const passwordLength = targetPassword.length;

  if (passwordLength === 0) {
      alert('Veuillez entrer un mot de passe cible.');
      return;
  }

  bruteForceAttack(targetPassword, passwordLength);
}





