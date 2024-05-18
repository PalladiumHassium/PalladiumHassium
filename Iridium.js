var Button62 = document.getElementsByClassName("openButton")[61];

var dataAttributes62 = {
    element: "Iridium",
    image: "77.webp",
    text: "Iridium."
};

function openPopupWindow62() {
  var image = dataAttributes62.image;
  var text = dataAttributes62.text;
  var element = dataAttributes62.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent62 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent62);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button62.addEventListener("click", openPopupWindow62);