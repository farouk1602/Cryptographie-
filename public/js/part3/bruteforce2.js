const char2 ="0123456789";


function bruteForceAttack09(targetPassword) {
  const maxIndex = char2.length;
  let currentPassword = "";
  const startTime = new Date();

  function generateNextPassword(password) {
    if (password === "") {
      return char2[0];
    }

    let i = password.length - 1;
    let carry = true;

    while (i >= 0 && carry) {
      const charIndex = char2.indexOf(password[i]);
      if (charIndex < maxIndex - 1) {
        password =
          password.substring(0, i) +
          char2[charIndex + 1] +
          password.substring(i + 1);
        carry = false;
      } else {
        password =
          password.substring(0, i) + char2[0] + password.substring(i + 1);
        i--;
      }
    }

    if (carry) {
      password = char2[0] + password;
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

function startBruteForceAttack09() {
  const targetPassword = document.getElementById("passwordInput2").value;

  if (targetPassword === "") {
    alert("Veuillez entrer un mot de passe.");
    return;
  }

  bruteForceAttack09(targetPassword);
}