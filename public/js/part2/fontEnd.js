let type = document.getElementById("cryptingTypes");
let cryptingType = document.getElementById("cryptingType");

let keyALabel = document.getElementById("keyALabel");
let keyA = document.getElementById("keyA");
let keyBLabel = document.getElementById("keyBLabel");
let keyB = document.getElementById("keyB");

type.addEventListener("change", function () {
  keyA.classList.add("hidden");
  keyALabel.classList.add("hidden");
  keyB.classList.add("hidden");
  keyBLabel.classList.add("hidden");

  var value = type.value;
  cryptingType.innerHTML = value;

  if (value === "Cesar") {
    keyA.classList.remove("hidden");
    keyALabel.classList.remove("hidden");
    keyALabel.innerHTML = "Key";
  } else if (value === "Affine") {
    keyA.classList.remove("hidden");
    keyALabel.classList.remove("hidden");
    keyALabel.innerHTML = "A";
    keyB.classList.remove("hidden");
    keyBLabel.classList.remove("hidden");
    keyBLabel.innerHTML = "B";
  }
});
