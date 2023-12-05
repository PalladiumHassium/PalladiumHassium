var Button29 = document.getElementsByClassName("openButton")[28];

var dataAttributes29 = {
    element: "Copper",
    image: "29.webp",
    text: "Copper."
};

function openPopupWindow29() {
  var image = dataAttributes29.image;
  var text = dataAttributes29.text;
  var element = dataAttributes29.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent29 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent29);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button29.addEventListener("click", openPopupWindow29);