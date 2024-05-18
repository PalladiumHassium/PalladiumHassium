var Button24 = document.getElementsByClassName("openButton")[23];

var dataAttributes24 = {
    element: "Chromium",
    image: "24.webp",
    text: "Chromium."
};

function openPopupWindow24() {
  var image = dataAttributes24.image;
  var text = dataAttributes24.text;
  var element = dataAttributes24.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent24 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent24);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button24.addEventListener("click", openPopupWindow24);