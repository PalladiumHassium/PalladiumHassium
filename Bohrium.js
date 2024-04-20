var Button77 = document.getElementsByClassName("openButton")[76];

var dataAttributes77 = {
    element: "Bohrium",
    image: "107.webp",
    text: "Bohrium."
};

function openPopupWindow77() {
  var image = dataAttributes77.image;
  var text = dataAttributes77.text;
  var element = dataAttributes77.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent77 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent77);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button77.addEventListener("click", openPopupWindow77);