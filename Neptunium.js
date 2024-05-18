var Button108 = document.getElementsByClassName("openButton")[107];

var dataAttributes108 = {
    element: "Neptunium",
    image: "93.webp",
    text: "Neptunium."
};

function openPopupWindow108() {
  var image = dataAttributes108.image;
  var text = dataAttributes108.text;
  var element = dataAttributes108.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent108 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent108);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button108.addEventListener("click", openPopupWindow108);