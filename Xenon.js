var Button54 = document.getElementsByClassName("openButton")[53];

var dataAttributes54 = {
    element: "Xenon",
    image: "54.webp",
    text: "Xenon."
};

function openPopupWindow54() {
  var image = dataAttributes54.image;
  var text = dataAttributes54.text;
  var element = dataAttributes54.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent54 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent54);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button54.addEventListener("click", openPopupWindow54);