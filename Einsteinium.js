var Button114 = document.getElementsByClassName("openButton")[113];

var dataAttributes114 = {
    element: "Einsteinium",
    image: "99.webp",
    text: "Einsteinium."
};

function openPopupWindow114() {
  var image = dataAttributes114.image;
  var text = dataAttributes114.text;
  var element = dataAttributes114.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent114 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent114);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button114.addEventListener("click", openPopupWindow114);