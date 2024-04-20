var Button65 = document.getElementsByClassName("openButton")[64];

var dataAttributes65 = {
    element: "Mercury",
    image: "80.webp",
    text: "Mercury."
};

function openPopupWindow65() {
  var image = dataAttributes65.image;
  var text = dataAttributes65.text;
  var element = dataAttributes65.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent65 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent65);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button65.addEventListener("click", openPopupWindow65);