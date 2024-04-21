var Button13 = document.getElementsByClassName("openButton")[12];

var dataAttributes13 = {
    element: "Aluminum",
    image: "13.jpg",
    text: "Aluminum."
};

function openPopupWindow13() {
  var image = dataAttributes13.image;
  var text = dataAttributes13.text;
  var element = dataAttributes13.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent13 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent13);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button13.addEventListener("click", openPopupWindow13);