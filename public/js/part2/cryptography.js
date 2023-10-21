function chiffrementCesar(message, key) {
  let resultat = "";

  for (let i = 0; i < message.length; i++) {
    let caractere = message[i];
    if (caractere.match(/[a-zA-Z]/)) {
      const code = message.charCodeAt(i);
      let lettreDecalee;
      if (caractere.match(/[a-z]/)) {
        // Encryption for lowercase letters
        lettreDecalee = String.fromCharCode(((code - 97 + key) % 26) + 97);
      } else {
        // Encryption for uppercase letters
        lettreDecalee = String.fromCharCode(((code - 65 + key) % 26) + 65);
      }
      resultat += lettreDecalee;
    } else {
      resultat += caractere;
    }
  }

  return resultat;
}

function dechiffrementCesar(message, key) {
  let resultat = "";

  for (let i = 0; i < message.length; i++) {
    let caractere = message[i];
    if (caractere.match(/[a-zA-Z]/)) {
      const code = message.charCodeAt(i);
      let lettreDecalee;
      if (caractere.match(/[a-z]/)) {
        // Decryption for lowercase letters
        lettreDecalee = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
      } else {
        // Decryption for uppercase letters
        lettreDecalee = String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
      }
      resultat += lettreDecalee;
    } else {
      resultat += caractere;
    }
  }

  return resultat;
}

/* function cryptageDecalage(text) {
  let cryptedMessage = "";
  Array.from(text).forEach((letter) => {
    let newValue = letter.charCodeAt(0) + 1;
    if (newValue === 123 || newValue === 91) {
      newValue = newValue - 26;
    }
    let newLetter = String.fromCharCode(newValue);
    cryptedMessage = cryptedMessage + newLetter;
  });
  return cryptedMessage;
}

function decryptDecalage(text) {
  let decryptedMessage = "";
  Array.from(text).forEach((letter) => {
    let newValue = letter.charCodeAt(0) - 1;
    if (newValue === 96 || newValue === 64) {
      newValue = newValue + 26;
    }
    let newLetter = String.fromCharCode(newValue);
    decryptedMessage = decryptedMessage + newLetter;
  });
  return decryptedMessage;
} */

function applyEncryption() {
  const selectedMethod = document.getElementById("cryptingTypes").value;
  // Get the selected encryption method
  console.log(selectedMethod);
  const message = document.getElementById("message").value;

  let result = "";

  if (selectedMethod === "Cesar") {
    const key = parseInt(document.getElementById("keyA").value);
    result = chiffrementCesar(message, key);
  } else if (selectedMethod === "Affine") {
    const key = parseInt(document.getElementById("keyA").value);
    const keyB = parseInt(document.getElementById("keyB").value);
  } else if (selectedMethod === "Decalage") {
    result = chiffrementCesar(message, 1);
  } else if (selectedMethod === "Mirroir") {
    // Call your Mirror encryption function here
  }

  document.getElementById("result").textContent = result;
}

function applyDecryption() {
  const selectedMethod = document.getElementById("cryptingTypes").value; // Get the selected decryption method
  const message = document.getElementById("message").value;

  let result = "";

  if (selectedMethod === "Cesar") {
    const key = parseInt(document.getElementById("keyA").value);
    result = dechiffrementCesar(message, key);
  } else if (selectedMethod === "Affine") {
    const key = parseInt(document.getElementById("keyA").value);
    const keyB = parseInt(document.getElementById("keyB").value);
    // Call your Affine decryption function here
  } else if (selectedMethod === "Decalage") {
    result = dechiffrementCesar(message, 1);
  } else if (selectedMethod === "Mirroir") {
    // Call your Mirror decryption function here
  }

  document.getElementById("result").textContent = result;
}
