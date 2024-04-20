var Button100 = document.getElementsByClassName("openButton")[99];

var dataAttributes100 = {
    element: "Erbium",
    image: "68.webp",
    text: "Erbium."
};

function openPopupWindow100() {
  var image = dataAttributes100.image;
  var text = dataAttributes100.text;
  var element = dataAttributes100.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent100 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent100);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button100.addEventListener("click", openPopupWindow100);