var Button48 = document.getElementsByClassName("openButton")[47];

var dataAttributes48 = {
    element: "Cadmium",
    image: "48.webp",
    text: "Cadmium."
};

function openPopupWindow48() {
  var image = dataAttributes48.image;
  var text = dataAttributes48.text;
  var element = dataAttributes48.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent48 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent48);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button48.addEventListener("click", openPopupWindow48);