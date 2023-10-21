function mot_de_passe_09() {
    var mot_de_Passe = "";
    var val_possible = "0123456789";
    for (var i = 0; i < 5; i++) {
      var index = Math.floor(Math.random() * val_possible.length);
      mot_de_Passe += val_possible.charAt(index);
    }
    document.getElementById("mot_de_Passe09").value = mot_de_Passe;

}


function bruteForceAttackDigits(targetPassword) {
  const possibleChars = '0123456789';
  const startTime = Date.now();

  function recurse(currentPassword) {
      if (currentPassword === targetPassword) {
          const endTime = Date.now();
          const elapsedTime = (endTime - startTime) / 1000;

          document.getElementById('foundPassword').textContent = currentPassword;
          document.getElementById('elapsedTime').textContent = elapsedTime;
          return;
      }

      for (const char of possibleChars) {
          recurse(currentPassword + char);
      }
  }

  recurse('');
}

function startBruteForceAttackDigits() {
  const targetPassword = document.getElementById('passwordInput').value;

  if (targetPassword === '') {
      alert('Veuillez entrer un mot de passe cible.');
      return;
  }

  bruteForceAttackDigits(targetPassword);
}
  