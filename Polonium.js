var Button69 = document.getElementsByClassName("openButton")[68];

var dataAttributes69 = {
    element: "Polonium",
    image: "84.webp",
    text: "Polonium."
};

function openPopupWindow69() {
  var image = dataAttributes69.image;
  var text = dataAttributes69.text;
  var element = dataAttributes69.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent69 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent69);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button69.addEventListener("click", openPopupWindow69);