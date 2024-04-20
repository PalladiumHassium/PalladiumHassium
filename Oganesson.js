var Button88 = document.getElementsByClassName("openButton")[87];

var dataAttributes88 = {
    element: "Oganesson",
    image: "118.webp",
    text: "Oganesson."
};

function openPopupWindow88() {
  var image = dataAttributes88.image;
  var text = dataAttributes88.text;
  var element = dataAttributes88.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent88 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent88);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button88.addEventListener("click", openPopupWindow88);