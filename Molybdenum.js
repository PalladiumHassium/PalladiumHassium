var Button42 = document.getElementsByClassName("openButton")[41];

var dataAttributes42 = {
    element: "Molybdenum",
    image: "42.webp",
    text: "Molybdenum."
};

function openPopupWindow42() {
  var image = dataAttributes42.image;
  var text = dataAttributes42.text;
  var element = dataAttributes42.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent42 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent42);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button42.addEventListener("click", openPopupWindow42);