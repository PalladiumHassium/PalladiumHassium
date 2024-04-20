var Button11 = document.getElementsByClassName("openButton")[10];

var dataAttributes11 = {
    element: "Sodium",
    image: "11.jpg",
    text: "Sodium."
};

function openPopupWindow11() {
  var image = dataAttributes11.image;
  var text = dataAttributes11.text;
  var element = dataAttributes11.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent11 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent11);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button11.addEventListener("click", openPopupWindow11);