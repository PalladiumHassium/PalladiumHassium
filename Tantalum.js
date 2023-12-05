var Button59 = document.getElementsByClassName("openButton")[58];

var dataAttributes59 = {
    element: "Tantalum",
    image: "73.webp",
    text: "Tantalum."
};

function openPopupWindow59() {
  var image = dataAttributes59.image;
  var text = dataAttributes59.text;
  var element = dataAttributes59.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent59 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent59);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button59.addEventListener("click", openPopupWindow59);