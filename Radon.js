var Button71 = document.getElementsByClassName("openButton")[70];

var dataAttributes71 = {
    element: "Radon",
    image: "86.webp",
    text: "Radon."
};

function openPopupWindow71() {
  var image = dataAttributes71.image;
  var text = dataAttributes71.text;
  var element = dataAttributes71.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent71 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent71);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button71.addEventListener("click", openPopupWindow71);