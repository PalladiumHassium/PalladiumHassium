var Button58 = document.getElementsByClassName("openButton")[57];

var dataAttributes58 = {
    element: "Hafnium",
    image: "72.webp",
    text: "Hafnium."
};

function openPopupWindow58() {
  var image = dataAttributes58.image;
  var text = dataAttributes58.text;
  var element = dataAttributes58.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent58 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent58);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button58.addEventListener("click", openPopupWindow58);