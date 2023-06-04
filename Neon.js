var Button10 = document.getElementsByClassName("openButton")[9];

var dataAttributes10 = {
    element: "Neon",
    image: "10.png",
    text: "Neon."
};

function openPopupWindow10() {
  var image = dataAttributes10.image;
  var text = dataAttributes10.text;
  var element = dataAttributes10.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";
  
  var popupContent10 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent10);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button10.addEventListener("click", openPopupWindow10);