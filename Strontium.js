var Button38 = document.getElementsByClassName("openButton")[37];

var dataAttributes38 = {
    element: "Strontium",
    image: "38.webp",
    text: "Strontium."
};

function openPopupWindow38() {
  var image = dataAttributes38.image;
  var text = dataAttributes38.text;
  var element = dataAttributes38.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent38 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent38);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button38.addEventListener("click", openPopupWindow38);