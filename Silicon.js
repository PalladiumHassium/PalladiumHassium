var Button14 = document.getElementsByClassName("openButton")[13];

var dataAttributes14 = {
    element: "Silicon",
    image: "14.jpg",
    text: "Silicon."
};

function openPopupWindow14() {
  var image = dataAttributes14.image;
  var text = dataAttributes14.text;
  var element = dataAttributes14.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent14 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent14);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button14.addEventListener("click", openPopupWindow14);