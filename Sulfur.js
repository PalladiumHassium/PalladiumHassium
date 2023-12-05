var Button16 = document.getElementsByClassName("openButton")[15];

var dataAttributes16 = {
    element: "Sulfur",
    image: "16.webp",
    text: "Sulfur."
};

function openPopupWindow16() {
  var image = dataAttributes16.image;
  var text = dataAttributes16.text;
  var element = dataAttributes16.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent16 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent16);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button16.addEventListener("click", openPopupWindow16);