var Button78 = document.getElementsByClassName("openButton")[77];

var dataAttributes78 = {
    element: "Hassium",
    image: "108.webp",
    text: "Hassium."
};

function openPopupWindow78() {
  var image = dataAttributes78.image;
  var text = dataAttributes78.text;
  var element = dataAttributes78.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=780,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent78 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent78);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button78.addEventListener("click", openPopupWindow78);