var Button26 = document.getElementsByClassName("openButton")[25];

var dataAttributes26 = {
    element: "Iron",
    image: "26.webp",
    text: "Iron."
};

function openPopupWindow26() {
  var image = dataAttributes26.image;
  var text = dataAttributes26.text;
  var element = dataAttributes26.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent26 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent26);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button26.addEventListener("click", openPopupWindow26);