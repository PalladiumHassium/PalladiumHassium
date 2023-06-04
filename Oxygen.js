var Button8 = document.getElementsByClassName("openButton")[7];

var dataAttributes8 = {
    element: "Oxygen",
    image: "8.png",
    text: "Oxygen."
};

function openPopupWindow8() {
  var image = dataAttributes8.image;
  var text = dataAttributes8.text;
  var element = dataAttributes8.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent8 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent8);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button8.addEventListener("click", openPopupWindow8);