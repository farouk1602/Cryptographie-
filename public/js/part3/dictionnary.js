const socket = io();
let linesArray
socket.on("data", function (socket) {
  //socket hiya data ta3k
   linesArray = socket;
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
  const targetPassword = document.getElementById("passwordInput").value;

  if (targetPassword === "") {
    alert("Veuillez entrer un mot de passe.");
    return;
  }
  dictionnaryAttack(targetPassword);
}

