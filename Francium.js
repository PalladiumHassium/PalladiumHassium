var Button72 = document.getElementsByClassName("openButton")[71];

var dataAttributes72 = {
    element: "Francium",
    image: "87.webp",
    text: "Francium."
};

function openPopupWindow72() {
  var image = dataAttributes72.image;
  var text = dataAttributes72.text;
  var element = dataAttributes72.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent72 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent72);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button72.addEventListener("click", openPopupWindow72);