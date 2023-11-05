// Cesar
function chiffrementCesar(message, key) {
  let resultat = "";
  if (key % 26 == 0 || key == 1 || key % 13 == 0) {
    alert("Weak Key!!");
  } else {
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

//decalage
function decalageDroit(text) {
  msgdecaler = [];
  words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    text = words[i];
    wordDecaler = text;
    let letter = text[text.length - 1];
    wordDecaler = wordDecaler.split("");
    wordDecaler.pop();
    wordDecaler.unshift(letter);
    wordDecaler = wordDecaler.join("");

    msgdecaler[i] = wordDecaler;
  }
  msgdecaler = msgdecaler.join(" ");
  return msgdecaler;
}
function decalageGauche(text) {
  msgdecaler = [];
  words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    text = words[i];
    wordDecaler = text;
    let letter = text[0];
    wordDecaler = wordDecaler.split("");
    wordDecaler.shift();
    wordDecaler.push(letter);
    wordDecaler = wordDecaler.join("");

    msgdecaler[i] = wordDecaler;
  }
  msgdecaler = msgdecaler.join(" ");
  return msgdecaler;
}

/* function decryptDecalage(text) {
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
}  */

// affine
function verifyPrime(keyA, modulo) {
  function gcd(keyA, modulo) {
    if (modulo === 0) {
      return keyA;
    } else {
      return gcd(modulo, keyA % modulo);
    }
  }
  console.log(gcd(modulo, keyA % modulo));
  return gcd(modulo, keyA % modulo) === 1;
}
function cryptageAffine(text, keyA, keyB) {
  if (keyA == 1) {
    alert("weak key!!");
  } else {
    let cryptedMessage = "";
    let newLetter;
    Array.from(text).forEach((letter) => {
      const code = letter.charCodeAt(0);
      if (letter.match(/[a-z]/)) {
        // Encryption for lowercase letters
        newLetter = String.fromCharCode(
          (((code - 97) * keyA + keyB) % 26) + 97
        );
      } else if (letter.match(/[A-Z]/)) {
        // Encryption for uppercase letters
        newLetter = String.fromCharCode(
          (((code - 65) * keyA + keyB) % 26) + 65
        );
      } else {
        newLetter = String.fromCharCode(code);
      }
      cryptedMessage = cryptedMessage + newLetter;
    });
    return cryptedMessage;
  }
}

function decryptAffine(text, keyA, keyB) {
  let reverse = 1;
  while ((keyA * reverse) % 26 != 1) {
    reverse++;
  }
  console.log(reverse);
  let decryptedMessage = "";
  let newLetter;
  Array.from(text).forEach((letter) => {
    const code = letter.charCodeAt(0);
    if (letter.match(/[a-z]/)) {
      // Encryption for lowercase letters
      newLetter = String.fromCharCode(
        (((code - 97 - keyB) * reverse) % 26) + 97
      );
    } else if (letter.match(/[A-Z]/)) {
      // Encryption for uppercase letters
      newLetter = String.fromCharCode(
        (((code - 65 - keyB) * reverse) % 26) + 65
      );
    } else {
      newLetter = String.fromCharCode(code);
    }
    decryptedMessage = decryptedMessage + newLetter;
  });
  return decryptedMessage;
}

//mirroir
function Palindrome(word) {
  return word === word.split("").reverse().join("");
}
function Mirroir(phrase, key) {
  const words = phrase.split(" ");
  const reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (Palindrome(word)) {
      word = chiffrementCesar(word, key);
    }
    const reversedWord = word.split("").reverse().join("");
    reversedWords.push(reversedWord);
  }

  const reversedPhrase = reversedWords.join(" ");
  return reversedPhrase;
}

//apply
function applyEncryption() {
  const selectedMethod = document.getElementById("cryptingTypes").value;
  // Get the selected encryption method
  const message = document.getElementById("message").value;

  let result = "";

  if (selectedMethod === "Cesar") {
    const key = parseInt(document.getElementById("keyA").value);
    result = chiffrementCesar(message, key);
  } else if (selectedMethod === "Affine") {
    const key = parseInt(document.getElementById("keyA").value);
    const keyB = parseInt(document.getElementById("keyB").value);
    let gcd = verifyPrime(key, 26);
    if (gcd) {
      result = cryptageAffine(message, key, keyB);
    } else {
      alert("A And Modulo Not Prime");
    }
  } else if (selectedMethod === "DecalageDroit") {
    result = decalageDroit(message);
  } else if (selectedMethod === "DecalageGauche") {
    result = decalageGauche(message);
  } else if (selectedMethod === "Mirroir") {
    result = Mirroir(message, 2);
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
    result = decryptAffine(message, key, keyB);
  } else if (selectedMethod === "DecalageDroit") {
    result = decalageGauche(message);
  } else if (selectedMethod === "DecalageGauche") {
    result = decalageDroit(message);
  } else if (selectedMethod === "Mirroir") {
    result = Mirroir(message, -2);
  }

  document.getElementById("result").textContent = result;
}

//file
document.getElementById("fileButton").addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function () {
  const fileInput = this;
  const textarea = document.getElementById("message");

  if (fileInput.files.length > 0) {
    const selectedFile = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      textarea.value = e.target.result;
    };

    reader.readAsText(selectedFile);
  }
});

//download file
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const textarea = document.getElementById("result").value;
    const blob = new Blob([textarea], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "downloaded_file.txt";

    // Trigger a click event on the download link to start the download
    downloadLink.click();

    // Clean up by revoking the object URL
    URL.revokeObjectURL(url);
  });


const correctPassword = "j8$7Kl9oP2#dFgH@3lAsQ1rT5xY6^bNhGm9*pLo0iJ2nBvF8cV4k3#7e3%zX1&oR7qW1@uE4yR6tI9wS3^mCcD5fG8hJkL2nM4bV6c8xZ9@oP2kL3iN5mB7vF5gH2jK4lA6sD8fG0hJ9&j8$7Kl9oP2#dFgH@3lAsQ1rT5xY6^bNhGm9*pLo0iJ2nBvF8cV4k3#7e3%zX1&oR7qW1@uE4yR6tI9wS3^mCcD5fG8hJkL2nM4bV6c8xZ9@oP2kL3iN5mB7vF5gH2jK4lA6sD8fG0hJ9&"
;

function checkPassword() {
    const enteredPassword = document.getElementById("passwordinput").value;
    if (enteredPassword === correctPassword) {
        document.getElementById("decrypt").removeAttribute("disabled");
        document.getElementById("crypt").removeAttribute("disabled");
    } else {
        alert("Incorrect password. Access denied.");
    }
}
