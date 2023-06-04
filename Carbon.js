var Button6 = document.getElementsByClassName("openButton")[5];

var dataAttributes6 = {
    element: "Carbon",
    image: "6.jpg",
    text: "Carbon."
};

function openPopupWindow() {
  var image = dataAttributes6.image;
  var text = dataAttributes6.text;
  var element = dataAttributes6.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent6 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent6);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button6.addEventListener("click", openPopupWindow);