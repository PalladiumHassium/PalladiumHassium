var Button110 = document.getElementsByClassName("openButton")[109];

var dataAttributes110 = {
    element: "Americium",
    image: "95.webp",
    text: "Americium."
};

function openPopupWindow110() {
  var image = dataAttributes110.image;
  var text = dataAttributes110.text;
  var element = dataAttributes110.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent110 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent110);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button110.addEventListener("click", openPopupWindow110);