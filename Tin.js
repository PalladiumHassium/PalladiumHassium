var Button50 = document.getElementsByClassName("openButton")[49];

var dataAttributes50 = {
    element: "Tin",
    image: "50.webp",
    text: "Tin."
};

function openPopupWindow50() {
  var image = dataAttributes50.image;
  var text = dataAttributes50.text;
  var element = dataAttributes50.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent50 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent50);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button50.addEventListener("click", openPopupWindow50);