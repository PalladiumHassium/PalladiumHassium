var Button27 = document.getElementsByClassName("openButton")[26];

var dataAttributes27 = {
    element: "Cobalt",
    image: "27.webp",
    text: "Cobalt."
};

function openPopupWindow27() {
  var image = dataAttributes27.image;
  var text = dataAttributes27.text;
  var element = dataAttributes27.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent27 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent27);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button27.addEventListener("click", openPopupWindow27);