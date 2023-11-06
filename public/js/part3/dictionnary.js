const socket = io();
let linesArray
let linesArray01
let linesArray09
socket.on("data", function (socket) {
  //socket hiya data ta3k
   linesArray = socket[2];
   linesArray01 = ['000','001','010','011','100','101','110','111']
   linesArray09 = socket[1];
});
function dictionnaryAttack(targetPassword) {
    
    
    
    
  let found = false;
  const sTime = Date.now();
  let i = 0
  while(!found){
      if (linesArray[i] == targetPassword) {
          const eTime = Date.now();
          const Time = (eTime - sTime) / 1000;
          console.log(elapsedTime);
          document.getElementById("foundPassword").textContent = linesArray[i];
          document.getElementById("elapsedTime").textContent = Time;
          found == true
          return linesArray[i]
          
      }
      i++;

  }
}
function startDictionnaryAttack() {
  const targetPassword = document.getElementById("passwordInput3").value;

  if (targetPassword === "") {
    alert("Veuillez entrer un mot de passe.");
    return;
  }
  dictionnaryAttack(targetPassword);
}


function dictionnaryAttack01(targetPassword) {
    
    
    
    
  let found = false;
  const sTime = Date.now();
  let i = 0
  while(!found){
      if (linesArray01[i] == targetPassword) {
          const eTime = Date.now();
          const Time = (eTime - sTime) / 1000;
          console.log(elapsedTime);
          document.getElementById("foundPassword").textContent = linesArray01[i];
          document.getElementById("elapsedTime").textContent = Time;
          found == true
          return linesArray01[i]
          
      }
      i++;

  }
}
function startDictionnaryAttack01() {
  const targetPassword = document.getElementById("passwordInput1").value;

  if (targetPassword === "") {
    alert("Veuillez entrer un mot de passe.");
    return;
  }
  dictionnaryAttack01(targetPassword);
}


function dictionnaryAttack09(targetPassword) {
    
    
    
    
  let found = false;
  const sTime = Date.now();
  let i = 0
  while(!found){
      if (linesArray09[i] == targetPassword) {
          const eTime = Date.now();
          const Time = (eTime - sTime) / 1000;
          console.log(elapsedTime);
          document.getElementById("foundPassword").textContent = linesArray09[i];
          document.getElementById("elapsedTime").textContent = Time;
          found == true
          return linesArray09[i]
          
      }
      i++;

  }
}
function startDictionnaryAttack09() {
  const targetPassword = document.getElementById("passwordInput2").value;

  if (targetPassword === "") {
    alert("Veuillez entrer un mot de passe.");
    return;
  }
  dictionnaryAttack09(targetPassword);
}
