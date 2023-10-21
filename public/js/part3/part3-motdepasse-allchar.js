
function mot_de_passe_all() {
    var mot_de_Passe = "";
    var val_possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+!-=[]{}|;:',./<>?"; 
    for (var i = 0; i < 5; i++) {
      var index = Math.floor(Math.random() * val_possible.length);
      mot_de_Passe += val_possible.charAt(index);
    }
    document.getElementById("mot_de_Passeall").value = mot_de_Passe;
}


