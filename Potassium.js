var Button19 = document.getElementsByClassName("openButton")[18];

var dataAttributes19 = {
    element: "Potassium",
    image: "19.webp",
    text: "Potassium."
};

function openPopupWindow19() {
  var image = dataAttributes19.image;
  var text = dataAttributes19.text;
  var element = dataAttributes19.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent19 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent19);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button19.addEventListener("click", openPopupWindow19);