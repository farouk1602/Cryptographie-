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












function cryptageDecalage(text) {
  const words = text.split(" ");
  console.log(words)
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const newword = word.split("") // Reverse each word
    console.log(newword.length)
    console.log(newword)
  }
  return words;
}
cryptageDecalage("qbc dwe")

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
  let cryptedMessage = "";
  let newLetter;
  Array.from(text).forEach((letter) => {
    const code = letter.charCodeAt(0);
    if (letter.match(/[a-z]/)) {
      // Encryption for lowercase letters
      newLetter = String.fromCharCode((((code - 97) * keyA + keyB) % 26) + 97);
    } else if (letter.match(/[A-Z]/)) {
      // Encryption for uppercase letters
      newLetter = String.fromCharCode((((code - 65) * keyA + keyB) % 26) + 65);
    } else {
      newLetter = String.fromCharCode(code);
    }
    cryptedMessage = cryptedMessage + newLetter;
  });
  return cryptedMessage;
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

function Palindrome(word) {
  return word === word.split("").reverse().join("");
}
function Mirroir(phrase) {
  const words = phrase.split(" "); // Split the phrase into words
  const reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (Palindrome(word)) {
      console.log("palindrom word detected:" + word);
    }
    const reversedWord = word.split("").reverse().join(""); // Reverse each word
    reversedWords.push(reversedWord);
  }

  const reversedPhrase = reversedWords.join(" "); // Recreate the reversed phrase

  return reversedPhrase;
}

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
      document.getElementById("errorText").innerHTML = "";
    } else {
      document.getElementById("errorText").innerHTML = "A And Modulo Not Prime";
    }
  } else if (selectedMethod === "Decalage") {
    result = chiffrementCesar(message, 1);
  } else if (selectedMethod === "Mirroir") {
    result = Mirroir(message);
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
  } else if (selectedMethod === "Decalage") {
    result = dechiffrementCesar(message, 1);
  } else if (selectedMethod === "Mirroir") {
    result = Mirroir(message);
    // Call your Mirror decryption function here
  }

  document.getElementById("result").textContent = result;
}



