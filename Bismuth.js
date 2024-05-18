var Button68 = document.getElementsByClassName("openButton")[67];

var dataAttributes68 = {
    element: "Bismuth",
    image: "83.webp",
    text: "Bismuth."
};

function openPopupWindow68() {
  var image = dataAttributes68.image;
  var text = dataAttributes68.text;
  var element = dataAttributes68.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent68 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent68);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button68.addEventListener("click", openPopupWindow68);