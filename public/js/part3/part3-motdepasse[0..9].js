function mot_de_passe_09() {
    var mot_de_Passe = "";
    var val_possible = "0123456789";
    for (var i = 0; i < 5; i++) {
      var index = Math.floor(Math.random() * val_possible.length);
      mot_de_Passe += val_possible.charAt(index);
    }
    document.getElementById("mot_de_Passe09").value = mot_de_Passe;

}


