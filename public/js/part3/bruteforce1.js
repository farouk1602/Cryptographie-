const characters =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:',./<>?";

/* const targetPassword = "abcd";  */ // Change this to your target password
function bruteForceAttackAll(targetPassword) {
  const maxIndex = characters.length;
  let currentPassword = "";
  const startTime = new Date();

  function generateNextPassword(password) {
    if (password === "") {
      return characters[0];
    }

    let i = password.length - 1;
    let carry = true;

    while (i >= 0 && carry) {
      const charIndex = characters.indexOf(password[i]);
      if (charIndex < maxIndex - 1) {
        password =
          password.substring(0, i) +
          characters[charIndex + 1] +
          password.substring(i + 1);
        carry = false;
      } else {
        password =
          password.substring(0, i) + characters[0] + password.substring(i + 1);
        i--;
      }
    }

    if (carry) {
      password = characters[0] + password;
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

function startBruteForceAttackAll() {
  const targetPassword = document.getElementById("passwordInput").value;

  if (targetPassword === "") {
    alert("Veuillez entrer un mot de passe.");
    return;
  }

  bruteForceAttackAll(targetPassword);
}