var Button74 = document.getElementsByClassName("openButton")[73];

var dataAttributes74 = {
    element: "Rutherfordium",
    image: "104.webp",
    text: "Rutherfordium."
};

function openPopupWindow74() {
  var image = dataAttributes74.image;
  var text = dataAttributes74.text;
  var element = dataAttributes74.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent74 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent74);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button74.addEventListener("click", openPopupWindow74);