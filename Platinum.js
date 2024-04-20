var Button63 = document.getElementsByClassName("openButton")[62];

var dataAttributes63 = {
    element: "Platinum",
    image: "78.webp",
    text: "Platinum."
};

function openPopupWindow63() {
  var image = dataAttributes63.image;
  var text = dataAttributes63.text;
  var element = dataAttributes63.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent63 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent63);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button63.addEventListener("click", openPopupWindow63);