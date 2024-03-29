const char1 ="01";


function bruteForceAttack01(targetPassword) {
  const maxIndex = char1.length;
  let currentPassword = "";
  const startTime = new Date();

  function generateNextPassword(password) {
    if (password === "") {
      return char1[0];
    }

    let i = password.length - 1;
    let carry = true;

    while (i >= 0 && carry) {
      const charIndex = char1.indexOf(password[i]);
      if (charIndex < maxIndex - 1) {
        password =
          password.substring(0, i) +
          char1[charIndex + 1] +
          password.substring(i + 1);
        carry = false;
      } else {
        password =
          password.substring(0, i) + char1[0] + password.substring(i + 1);
        i--;
      }
    }

    if (carry) {
      password = char1[0] + password;
    }

    return password;
  }

  while (currentPassword !== targetPassword) {
    currentPassword = generateNextPassword(currentPassword);
    console.log(
      "Testing password:",
      currentPassword,
      "Length:",
      currentPassword.length
    );
  }

  const endTime = new Date();
  const elapsedTime = (endTime - startTime) / 1000; // in seconds
  document.getElementById("foundPassword").textContent = currentPassword;
  document.getElementById("elapsedTime").textContent = elapsedTime;
  return {
    password: currentPassword,
    startTime,
    endTime,
    elapsedTime,
  };
}

function startBruteForceAttack01() {
  const targetPassword = document.getElementById("passwordInput1").value;

  if (targetPassword === "") {
    alert("Veuillez entrer un mot de passe.");
    return;
  }

  bruteForceAttack01(targetPassword);
}