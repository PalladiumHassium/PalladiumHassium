var Button95 = document.getElementsByClassName("openButton")[94];

var dataAttributes95 = {
    element: "Europium",
    image: "63.webp",
    text: "Europium."
};

function openPopupWindow95() {
  var image = dataAttributes95.image;
  var text = dataAttributes95.text;
  var element = dataAttributes95.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent95 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent95);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button95.addEventListener("click", openPopupWindow95);