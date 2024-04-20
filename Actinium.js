var Button104 = document.getElementsByClassName("openButton")[103];

var dataAttributes104 = {
    element: "Actinium",
    image: "89.webp",
    text: "Actinium."
};

function openPopupWindow104() {
  var image = dataAttributes104.image;
  var text = dataAttributes104.text;
  var element = dataAttributes104.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent104 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent104);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button104.addEventListener("click", openPopupWindow104);