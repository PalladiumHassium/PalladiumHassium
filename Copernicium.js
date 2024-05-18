var Button82 = document.getElementsByClassName("openButton")[81];

var dataAttributes82 = {
    element: "Copernicium",
    image: "112.webp",
    text: "Copernicium."
};

function openPopupWindow82() {
  var image = dataAttributes82.image;
  var text = dataAttributes82.text;
  var element = dataAttributes82.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent82 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent82);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button82.addEventListener("click", openPopupWindow82);