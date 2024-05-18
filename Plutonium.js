var Button109 = document.getElementsByClassName("openButton")[108];

var dataAttributes109 = {
    element: "Plutonium",
    image: "94.webp",
    text: "Plutonium."
};

function openPopupWindow109() {
  var image = dataAttributes109.image;
  var text = dataAttributes109.text;
  var element = dataAttributes109.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent109 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent109);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button109.addEventListener("click", openPopupWindow109);