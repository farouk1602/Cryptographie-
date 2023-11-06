function cacherLeMessage() {
  image = document.getElementById("fileInputImg").files[0];
  text = document.getElementById("messagepart4").value;
  console.log(image);
  console.log(text);
  imageoutput = CacherMessage(text, image);
  outputarea = document.getElementById("outputarea");
}
function AfficherLeMessage() {
  image = document.getElementById("fileInputImg").files[0];
  revealMessage(image);
}

function CacherMessage(message, photoFile) {
  imageBuffer = new FileReader();
  imageBuffer.readAsBinaryString(photoFile);

  imageBuffer.onload = function () {
    console.log(this.result.lastIndexOf("ÿÙ"));

    eofIndex = this.result.lastIndexOf("ÿÙ");

    outputBuffer = imageBuffer.result.slice(0, eofIndex + 2).concat(message);

    imgElement = document.createElement("img");
    imgElement.height = 200;
    // imgElement.width = 100;

    imgElement.src = "data:image/jpeg;base64," + btoa(outputBuffer);
    outputarea = document.getElementById("outputarea");

    outputarea.appendChild(imgElement);
  };
}

function revealMessage(photoFile) {
  imageBuffer = new FileReader();
  imageBuffer.readAsBinaryString(photoFile);
  var messageCacher = "";
  imageBuffer.onload = function () {
    console.log(this.result.lastIndexOf("ÿÙ"));

    eofIndex = this.result.lastIndexOf("ÿÙ");

    messageCacher = this.result.slice(eofIndex + 2);
    console.log(messageCacher);
    AfficheDansUI(messageCacher);
  };
}
function AfficheDansUI(msg) {
  box = document.getElementById("messagecacher");
  console.log(msg);
  box.value = msg;
}

document.getElementById("fileInputTxt").addEventListener("change", function () {
  const fileInput = this;
  const textarea = document.getElementById("messagepart4");

  if (fileInput.files.length > 0) {
    const selectedFile = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      textarea.value = e.target.result;
    };

    reader.readAsText(selectedFile);
  }
});
