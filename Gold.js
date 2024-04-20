var Button64 = document.getElementsByClassName("openButton")[64];

var dataAttributes64 = {
    element: "Gold",
    image: "79.webp",
    text: "Gold."
};

function openPopupWindow64() {
  var image = dataAttributes64.image;
  var text = dataAttributes64.text;
  var element = dataAttributes64.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent64 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent64);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button64.addEventListener("click", openPopupWindow64);