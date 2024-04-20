var Button101 = document.getElementsByClassName("openButton")[100];

var dataAttributes101 = {
    element: "Thulium",
    image: "69.webp",
    text: "Thulium."
};

function openPopupWindow101() {
  var image = dataAttributes101.image;
  var text = dataAttributes101.text;
  var element = dataAttributes101.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent101 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent101);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button101.addEventListener("click", openPopupWindow101);