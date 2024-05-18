var Button18 = document.getElementsByClassName("openButton")[17];

var dataAttributes18 = {
    element: "Argon",
    image: "18.jpg",
    text: "Argon."
};

function openPopupWindow18() {
  var image = dataAttributes18.image;
  var text = dataAttributes18.text;
  var element = dataAttributes18.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent18 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent18);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button18.addEventListener("click", openPopupWindow18);