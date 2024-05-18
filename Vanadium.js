var Button23 = document.getElementsByClassName("openButton")[22];

var dataAttributes23 = {
    element: "Vanadium",
    image: "23.webp",
    text: "Vanadium."
};

function openPopupWindow23() {
  var image = dataAttributes23.image;
  var text = dataAttributes23.text;
  var element = dataAttributes23.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent23 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent23);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button23.addEventListener("click", openPopupWindow23);