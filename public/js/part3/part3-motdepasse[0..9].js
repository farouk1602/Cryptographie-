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
  let maxLength = 30;
  let found = false;

  while (!found) {
    const startTime = Date.now();
    const maxNum = 10 ** maxLength;

    for (let i = 0; i < maxNum; i++) {
      const candidate = i.toString();
      if (candidate === targetPassword) {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000;
        console.log(elapsedTime);
        document.getElementById("foundPassword").textContent = candidate;
        document.getElementById("elapsedTime").textContent = elapsedTime;
        return candidate;
      }
    }

    maxLength++;
  }

  return null;
}

function startBruteForceAttackDigits() {
  const targetPassword = document.getElementById("passwordInput").value + "";
  console.log(targetPassword);

  if (targetPassword === "") {
    alert("entrer un mot de passe.");
    return;
  }

  bruteForceAttackDigits(targetPassword);
}