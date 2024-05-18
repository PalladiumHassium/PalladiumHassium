var Button93 = document.getElementsByClassName("openButton")[92];

var dataAttributes93 = {
    element: "Promethium",
    image: "61.webp",
    text: "Promethium."
};

function openPopupWindow93() {
  var image = dataAttributes93.image;
  var text = dataAttributes93.text;
  var element = dataAttributes93.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent93 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent93);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button93.addEventListener("click", openPopupWindow93);