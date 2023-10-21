
function mot_de_passe_01() {
    var mot_de_Passe = "";
    var val_possible = "01";
    for (var i = 0; i < 3; i++) {
      var index = Math.floor(Math.random() * val_possible.length);
      mot_de_Passe += val_possible.charAt(index);
    }
    document.getElementById("mot_de_Passe01").value = mot_de_Passe;
}



