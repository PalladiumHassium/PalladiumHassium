var Button86 = document.getElementsByClassName("openButton")[85];

var dataAttributes86 = {
    element: "Livermorium",
    image: "116.webp",
    text: "Livermorium."
};

function openPopupWindow86() {
  var image = dataAttributes86.image;
  var text = dataAttributes86.text;
  var element = dataAttributes86.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent86 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent86);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button86.addEventListener("click", openPopupWindow86);