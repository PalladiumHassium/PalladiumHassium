var Button30 = document.getElementsByClassName("openButton")[29];

var dataAttributes30 = {
    element: "Zinc",
    image: "30.webp",
    text: "Zinc."
};

function openPopupWindow30() {
  var image = dataAttributes30.image;
  var text = dataAttributes30.text;
  var element = dataAttributes30.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent30 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent30);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button30.addEventListener("click", openPopupWindow30);