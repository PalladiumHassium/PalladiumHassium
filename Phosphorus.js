var Button15 = document.getElementsByClassName("openButton")[14];

var dataAttributes15 = {
    element: "Phosphorus",
    image: "15.jpg",
    text: "Phosphorus."
};

function openPopupWindow15() {
  var image = dataAttributes15.image;
  var text = dataAttributes15.text;
  var element = dataAttributes15.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent15 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent15);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button15.addEventListener("click", openPopupWindow15);