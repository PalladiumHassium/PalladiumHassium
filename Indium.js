var Button49 = document.getElementsByClassName("openButton")[48];

var dataAttributes49 = {
    element: "Indium",
    image: "49.webp",
    text: "Indium."
};

function openPopupWindow49() {
  var image = dataAttributes49.image;
  var text = dataAttributes49.text;
  var element = dataAttributes49.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent49 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent49);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button49.addEventListener("click", openPopupWindow49);