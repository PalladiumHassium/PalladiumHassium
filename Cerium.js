var Button90 = document.getElementsByClassName("openButton")[89];

var dataAttributes90 = {
    element: "Cerium",
    image: "58.webp",
    text: "Cerium."
};

function openPopupWindow90() {
  var image = dataAttributes90.image;
  var text = dataAttributes90.text;
  var element = dataAttributes90.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent90 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent90);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button90.addEventListener("click", openPopupWindow90);